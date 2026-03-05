import AppFooter from '@/components/app-footer';
import AppHeader from '@/components/app-header';
import BackgroundPattern from '@/components/background-pattern';
import PetContextProvider from '@/contexts/pet-context-provider';
import SearchContextProvider from '@/contexts/search-context-provider';
import { getSession } from '@/lib/auth-session';
import { petService } from '@/services/pet.service';
import { redirect } from 'next/navigation';

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getSession();
    if (!session) redirect('/login');

    const data = await petService.getPets(session.user.id);

    return (
        <>
            <BackgroundPattern />
            <div className="flex flex-col max-w-262.5 mx-auto px-4 min-h-screen">
                <AppHeader />
                <SearchContextProvider>
                    <PetContextProvider data={data}>
                        {children}
                    </PetContextProvider>
                </SearchContextProvider>
                <AppFooter />
            </div>
        </>
    );
}
