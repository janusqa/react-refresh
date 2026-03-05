'use client';

import { useSignout } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export function SignoutButtonNative({ className }: { className?: string }) {
    const { session, isPending, handleSignout } = useSignout();
    if (!session) return null;
    return (
        <button
            onClick={handleSignout}
            disabled={isPending}
            className={cn('', className)}
        >
            {isPending ? 'Signing out...' : 'Sign out'}
        </button>
    );
}

export function SignoutButton() {
    const { session, isPending, handleSignout } = useSignout();
    if (!session) return null;
    return (
        <Button
            onClick={handleSignout}
            disabled={isPending}
            variant="destructive"
        >
            {isPending ? 'Signing out...' : 'Sign out'}
        </Button>
    );
}
