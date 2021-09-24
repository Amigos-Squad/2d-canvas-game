import { Button } from '@/components/Button/button';
import { Input } from '@/components/Input';
import './../Auth.scss'
import useInput from '@/utils/hooks/useInput';
import React, { memo, ReactElement } from 'react';

export const LoginForm = memo((): ReactElement => {
    const password = useInput('')
    const login = useInput('')

    const onLogin = () => {
        console.log(password.value, login.value)
    }

    return (
        <>
            <Input {...password} label="Password"></Input>
            <Input {...login} label="Login"></Input>
            <div className="btn-block">
                <Button onClick={onLogin}>LOGIN</Button>
            </div>
        </>
    )
});
