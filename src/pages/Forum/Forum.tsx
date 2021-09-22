import React, { ReactElement, memo } from 'react';
import { Page } from '@/modules';
import { ForumNav } from "./ForumNav";
import { Topics } from "./Topics";

import './Forum.scss';

export const Forum = memo(
    (): ReactElement => (
        <Page withHeader>
            <div className="forum-page">
                <ForumNav/>
                <Topics/>
            </div>
        </Page>
    )
);
