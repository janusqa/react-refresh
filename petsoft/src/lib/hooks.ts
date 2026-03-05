import { PetContext } from '@/contexts/pet-context-provider';
import { SearchContext } from '@/contexts/search-context-provider';
import { useContext, useTransition } from 'react';
import { authClient } from './auth-client';
import { signout } from '@/actions/auth.actions';

export function usePetContext() {
    const context = useContext(PetContext);

    if (!context) {
        throw new Error(
            'usePetContext must be used witin a PetContextProvider',
        );
    }

    return context;
}

export function useSearchContext() {
    const context = useContext(SearchContext);

    if (!context) {
        throw new Error(
            'useSearchContext must be used witin a SearchContextProvider',
        );
    }

    return context;
}

export function useSignout() {
    const { data: session } = authClient.useSession();
    const [isPending, startTransition] = useTransition();

    const handleSignout = () =>
        startTransition(async () => {
            await signout();
        });

    return { session, isPending, handleSignout };
}
