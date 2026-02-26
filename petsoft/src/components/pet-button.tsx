'use client';

import { PlusIcon } from 'lucide-react';
import { Button } from './ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/dialog';
import PetForm from './pet-form';
import { useCallback, useState } from 'react';

type PetButtonProps = {
    disabled?: boolean;
    actionType: 'add' | 'edit' | 'checkout';
    children?: React.ReactNode;
    onClick?: () => void;
};

export default function PetButton({
    disabled,
    actionType,
    children,
    onClick,
}: PetButtonProps) {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleFormSubmission = useCallback(() => {
        setIsFormOpen(false);
    }, []);

    if (actionType === 'checkout') {
        return (
            <Button disabled={disabled} variant="secondary" onClick={onClick}>
                {children || 'Checkout'}
            </Button>
        );
    }

    if (actionType === 'add' || actionType === 'edit') {
        return (
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                <DialogTrigger asChild>
                    {actionType === 'add' ? (
                        <Button size="icon-lg">
                            <PlusIcon className="w-6 h-6" />
                        </Button>
                    ) : (
                        <Button disabled={disabled} variant="secondary">
                            {children || 'Edit'}
                        </Button>
                    )}
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {actionType === 'add'
                                ? 'Add a new pet'
                                : 'Edit pet details'}
                        </DialogTitle>
                    </DialogHeader>
                    <PetForm
                        actionType={actionType}
                        onFormSubmission={handleFormSubmission}
                    />
                </DialogContent>
            </Dialog>
        );
    }
}
