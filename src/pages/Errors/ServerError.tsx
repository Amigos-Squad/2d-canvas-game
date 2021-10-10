import React, { ReactElement, memo } from 'react';
import './Errors.scss';
import image from '@/assets/500.png';
import { Button } from '@/components';
import { useHistory } from 'react-router';

export const ServerError = memo((): ReactElement => {
    const history = useHistory();

    return (
        <div className="error-container">
            <div className="error-container__content">
                <div className="error-container__text">Server error :(</div>
                <img className="error-container__image" src={image} alt="game-logo" />
                <div className="error-container__text">
                    <Button
                        onClick={history.goBack}
                        type="button"
                    >
                        Go back
                    </Button>
                </div>
            </div>
        </div>
    );
});
