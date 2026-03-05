import { signin } from '@/actions/auth.actions';
import AuthForm from '@/components/auth-form';
import H1 from '@/components/h1';
import Link from 'next/link';

export default function Page() {
    return (
        <main>
            <H1 className="text-center mb-5">Log In </H1>
            <AuthForm
                action={signin}
                buttonLabel="Log in"
                buttonLabelLoading="Logging in..."
            />
            <p className="text-center mt-6 text-sm text-zinc-500">
                No account yet?{' '}
                <Link href="/signup" className="font-medium">
                    Sign up
                </Link>
            </p>
        </main>
    );
}
