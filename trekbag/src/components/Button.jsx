import React from 'react';

export default function Button({ handleClick, buttonType, children }) {
    return (
        <button
            onClick={handleClick}
            className={`btn ${
                buttonType === 'secondary' ? 'btn--secondary' : ''
            }`.trim()}
        >
            {children}
        </button>
    );
}
