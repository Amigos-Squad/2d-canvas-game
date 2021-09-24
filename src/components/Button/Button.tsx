import React, { ReactElement, memo } from 'react';
import './Button.scss';
import { Props } from './Button.types';

export const Button = memo((props: Props): ReactElement => {
    const classes = 'button button--primary'
    // TODO стилизация по пропсам (<Button primary outline ... />)
    return (
        <button className={classes} {...props} />
    )
});
