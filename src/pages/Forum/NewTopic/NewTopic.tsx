import React, { memo, ReactElement } from 'react';
import './NewTopic.scss';

export const NewTopic = memo((): ReactElement => (
    <div className="new-topic">
        <form action="" className="new-topic-form">
            <input type="text" className="new-topic-form__title"/>
            <textarea cols={30} rows={10} className="new-topic-form__message"/>
            <button type="submit">Send</button>
        </form>
    </div>
    )
);
