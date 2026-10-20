
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";
import nextEnv from "@next/env";

const { loadEnvConfig } = nextEnv;

// Load variables from .env.local
loadEnvConfig(process.cwd());

const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
const password = process.env.ADMIN_PASSWORD;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!email || !password || !supabaseUrl || !serviceKey) {
  throw new Error(
    "Required environment variables are missing in .env.local"
  );
}

if (password.length < 12) {
  throw new Error("Use a password with at least 12 characters.");
}

const supabase = createClient(supabaseUrl, serviceKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

const passwordHash = await bcrypt.hash(password, 12);

const { error } = await supabase
  .from("admin_users")
  .upsert(
    {
      email,
      password_hash: passwordHash,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "email" }
  );

if (error) {
  console.error("Admin creation failed:", error);
  console.error("Underlying cause:", error.cause);
  process.exitCode = 1;
} else {
  console.log(`Admin account created/updated for: ${email}`);

}
