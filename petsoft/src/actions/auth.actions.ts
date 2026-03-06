'use server';

import { AuthFormActionState } from '@/lib/types';
import { CredentialsSchema } from '@/lib/validation';
import { authService } from '@/services/auth.service';
import { APIError } from 'better-auth/api';
import { redirect } from 'next/navigation';

export async function signin(
    prevState: AuthFormActionState,
    formData: unknown,
) {
    if (!(formData instanceof FormData))
        return { success: false, message: 'Invalid data' };

    let redirectPath: string | null = null;

    const validData = CredentialsSchema.safeParse(
        Object.fromEntries(formData.entries()),
    );
    if (!validData.success)
        return { success: false, message: 'Invalid credentials' };
    const data = validData.data;

    try {
        await authService.signin(data);
        redirectPath = data.callbackUrl || '/app/dashboard';
    } catch (error) {
        console.error(error);

        if (error instanceof APIError) {
            return { success: false, message: error.message };
        }

        return { success: false, message: 'Login failed' };
    }

    if (redirectPath) redirect(redirectPath);
    return { success: true, message: 'Login successful' };
}

export async function signup(
    prevState: AuthFormActionState,
    formData: unknown,
) {
    if (!(formData instanceof FormData))
        return { success: false, message: 'Invalid data' };

    let redirectPath: string | null = null;

    const validData = CredentialsSchema.safeParse(
        Object.fromEntries(formData.entries()),
    );
    if (!validData.success)
        return { success: false, message: 'Invalid credentials' };
    const data = validData.data;

    try {
        await authService.signup(data);
        redirectPath = '/app/dashboard';
    } catch (error) {
        console.error(error);

        if (error instanceof APIError) {
            return { success: false, message: error.message };
        }

        return { success: false, message: 'Signup failed' };
    }

    if (redirectPath) redirect(redirectPath);
    return { success: true, message: 'Signup successful' };
}

export async function signout() {
    let redirectPath: string | null = null;

    try {
        await authService.signout();
        redirectPath = '/';
    } catch (error) {
        console.error(error);

        if (error instanceof APIError) {
            return { success: false, message: error.message };
        }

        return { success: false, message: 'Signup failed' };
    }

    if (redirectPath) redirect(redirectPath);
    return { success: true, message: 'Signup successful' };
}
