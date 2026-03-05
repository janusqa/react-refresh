'use client';

import { CredentialsSchema } from '@/lib/validation';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';
import { AuthFormActionState } from '@/lib/types';
import { startTransition, useActionState, useEffect } from 'react';
import { toast } from 'sonner';
import PasswordInput from './ui/password-input';
import { useSearchParams } from 'next/navigation';

const initialState: AuthFormActionState = {
    success: false,
    message: '',
};

type AuthFormProps = {
    action: (
        prevState: AuthFormActionState,
        formData: FormData,
    ) => Promise<AuthFormActionState>;
    buttonLabel: string;
    buttonLabelLoading: string;
};

export default function AuthForm({
    action,
    buttonLabel,
    buttonLabelLoading,
}: AuthFormProps) {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl');

    const {
        register,
        trigger,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(CredentialsSchema),
        defaultValues: { callbackUrl: callbackUrl || '' },
    });

    const [state, formAction, isPending] = useActionState(action, initialState);

    useEffect(() => {
        // Skip initial state
        if (!state || (state.success === false && state.message === '')) return;

        if (state.success) {
            toast.success(state.message);
        } else {
            toast.error(state.message);
        }
    }, [state]);

    return (
        <div>
            <form
                action={formAction}
                onSubmit={async (e) => {
                    // Prevent default form submission to handle it manually
                    e.preventDefault();
                    const form = e.currentTarget;

                    // Trigger react-hook-form validation manually before calling the action
                    const results = await trigger();
                    if (!results) return;

                    // Collect form data and call the action
                    const formData = new FormData(form);

                    startTransition(() => formAction(formData));
                }}
                className="flex flex-col"
            >
                <Input
                    type="hidden"
                    id="callbackUrl"
                    {...register('callbackUrl')}
                />
                <div className="space-y-3">
                    <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            {...register('email')}
                            className="border-zinc-400"
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <PasswordInput
                            id="password"
                            {...register('password')}
                            className="border-zinc-400"
                        />
                        {errors.password && (
                            <p className="text-sm text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                </div>
                <Button
                    type="submit"
                    disabled={isPending}
                    className="mt-5 self-end"
                >
                    {isPending ? buttonLabelLoading : buttonLabel}
                </Button>
            </form>
        </div>
    );
}
