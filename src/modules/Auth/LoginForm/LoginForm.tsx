import { Button } from '@/components/Button/button';
import { Input } from '@/components/Input';
import './../Auth.scss'
import React, { FormEvent, memo, ReactElement } from 'react';
import useForm from '@/utils/hooks/useForm';
import { authAPI } from '@/api/http/auth.api';
import { ILoginForm } from '@/modules';
import handleError from '@/utils/handlers/errorHandler';
import { ROUTES } from '@/utils';
import { useHistory } from 'react-router';
import { store } from '@/store';
import { login } from '@/store/userReducer';

export const LoginForm = memo((): ReactElement => {
    const form = useForm({
        password: '',
        login: ''
    })

    const history = useHistory();
    const redirect = () => {
        history.push(ROUTES.HOME)
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        authAPI.login(form.value as ILoginForm).then(() => {
            store.dispatch(login())
            redirect()
        }).catch(handleError)
    }

    return (
        <form onSubmit={onSubmit}>
            <Input value={form.value.password} onChange={form.onChange('password')} label="Password" required></Input>
            <Input value={form.value.login} onChange={form.onChange('login')} label="Login" required></Input>
            <div className="btn-block">
                <Button type="submit">LOGIN</Button>
            </div>
        </form>
    )
});
