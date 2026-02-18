import AppFooter from '@/components/app-footer';
import AppHeader from '@/components/app-header';
import BackgroundPattern from '@/components/background-pattern';

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <BackgroundPattern />
            <div className="max-w-262.5 mx-auto px-4">
                <AppHeader />
                {children}
                <AppFooter />
            </div>
        </>
    );
}
