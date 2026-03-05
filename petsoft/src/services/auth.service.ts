import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import { TCredentials } from '@/lib/types';

async function signup(data: TCredentials) {
    const { email, password } = data;
    const response = await auth.api.signUpEmail({
        body: { email, password, name: email, callbackURL: '/dashboard' },
        headers: await headers(),
    });

    return response;
}

async function signin(data: TCredentials) {
    const { email, password } = data;
    const response = await auth.api.signInEmail({
        body: { email, password, callbackURL: '/dashboard' },
        headers: await headers(),
    });

    return response;
}

async function signout() {
    const response = await auth.api.signOut({
        headers: await headers(),
    });

    return response;
}

export const authService = { signup, signin, signout };
