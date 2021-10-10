import React, { ReactElement, memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector, useBoolean, useForm } from '@/utils';
import { updatePassword, updateProfile, updateAvatar } from '@/redux';
import { IUser } from '@/models';
import { Form } from './Form';
import { OverviewHeader } from './OverviewHeader';
import { ContentColumn } from './ContentColumn';
import { PasswordForm } from './Overview.types';
import './Overview.scss';

export const Overview = memo((): ReactElement => {
  const { user, userAvatar } = useAppSelector('user');
  const dispatch = useDispatch();

  const [isPassword, toggle] = useBoolean();
  const [avatar, changeAvatar] = useState('');
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
    if (userAvatar) {
      changeAvatar(userAvatar);
    }
  }, [userAvatar]);

  useEffect(() => {
    if (user) {
      fullChange(user);
    }
  }, [user]);

  const avatarChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const newForm = new FormData();
    newForm.append('avatar', target.files![0]);
    dispatch(updateAvatar(newForm));
  };

  return (
    <div className="profile-overview">
      <OverviewHeader
        avatar={avatar}
        login={user?.login}
        displayName={user?.displayName}
        onAvatarChange={avatarChangeHandler}
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
