import { useState } from 'react';

export default function useInput(init: string) {
    const [value, setValue] = useState(init);
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return {value, onChange}
}