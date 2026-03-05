import H1 from '@/components/h1';
import AuthForm from '@/components/auth-form';
import Link from 'next/link';
import { signup } from '@/actions/auth.actions';

export default function Page() {
    return (
        <main>
            <H1 className="text-center mb-5">Sign Up</H1>
            <AuthForm
                action={signup}
                buttonLabel="Sign up"
                buttonLabelLoading="Signing up..."
            />
            <p className="text-center mt-6 text-sm text-zinc-500">
                Alreay have an account?{' '}
                <Link href="/login" className="font-medium">
                    Log in
                </Link>
            </p>
        </main>
    );
}
