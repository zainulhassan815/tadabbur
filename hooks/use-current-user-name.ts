import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export const useCurrentUserName = () => {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfileName = async () => {
      const { data, error } = await createClient().auth.getSession();
      if (error) {
        console.error(error);
      }

      setName(
        data.session?.user.user_metadata.full_name ??
          data.session?.user.email?.split("@")[0] ??
          "?",
      );
    };

    fetchProfileName();
  }, []);

  return name || "?";
};
