import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://neqljtoewvdovohzpudh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lcWxqdG9ld3Zkb3ZvaHpwdWRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4NjYxNjgsImV4cCI6MjA3MTQ0MjE2OH0.-bbwZBLu2wj7lVyZROP4AY2GL3NrSLuxItRi-m6balE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
