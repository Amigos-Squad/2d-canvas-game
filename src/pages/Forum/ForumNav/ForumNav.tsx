import React, { memo, ReactElement } from 'react';
import { ForumActionsIcon } from '@/components/Icons/SVG/ForumActions';

import './ForumNav.scss';

export const ForumNav = memo(
    (): ReactElement => (
        <div className="forum-nav">
            <div className="forum-nav-tabs">
                <div className="forum-nav-tabs__item active">Topics</div>
                <div className="forum-nav-tabs__item">Favorite</div>
            </div>
            <div className="forum-nav-actions">
                <ForumActionsIcon/>
            </div>
        </div>
    )
);
