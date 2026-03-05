import ContentBlock from '@/components/content-block';
import H1 from '@/components/h1';
import { SignoutButton } from '@/components/signout-button';
import { getSession } from '@/lib/auth-session';

export default async function Page() {
    const session = await getSession();

    return (
        <div>
            <H1 className="text-white py-8">Your Account</H1>
            <ContentBlock className="h-125 flex flex-col items-center justify-center">
                <p>Logged in as {session?.user.email}</p>
                <SignoutButton />
            </ContentBlock>
        </div>
    );
}
