import React from 'react';

export default function Stats({
    stats: {
        numberOfCharacters,
        instagramCharactersLeft,
        facebookCharacthersleft,
        numberOfWords,
    },
}) {
    return (
        <section className="stats">
            <Stat number={numberOfWords} label="Words" />
            <Stat number={numberOfCharacters} label="Characters" />
            <Stat number={instagramCharactersLeft} label="Instagram" />
            <Stat number={facebookCharacthersleft} label="Facebook" />
        </section>
    );
}

function Stat({ number, label }) {
    return (
        <section className="stat">
            <span
                className={`stat__number ${
                    number < 0 ? 'stat__number--limit' : ''
                }`.trim()}
            >
                {number}
            </span>
            <h2 className="second-heading">{label}</h2>
        </section>
    );
}
