import React, { memo, ReactElement } from 'react';

export const ProfileNav = memo(
    (): ReactElement => (
        <div className="profile-nav">
            <div className="profile-nav-tabs">
                <div className="profile-nav-tabs__item active">Overview</div>
                <div className="profile-nav-tabs__item">Achievements</div>
                <div className="profile-nav-tabs__item">Statistics</div>
            </div>
        </div>
    )
);
