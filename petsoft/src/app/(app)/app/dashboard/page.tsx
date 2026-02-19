import Branding from '@/components/branding';
import Stats from '@/components/stats';

export default function Page() {
    return (
        <main>
            <div className="flex flex-row justify-between items-center text-white py-8">
                <Branding />
                <Stats />
            </div>
        </main>
    );
}
