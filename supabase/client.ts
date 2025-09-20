import { createClient } from "@supabase/supabase-js";


const supabaseUrl = import.meta.env.VITE_PROJECT_URL_SUPABASE;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL o API Key no definidas. Revisa tu .env y reinicia el servidor.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
