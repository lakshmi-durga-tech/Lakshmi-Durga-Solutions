
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function authorize(request: NextRequest) {
  const token = request.cookies.get("lds_admin_session")?.value;
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!token || !secret || secret.length < 32) {
    return null;
  }

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(secret),
      { algorithms: ["HS256"] }
    );

    if (
      payload.role !== "admin" ||
      typeof payload.sub !== "string" ||
      typeof payload.email !== "string"
    ) {
      return null;
    }

    const supabase = createAdminClient();

    const { data: admin, error } = await supabase
      .from("admin_users")
      .select("id")
      .eq("id", payload.sub)
      .eq("email", payload.email)
      .maybeSingle();

    if (error || !admin) {
      return null;
    }

    return supabase;
  } catch {
    return null;
  }
}

function hasValidOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  return Boolean(origin && origin === request.nextUrl.origin);
}

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function validatePost(body: any) {
  const title = cleanText(body?.title, 200);
  const slug = cleanText(body?.slug, 220).toLowerCase();
  const category = cleanText(body?.category, 100);
  const excerpt = cleanText(body?.excerpt, 500);
  const content =
    typeof body?.content === "string" ? body.content.trim() : "";
  const seoTitle = cleanText(body?.seo_title, 200);
  const metaDescription = cleanText(body?.meta_description, 320);

  const keywords = Array.isArray(body?.keywords)
    ? body.keywords
        .filter((item: unknown): item is string => typeof item === "string")
        .map((item: string) => item.trim().slice(0, 80))
        .filter(Boolean)
        .slice(0, 20)
    : [];

  const status = body?.status;

  if (!title) {
    return { error: "Blog title is required." };
  }

  if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    return {
      error: "Enter a valid URL slug using lowercase letters, numbers and hyphens.",
    };
  }

  if (!category) {
    return { error: "Please enter a blog category." };
  }

  if (!excerpt) {
    return { error: "Short description is required." };
  }

  if (!content) {
    return { error: "Blog content is required." };
  }

  if (content.length > 100000) {
    return { error: "Blog content is too long. Maximum 100,000 characters." };
  }

  if (status !== "draft" && status !== "published") {
    return { error: "Status must be draft or published." };
  }

  return {
    data: {
      title,
      slug,
      category,
      excerpt,
      content,
      seo_title: seoTitle || title,
      meta_description: metaDescription || excerpt,
      keywords,
      status,
      updated_at: new Date().toISOString(),
      published_at:
        status === "published" ? new Date().toISOString() : null,
    },
  };
}

// GET: Load all blog posts for the admin dashboard.
export async function GET(request: NextRequest) {
  const supabase = await authorize(request);

  if (!supabase) {
    return NextResponse.json(
      { error: "Unauthorized. Please sign in again." },
      { status: 401 }
    );
  }

  const { data, error } = await supabase
    .from("blog_posts")
    .select(
      "id, title, slug, category, excerpt, content, seo_title, meta_description, keywords, status, created_at, updated_at, published_at"
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Load blog posts failed:", error.message);
    return NextResponse.json(
      { error: "Unable to load blog posts." },
      { status: 500 }
    );
  }

  return NextResponse.json({ posts: data ?? [] });
}

// POST: Create a new blog post.
export async function POST(request: NextRequest) {
  if (!hasValidOrigin(request)) {
    return NextResponse.json(
      { error: "Invalid request origin." },
      { status: 403 }
    );
  }

  const supabase = await authorize(request);

  if (!supabase) {
    return NextResponse.json(
      { error: "Unauthorized. Please sign in again." },
      { status: 401 }
    );
  }

  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { error: "Invalid request data." },
      { status: 400 }
    );
  }

  const validated = validatePost(body);

  if ("error" in validated) {
    return NextResponse.json(
      { error: validated.error },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("blog_posts")
    .insert(validated.data)
    .select("id, title, slug, status")
    .single();

  if (error) {
    console.error("Create blog post failed:", error.message);

    if (error.code === "23505") {
      return NextResponse.json(
        { error: "This URL slug already exists. Please use another slug." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Unable to create the blog post." },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { success: true, post: data },
    { status: 201 }
  );
}

// PATCH: Update an existing blog post.
export async function PATCH(request: NextRequest) {
  if (!hasValidOrigin(request)) {
    return NextResponse.json(
      { error: "Invalid request origin." },
      { status: 403 }
    );
  }

  const supabase = await authorize(request);

  if (!supabase) {
    return NextResponse.json(
      { error: "Unauthorized. Please sign in again." },
      { status: 401 }
    );
  }

  const body = await request.json().catch(() => null);
  const id = cleanText(body?.id, 100);

  if (!id) {
    return NextResponse.json(
      { error: "Blog ID is required." },
      { status: 400 }
    );
  }

  const validated = validatePost(body);

  if ("error" in validated) {
    return NextResponse.json(
      { error: validated.error },
      { status: 400 }
    );
  }

  // Preserve the original published date when editing an already
  // published post. Set a date when publishing for the first time.
  let publishedAt: string | null = null;

  if (validated.data.status === "published") {
    const { data: existing, error: lookupError } = await supabase
      .from("blog_posts")
      .select("id, published_at")
      .eq("id", id)
      .maybeSingle();

    if (lookupError) {
      console.error("Find blog post failed:", lookupError.message);
      return NextResponse.json(
        { error: "Unable to find the blog post." },
        { status: 500 }
      );
    }

    if (!existing) {
      return NextResponse.json(
        { error: "Blog post not found." },
        { status: 404 }
      );
    }

    publishedAt = existing.published_at || new Date().toISOString();
  }

  const { data, error } = await supabase
    .from("blog_posts")
    .update({
      ...validated.data,
      published_at: publishedAt,
    })
    .eq("id", id)
    .select("id, title, slug, status")
    .maybeSingle();

  if (error) {
    console.error("Update blog post failed:", error.message);

    if (error.code === "23505") {
      return NextResponse.json(
        { error: "This URL slug already exists. Please use another slug." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Unable to update the blog post." },
      { status: 500 }
    );
  }

  if (!data) {
    return NextResponse.json(
      { error: "Blog post not found." },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, post: data });
}

// DELETE: Delete a blog post.
export async function DELETE(request: NextRequest) {
  if (!hasValidOrigin(request)) {
    return NextResponse.json(
      { error: "Invalid request origin." },
      { status: 403 }
    );
  }

  const supabase = await authorize(request);

  if (!supabase) {
    return NextResponse.json(
      { error: "Unauthorized. Please sign in again." },
      { status: 401 }
    );
  }

  const body = await request.json().catch(() => null);
  const id = cleanText(body?.id, 100);

  if (!id) {
    return NextResponse.json(
      { error: "Invalid blog ID." },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("blog_posts")
    .delete()
    .eq("id", id)
    .select("id")
    .maybeSingle();

  if (error) {
    console.error("Delete blog post failed:", error.message);
    return NextResponse.json(
      { error: "Unable to delete the blog post." },
      { status: 500 }
    );
  }

  if (!data) {
    return NextResponse.json(
      { error: "Blog post not found." },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true });
}
