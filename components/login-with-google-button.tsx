import { Button, buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import { GoogleLogo } from "@/components/google-logo";

export function LoginWithGoogleButton(
    props: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>
) {
    return (
        <Button type="button" variant="outline" {...props} >
            <GoogleLogo />
            {" "}
            Continue with Google
        </Button>
    );
}
