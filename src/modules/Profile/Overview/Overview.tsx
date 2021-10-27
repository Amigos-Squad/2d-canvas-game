import React, {
  ReactElement,
  memo,
  useEffect,
  useState,
  FormEvent,
} from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector, useBoolean, useForm } from '@/utils';
import { updatePassword, updateProfile, updateAvatar } from '@/redux';
import { IUser } from '@/models';
import { Form } from './Form';
import { OverviewHeader } from './OverviewHeader';
import { ContentColumn } from './ContentColumn';
import { PasswordForm } from './Overview.types';
import './Overview.scss';
import { DEFAULT_PASSWORD, DEFAULT_PROFILE } from './const';

export const Overview = memo((): ReactElement => {
  const { user, userAvatar } = useAppSelector('user');
  const dispatch = useDispatch();

  const [isPassword, toggle] = useBoolean();
  const [avatar, changeAvatar] = useState('');
  const {
    form,
    errors,
    onChange,
    fullChange,
    isChanged,
    reset,
    onSubmit: submitProfile,
  } = useForm<IUser>(DEFAULT_PROFILE, submitProfileCallback);

  const {
    form: passwordForm,
    errors: passErrors,
    onChange: changePassword,
    isChanged: isPassDataChanged,
    onSubmit: submitPassword,
  } = useForm<PasswordForm>(DEFAULT_PASSWORD, submitPasswordCallback);

  const onChangeHandler = (event: React.FormEvent<unknown>) => {
    const { name } = event.target as HTMLInputElement;

    if (name in form) {
      onChange(event);
    } else {
      changePassword(event);
    }
  };

  const avatarChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const newForm = new FormData();
    newForm.append('avatar', target.files![0]);
    dispatch(updateAvatar(newForm));
  };

  const updateHandler = (event: FormEvent) => {
    if (isPassDataChanged) {
      submitPassword(event, passwordForm);
    }

    submitProfile(event, form);
  };

  function submitPasswordCallback(newForm: PasswordForm) {
    dispatch(updatePassword(newForm));
  }

  function submitProfileCallback(newForm: IUser) {
    dispatch(updateProfile(newForm));
  }

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
            passErrors={passErrors}
            errors={errors}
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
