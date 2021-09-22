import { Button } from '@/components/Button/button';
import { Input } from '@/components/Input';
import './../Auth.scss'
import useInput from '@/utils/hooks/useInput';
import React, { memo, ReactElement } from 'react';

export const RegistrationForm = memo((): ReactElement => {
    const email = useInput('')
    const login = useInput('')
    const password = useInput('')
    const passwordRepeat = useInput('')

    const onLogin = () => {
        console.log(password.value, login.value)
    }

    return (
        <>
            <Input {...email} label="Email"></Input>
            <Input {...login} label="Login"></Input>
            <Input {...password} label="Password"></Input>
            <Input {...passwordRepeat} label="Password"></Input>
            
            <div className="btn-block">
                <Button onClick={onLogin}>REGISTER</Button>
            </div>
        </>
    )
});
