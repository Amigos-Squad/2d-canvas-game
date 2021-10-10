import React, { memo, ReactElement } from 'react';
import { Input } from '@/components/Form';
import { Props } from './Form.types';
import { Button, BUTTON_TYPES } from '@/components';
import './Form.scss';

export const Form = memo(
  ({
    form,
    passForm,
    isPassword,
    isChanged,
    reset,
    update,
    onChange,
    togglePassword,
  }: Props): ReactElement => (
    <form className="overview-form">
      <div className="overview-form__body">
        <Input
          value={form.displayName || ''}
          onChange={onChange}
          name="displayName"
          label="Display name"
          horizontal
        />

        <Input
          label="First name"
          value={form.firstName}
          onChange={onChange}
          name="firstName"
          horizontal
        />

        <Input
          label="Second name"
          value={form.secondName}
          onChange={onChange}
          name="secondName"
          horizontal
        />

        <Input
          label="Login"
          value={form.login}
          onChange={onChange}
          name="login"
          horizontal
        />

        <Input
          label="Email"
          value={form.email}
          onChange={onChange}
          name="email"
          horizontal
          type="email"
        />

        <Input
          label="Phone"
          value={form.phone}
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
                value={passForm.oldPassword}
                onChange={onChange}
                name="oldPassword"
                type="password"
                horizontal
              />

              <Input
                label="New"
                value={passForm.newPassword}
                onChange={onChange}
                name="newPassword"
                type="password"
                horizontal
              />

              <Input
                label="Repeat"
                value={passForm.newPasswordRepeat}
                onChange={onChange}
                name="newPasswordRepeat"
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

      {isChanged && (
        <footer className="overview-form__footer">
          <div className="overview-form__buttons">
            <Button type="submit" onClick={update}>
              Save
            </Button>
            <Button buttonType={BUTTON_TYPES.TRANSPARENT} onClick={reset}>
              Reset
            </Button>
          </div>
        </footer>
      )}
    </form>
  )
);
