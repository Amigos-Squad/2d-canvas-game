import React, { ReactElement, memo, useEffect } from 'react';
import { useAppSelector, useBoolean, useForm } from '@/utils';
import { IUser } from '@/models';
import { Form } from './Form';
import { OverviewHeader } from './OverviewHeader';
import { ContentColumn } from './ContentColumn';
import './Overview.scss';

export const Overview = memo((): ReactElement => {
  const { user } = useAppSelector('user');
  const [isPassword, toggle] = useBoolean();

  const { form, onChange, fullChange } = useForm<IUser>({
    email: '',
    firstName: '',
    login: '',
    displayName: '',
    secondName: '',
    phone: '',
    avatar: null,
  });

  const { form: passwordForm, onChange: changePassword } = useForm({
    password: '',
    newPassword: '',
    repeatPassword: '',
  });

  const onChangeHandler = (event: React.FormEvent<unknown>) => {
    const { name } = event.target as HTMLInputElement;

    if (name in form) {
      onChange(event);
    } else {
      changePassword(event);
    }
  };

  useEffect(() => {
    fullChange(user);
  }, [user, fullChange]);

  return (
    <div className="profile-overview">
      <OverviewHeader {...form} />
      <div className="profile-overview__content">
        <ContentColumn title="User Data">
          <Form
            {...form}
            {...passwordForm}
            onChange={onChangeHandler}
            isPassword={isPassword}
            togglePassword={toggle}
          />
        </ContentColumn>

        <ContentColumn title="Statistics">
          <div> </div>
        </ContentColumn>

        <ContentColumn title="Achievements">
          <div> </div>
        </ContentColumn>
      </div>
    </div>
  );
});
