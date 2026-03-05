import { useState } from 'react';
import { Input } from './input';
import { Eye, EyeOff } from 'lucide-react';

export default function PasswordInput({ ...props }) {
    const [show, setShow] = useState(false);

    return (
        <div className="relative">
            <Input type={show ? 'text' : 'password'} {...props} />
            <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
                {show ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
        </div>
    );
}
