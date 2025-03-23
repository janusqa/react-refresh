import React from 'react';

export default function Title({ locked }) {
    return (
        <h1 className="title">
            {locked ? (
                <span>
                    Limit! Buy <strong>Pro</strong> for &gt;5
                </span>
            ) : (
                'Fancy Counter'
            )}
        </h1>
    );
}
