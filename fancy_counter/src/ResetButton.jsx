import { ResetIcon } from '@radix-ui/react-icons';
import React from 'react';

export default function ResetButton({ setCount }) {
    const handleClick = (e) => {
        setCount(0);
        e.currentTarget.blur();
    };

    return (
        <button className="reset-btn">
            <ResetIcon className="reset-btn-icon" onClick={handleClick} />
        </button>
    );
}
