import { createClient } from "@supabase/supabase-js";


const supabaseUrl = process.env.NEXT_PUBLIC_PROJECT_URL_SUPABASE;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;


if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL o API Key no definidas. Revisa tu .env y reinicia el servidor.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
