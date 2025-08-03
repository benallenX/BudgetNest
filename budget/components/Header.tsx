import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"


const Header = () => {
  return (
    <header>
        <div className='flex items-center justify-between p-4'>
        <h1>BudgetNest</h1>
        <div>
            <SignedOut>
               <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
        </div>
    </header>
  )
}

export default Header