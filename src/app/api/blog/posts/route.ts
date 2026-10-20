import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const supabase = createAdminClient();

    const { data, error } = await supabase
      .from("blog_posts")
      .select(
        "id, title, slug, category, excerpt, content, seo_title, meta_description, keywords, created_at, published_at"
      )
      .eq("status", "published")
      .not("published_at", "is", null)
      .order("published_at", { ascending: false });

    if (error) {
      console.error("Public blog fetch failed:", error.message);

      return NextResponse.json(
        { error: "Unable to load blog posts." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { posts: data ?? [] },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("Public blog API error:", error);

    return NextResponse.json(
      { error: "Something went wrong while loading blogs." },
      { status: 500 }
    );
  }
}