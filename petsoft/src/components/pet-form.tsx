'use client';

import { usePetContext } from '@/lib/hooks';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { savePet } from '@/actions/actions';
import { toast } from 'sonner';
import { useActionState, useEffect } from 'react';
import { Button } from './ui/button';

type PetFormProps = {
    actionType: 'add' | 'edit';
    onFormSubmission: () => void;
};

type ActionState = {
    success: boolean;
    message: string;
    id: string;
};

const initialState: ActionState = { success: false, message: '', id: '' };

export default function PetForm({
    actionType,
    onFormSubmission,
}: PetFormProps) {
    const { selectedPet } = usePetContext();
    const [state, formAction, isPending] = useActionState(
        savePet,
        initialState,
    );

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
        <form action={formAction} className="flex flex-col">
            <Input
                type="hidden"
                id="id"
                name="id"
                defaultValue={actionType === 'edit' ? selectedPet?.id : ''}
            />
            <div className="space-y-3">
                <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        defaultValue={
                            actionType === 'edit' ? selectedPet?.name : ''
                        }
                    />
                </div>

                <div className="space-y-1">
                    <Label htmlFor="ownerName">Owner Name</Label>
                    <Input
                        id="ownerName"
                        name="ownerName"
                        type="text"
                        required
                        defaultValue={
                            actionType === 'edit' ? selectedPet?.ownerName : ''
                        }
                    />
                </div>

                <div className="space-y-1">
                    <Label htmlFor="imageUrl">Image Url</Label>
                    <Input
                        id="imageUrl"
                        name="imageUrl"
                        type="text"
                        defaultValue={
                            actionType === 'edit' ? selectedPet?.imageUrl : ''
                        }
                    />
                </div>

                <div className="space-y-1">
                    <Label htmlFor="age">Age</Label>
                    <Input
                        id="age"
                        name="age"
                        type="number"
                        required
                        defaultValue={
                            actionType === 'edit' ? selectedPet?.age : ''
                        }
                    />
                </div>

                <div className="space-y-1">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        defaultValue={
                            actionType === 'edit' ? selectedPet?.notes : ''
                        }
                    />
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
