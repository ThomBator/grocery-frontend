import { createClient } from "@supabase/supabase-js";
import "vite/client";

const supabaseUrl = import.meta.env.VITE_SUPABASE_API_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
