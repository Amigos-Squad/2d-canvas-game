import React, { ReactElement } from 'react';
import { AvatarIcon } from '@/components/Icons/SVG/Avatar';
import './Overview.scss';
import { Input } from '@/components';
import { useForm } from '@/utils';
import { IUser } from '@/models';

export const Overview = (): ReactElement => {
  const [form, onChange] = useForm<IUser>({
    email: '',
    firstName: '',
    login: '',
    displayName: '',
    secondName: '',
    phone: '',
  });

  return (
    <div className="profile-page__overview profile-overview">
      <div className="profile-overview__title">
        <AvatarIcon />
        <div className="user">USER NAME</div>
        <div className="score">
          <div>max score</div>
          <div>4004</div>
        </div>
      </div>
      <form className="profile-overview__form">
        <Input
          value={form.displayName || ''}
          onChange={onChange}
          name="displayName"
          label="Display name"
        />
        <Input
          label="First name"
          value={form.firstName}
          onChange={onChange}
          name="firstName"
        />
        <Input
          label="Second name"
          value={form.secondName}
          onChange={onChange}
          name="secondName"
        />
        <Input
          label="Login"
          value={form.login}
          onChange={onChange}
          name="login"
        />
        <Input
          label="Email"
          value={form.email}
          onChange={onChange}
          name="email"
        />
        <Input
          label="Phone"
          value={form.phone}
          onChange={onChange}
          name="phone"
        />
      </form>
    </div>
  );
};
