'use client';

import { usePetContext } from '@/lib/hooks';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { savePet } from '@/actions/actions';
import { toast } from 'sonner';
import { startTransition, useActionState, useEffect } from 'react';
import { Button } from './ui/button';
import { PetFormActionState } from '@/lib/types';
import { petSchema } from '@/lib/validation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type PetFormProps = {
    actionType: 'add' | 'edit';
    onFormSubmission: () => void;
};

const initialState: PetFormActionState = {
    success: false,
    message: '',
    id: null,
};

export default function PetForm({
    actionType,
    onFormSubmission,
}: PetFormProps) {
    const { selectedPet } = usePetContext();
    const [state, formAction, isPending] = useActionState(
        savePet,
        initialState,
    );

    const {
        register,
        trigger,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(petSchema),
        defaultValues: actionType === 'edit' ? selectedPet : undefined,
    });

    useEffect(() => {
        // Skip initial state
        if (!state || (state.success === false && state.message === '')) return;

        if (state.success) {
            toast.success(state.message);
            onFormSubmission();
        } else {
            toast.error(state.message);
        }
    }, [state, onFormSubmission]);

    return (
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
                id="id"
                name="id"
                defaultValue={
                    actionType === 'edit' ? selectedPet?.id : undefined
                }
            />
            <div className="space-y-3">
                <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" {...register('name')} />
                    {errors.name && (
                        <p className="text-sm text-red-500">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                <div className="space-y-1">
                    <Label htmlFor="ownerName">Owner Name</Label>
                    <Input id="ownerName" {...register('ownerName')} />
                    {errors.ownerName && (
                        <p className="text-sm text-red-500">
                            {errors.ownerName.message}
                        </p>
                    )}
                </div>

                <div className="space-y-1">
                    <Label htmlFor="imageUrl">Image Url</Label>
                    <Input id="imageUrl" {...register('imageUrl')} />
                    {errors.imageUrl && (
                        <p className="text-sm text-red-500">
                            {errors.imageUrl.message}
                        </p>
                    )}
                </div>

                <div className="space-y-1">
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" {...register('age')} />
                    {errors.age && (
                        <p className="text-sm text-red-500">
                            {errors.age.message}
                        </p>
                    )}
                </div>

                <div className="space-y-1">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea id="notes" {...register('notes')} />
                    {errors.notes && (
                        <p className="text-sm text-red-500">
                            {errors.notes.message}
                        </p>
                    )}
                </div>
            </div>
            <Button
                type="submit"
                disabled={isPending}
                className="mt-5 self-end"
            >
                {isPending ? 'Saving...' : 'Save'}
            </Button>
        </form>
    );
}
