import { useState } from 'react';
import { MAX_CHARACTERS } from '../lib/constants.ts';
import { useAddFeedbackItem } from '../store/feedbackItemsStore.ts';
import { extractHashtags } from '../lib/utils.ts';

export default function FeedbackForm() {
    const [text, setText] = useState('');
    const [isvalid, setIsvalid] = useState(true);
    const charactersRemaining = MAX_CHARACTERS - text.length;
    const onAddToList = useAddFeedbackItem();

    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length > MAX_CHARACTERS) return;
        setText(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // basic validation
        const hashtags = extractHashtags(text);

        if (hashtags.length === 1 && hashtags[0].length > 0) {
            setIsvalid(true);
        } else {
            setIsvalid(false);
            return;
        }

        onAddToList(text);
        setText('');
    };

    return (
        <form
            className={`form ${!isvalid ? 'form--invalid' : ''}`.trim()}
            onSubmit={handleSubmit}
        >
            <textarea
                value={text}
                onChange={handleChangeText}
                id="feedback-textarea"
                placeholder="test"
                spellCheck={false}
            />
            <label htmlFor="feedback-textarea">
                Enter your feedback here, remember to #hashtag the company
            </label>
            <div>
                <p className="u-italic">{charactersRemaining}</p>
                <button>
                    <span>Submit</span>
                </button>
            </div>
        </form>
    );
}
