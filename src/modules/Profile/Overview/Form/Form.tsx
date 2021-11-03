import React, { memo, ReactElement } from 'react';
import { Input } from '@/components/Form';
import { Props } from './Form.types';
import { Button, BUTTON_TYPES } from '@/components';
import './Form.scss';

export const Form = memo(
  ({
    form,
    errors,
    passForm,
    passErrors,
    isPassword,
    isChanged,
    reset,
    update,
    onChange,
    togglePassword,
  }: Props): ReactElement => (
    <form onSubmit={update} className="overview-form">
      <div className="overview-form__body">
        <Input
          value={form.displayName || ''}
          onChange={onChange}
          name="displayName"
          label="Display name"
          error={errors.displayName}
          horizontal
        />

        <Input
          label="First name"
          value={form.firstName}
          onChange={onChange}
          name="firstName"
          error={errors.firstName}
          horizontal
        />

        <Input
          label="Second name"
          value={form.secondName}
          onChange={onChange}
          name="secondName"
          error={errors.secondName}
          horizontal
        />

        <Input
          label="Login"
          value={form.login}
          onChange={onChange}
          name="login"
          error={errors.login}
          horizontal
        />

        <Input
          label="Email"
          value={form.email}
          onChange={onChange}
          name="email"
          horizontal
          type="email"
          error={errors.email}
        />

        <Input
          label="Phone"
          value={form.phone}
          onChange={onChange}
          name="phone"
          horizontal
          type="tel"
          error={errors.phone}
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
                error={passErrors.oldPassword}
                horizontal
              />

              <Input
                label="New"
                value={passForm.newPassword}
                error={passErrors.newPassword}
                onChange={onChange}
                name="newPassword"
                type="password"
                horizontal
              />

              <Input
                label="Repeat"
                value={passForm.newPasswordRepeat}
                error={passErrors.newPasswordRepeat}
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
