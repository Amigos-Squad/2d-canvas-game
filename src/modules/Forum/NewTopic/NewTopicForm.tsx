import React, { memo, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Textarea } from '@/components/Form';
import { Button, BUTTON_TYPES } from '@/components/Button';
import { ROUTES, useForm } from '@/utils';

import './NewTopic.scss';

export const NewTopicForm = memo((): ReactElement => {
  const history = useHistory();
  const [form, onChange] = useForm({
    title: '',
    message: '',
  });

  const closeHandler = () => history.push(ROUTES.FORUM);

  return (
    <form className="new-topic__form">
      <Input
        label="Title"
        type="text"
        onChange={onChange}
        value={form.title}
        name="title"
      />
      <Textarea
        label="Message"
        onChange={onChange}
        value={form.message}
        cols={10}
        rows={3}
        name="message"
      />
      <footer className="new-topic__form-footer">
        <div className="form-footer__buttons">
          <Button type="submit">ADD</Button>
          <Button buttonType={BUTTON_TYPES.TRANSPARENT} onClick={closeHandler}>
            Cancel
          </Button>
        </div>
      </footer>
    </form>
  );
});
