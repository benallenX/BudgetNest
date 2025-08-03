import { Button } from "@/components/ui/button";
import { SignInButton,  SignUpButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold">Welcome to BudgetNest</h1>
      <div className="text-lg mt-2 mb-6">
        Your personal finance companion
      </div>
      <div className="flex gap-4">
        <Button asChild>
          <SignInButton forceRedirectUrl='/dashboard'/>
        </Button>
        <Button asChild variant="secondary">
          <SignUpButton/>
        </Button>
      </div>
    </main>
  );
}
