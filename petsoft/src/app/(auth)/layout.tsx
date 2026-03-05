import Logo from '@/components/logo';
import { getSession } from '@/lib/auth-session';
import { redirect } from 'next/navigation';

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getSession();
    if (session) redirect('/app/dashboard');

    return (
        <div className="flex flex-col gap-y-5 justify-center items-center min-h-screen">
            <Logo />
            {children}
        </div>
    );
}
