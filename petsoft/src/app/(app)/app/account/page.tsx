import ContentBlock from '@/components/content-block';
import H1 from '@/components/h1';

export default function Page() {
    return (
        <div>
            <H1 className="text-white py-8">Your Account</H1>
            <ContentBlock className="h-125 flex flex-col items-center justify-center">
                <p>Logged in as...</p>
            </ContentBlock>
        </div>
    );
}
