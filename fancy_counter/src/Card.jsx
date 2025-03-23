import React, { useEffect, useState } from 'react';
import Count from './Count';
import ButtonContainer from './ButtonContainer';
import ResetButton from './ResetButton';
import CountButton from './CountButton';
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import Title from './Title';

export default function Card() {
    const [count, setCount] = useState(0);
    const locked = count === 5;

    useEffect(function () {
        const handleSpacebar = (e) => {
            if (e.code === 'Space')
                setCount((prev) => (prev < 5 ? prev + 1 : prev));
        };

        window.addEventListener('keydown', handleSpacebar);

        return () => {
            window.removeEventListener('keydown', handleSpacebar);
        };
    }, []);

    return (
        <div className={`card ${locked ? 'card--limit' : ''}`.trim()}>
            <Title locked={locked} />
            <Count count={count} />
            <ResetButton setCount={setCount} />
            <ButtonContainer>
                <CountButton
                    locked={locked}
                    handleCount={() =>
                        setCount((prev) => (prev > 0 ? prev - 1 : prev))
                    }
                >
                    <MinusIcon className="count-btn-icon" />
                </CountButton>
                <CountButton
                    locked={locked}
                    handleCount={() =>
                        setCount((prev) => (prev < 5 ? prev + 1 : prev))
                    }
                >
                    <PlusIcon className="count-btn-icon" />
                </CountButton>
            </ButtonContainer>
        </div>
    );
}
