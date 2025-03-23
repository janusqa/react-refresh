import React from 'react';

export default function CountButton({ handleCount, locked, children }) {
    const handleClick = (e) => {
        handleCount();
        e.currentTarget.blur();
    };

    return (
        <button className="count-btn" onClick={handleClick} disabled={locked}>
            {children}
        </button>
    );
}
