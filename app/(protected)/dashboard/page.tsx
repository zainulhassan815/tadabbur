import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to Tadabbur, {data.claims.email}
        </p>
      </div>

      <div className="bg-accent/50 rounded-lg p-6">
        <p className="text-sm text-muted-foreground">
          Start building your Quranic reflection journey here.
        </p>
      </div>
    </div>
  );
}
