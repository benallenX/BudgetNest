import { Button } from "@/components/ui/button";
import { SignInButton,  SignUpButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div>
      <Button asChild>
        <SignInButton/>
      </Button>
      <Button asChild variant="secondary">
        <SignUpButton/>
      </Button>
    </div>
  );
}
