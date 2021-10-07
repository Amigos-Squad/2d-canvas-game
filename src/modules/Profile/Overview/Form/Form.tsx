import React, { memo, ReactElement } from 'react';
import { Input } from '@/components/Form';
import { Props } from './Form.types';
import { Button, BUTTON_TYPES } from '@/components';
import './Form.scss';

export const Form = memo(
  ({
    displayName = '',
    firstName,
    secondName,
    login,
    email,
    phone,
    isPassword,
    password,
    newPassword,
    repeatPassword,
    onChange,
    togglePassword,
  }: Props): ReactElement => (
    <form className="overview-form">
      <div className="overview-form__body">
        <Input
          value={displayName}
          onChange={onChange}
          name="displayName"
          label="Display name"
          horizontal
        />

        <Input
          label="First name"
          value={firstName}
          onChange={onChange}
          name="firstName"
          horizontal
        />

        <Input
          label="Second name"
          value={secondName}
          onChange={onChange}
          name="secondName"
          horizontal
        />

        <Input
          label="Login"
          value={login}
          onChange={onChange}
          name="login"
          horizontal
        />

        <Input
          label="Email"
          value={email}
          onChange={onChange}
          name="email"
          horizontal
          type="email"
        />

        <Input
          label="Phone"
          value={phone}
          onChange={onChange}
          name="phone"
          horizontal
          type="tel"
        />

        <>
          {isPassword && (
            <div className="overview-form__body password-fields">
              <div className="password-fields__title">Password change</div>
              <Input
                label="Current"
                value={password}
                onChange={onChange}
                name="password"
                type="password"
                horizontal
              />

              <Input
                label="New"
                value={newPassword}
                onChange={onChange}
                name="newPassword"
                type="password"
                horizontal
              />

              <Input
                label="Repeat"
                value={repeatPassword}
                onChange={onChange}
                name="repeatPassword"
                type="password"
                horizontal
              />
            </div>
          )}
          <div
            className="overview-form__password-toggle"
            onClick={togglePassword}
          >
            {isPassword ? 'Cancel change password' : 'Change password'}
          </div>
        </>
      </div>

      <footer className="overview-form__footer">
        <div className="overview-form__buttons">
          <Button>Save</Button>
          <Button buttonType={BUTTON_TYPES.TRANSPARENT}>Reset</Button>
        </div>
      </footer>
    </form>
  )
);
