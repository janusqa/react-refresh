import React, { useState } from 'react';
import Warning from './Warning';

export default function TextArea({ text, setText }) {
    const [warningText, setWarningText] = useState('');

    const handleChange = (e) => {
        let newText = e.target.value;

        if (newText.includes('<script>')) {
            newText = newText.replace('<script>', '');
            setWarningText('No script tag allowed!');
        } else if (newText.includes('@')) {
            newText = newText.replace('@', '');
            setWarningText('No @ symbol allowed!');
        } else {
            setWarningText('');
        }

        setText(newText);
    };

    return (
        <div className="textarea">
            <textarea
                placeholder="Enter your text"
                spellCheck="false"
                value={text}
                onChange={handleChange}
            ></textarea>
            {warningText && <Warning message={warningText} />}
        </div>
    );
}
