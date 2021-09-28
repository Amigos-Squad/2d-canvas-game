import { useState } from 'react';

export default function useForm(init: Record<string, any>) {
    const [value, setValue] = useState(init);
    function onChange (field: string) {
        return (e: React.FormEvent<HTMLInputElement>) => {
            const cvalue = e.currentTarget.value
            setValue(prevState => ({
                ...prevState,
                [field]: cvalue
            }));
        }
    }
    return {value, onChange}
}