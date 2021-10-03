import React, { memo, ReactElement } from 'react';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

import './NewTopic.scss';

export const NewTopic = memo((): ReactElement => {
  const onTitleChange = () => {};
  return (
    <div className="new-topic">
      <form action="" className="new-topic-form">
        <Input
          label="Title"
          className="new-topic-form__title"
          type="text"
          onChange={onTitleChange}
          value=""
        />
        <label className="new-topic-message__label">Message</label>
        <textarea cols={30} rows={10} className="new-topic-form__message" />
        <Button type="submit" text="Send" />
      </form>
    </div>
  );
});
