import { Button } from '@/components/Button/button';
import { Input } from '@/components/Input';
import './../Auth.scss'
import React, { FormEvent, memo, ReactElement } from 'react';
import useForm from '@/utils/hooks/useForm';
import { authAPI } from '@/api/http/auth.api';
import { login } from '@/store/userReducer';
import { store } from '@/store';
import { useHistory } from 'react-router';
import { ROUTES } from '@/utils';
import handleError from '@/utils/handlers/errorHandler';
import { IRegistrationForm } from '@/modules';

export const RegistrationForm = memo((): ReactElement => {

    const form = useForm({
        first_name: '',
        second_name: '',
        email: '',
        login: '',
        password: '',
        phone: '',
    })

    const history = useHistory();
    const redirect = () => {
        history.push(ROUTES.HOME)
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        // authAPI.logout().then(() => {
        //     store.dispatch(logout())
        // })
        authAPI.register(form.value as IRegistrationForm).then(() => {
            store.dispatch(login())
            redirect()
        }).catch(handleError)
    }

    return (
        <form onSubmit={onSubmit}>
            <Input value={form.value.first_name} onChange={form.onChange('first_name')} label="First name" required></Input>
            <Input value={form.value.second_name} onChange={form.onChange('second_name')} label="Second name" required></Input>
            <Input value={form.value.email} onChange={form.onChange('email')} label="Email" required></Input>
            <Input value={form.value.login} onChange={form.onChange('login')} label="Login" required></Input>
            <Input value={form.value.password} onChange={form.onChange('password')} label="Password" required></Input>
            <Input value={form.value.phone} onChange={form.onChange('phone')} label="Phone" required></Input>
            
            <div className="btn-block">
                <Button type="submit">REGISTER</Button>
            </div>
        </form>
    )
});
