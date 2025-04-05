import toast from 'react-hot-toast';

export const handleError = (error: unknown) => {
    const message =
        error instanceof Error
            ? error.message
            : typeof error === 'string'
            ? error
            : 'An unexpected error occured';

    toast.error(message);
};
