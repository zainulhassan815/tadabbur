import type { VariantProps } from "class-variance-authority";
import { GoogleLogo } from "@/components/google-logo";
import { Button, type buttonVariants } from "@/components/ui/button";

export function LoginWithGoogleButton(
  props: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>,
) {
  return (
    <Button type="button" variant="outline" {...props}>
      <GoogleLogo /> Continue with Google
    </Button>
  );
}
