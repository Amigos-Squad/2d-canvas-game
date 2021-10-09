import React, { ReactElement, memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector, useBoolean, useForm } from '@/utils';
import { IUser } from '@/models';
import { Form } from './Form';
import { OverviewHeader } from './OverviewHeader';
import { ContentColumn } from './ContentColumn';
import './Overview.scss';
import { PasswordForm } from './Overview.types';
import { updatePassword, updateProfile } from '@/redux/';

export const Overview = memo((): ReactElement => {
  const { user } = useAppSelector('user');
  const dispatch = useDispatch();

  const [isPassword, toggle] = useBoolean();

  const { form, onChange, fullChange, isChanged, reset } = useForm<IUser>({
    email: '',
    firstName: '',
    login: '',
    displayName: '',
    secondName: '',
    phone: '',
    avatar: null,
  });

  const {
    form: passwordForm,
    onChange: changePassword,
    isChanged: isPassDataChanged,
  } = useForm<PasswordForm>({
    newPasswordRepeat: '',
    newPassword: '',
    oldPassword: '',
  });

  const onChangeHandler = (event: React.FormEvent<unknown>) => {
    const { name } = event.target as HTMLInputElement;

    if (name in form) {
      onChange(event);
    } else {
      changePassword(event);
    }
  };

  const updateHandler = () => {
    if (isPassDataChanged) {
      dispatch(updatePassword(passwordForm));
    }

    dispatch(updateProfile(form));
  };

  useEffect(() => {
    if (user) {
      fullChange(user);
    }
  }, [user]);

  return (
    <div className="profile-overview">
      <OverviewHeader
        avatar={user?.avatar}
        login={user?.login}
        displayName={user?.displayName}
      />
      <div className="profile-overview__content">
        <ContentColumn title="User Data">
          <Form
            form={form}
            passForm={passwordForm}
            isChanged={isChanged}
            onChange={onChangeHandler}
            isPassword={isPassword}
            togglePassword={toggle}
            update={updateHandler}
            reset={reset}
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
