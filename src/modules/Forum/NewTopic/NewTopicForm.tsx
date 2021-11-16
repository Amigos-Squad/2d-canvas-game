import React, { memo, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Input, Textarea } from '@/components/Form';
import { Button, BUTTON_TYPES } from '@/components/Button';
import { ROUTES, useForm } from '@/utils';
import { DEFAULT_TOPIC, DEFAULT_TOPIC_VALIDATION } from './const';
import { createTopic } from '@/redux/slices/forumSlice/forumSlice';
import { ITopicBody } from '../Forum.types';
import './NewTopic.scss';
import { Store } from '@/redux/store.type';

type Props = {
  cancel: () => void;
};

export const NewTopicForm = memo(({ cancel }: Props): ReactElement => {
  const dispatch = useDispatch();
  const { user } = useSelector((store: Store) => store.user);
  const history = useHistory();
  const { form, errors, onChange, onSubmit } = useForm(
    DEFAULT_TOPIC,
    submitTopicCallback,
    DEFAULT_TOPIC_VALIDATION
  );

  function submitTopicCallback(newForm: Omit<ITopicBody, 'author'>) {
    dispatch(createTopic({ ...newForm, author: user?.id as number }));
    history.replace(ROUTES.FORUM);
  }

  return (
    <form className="new-topic__form" onSubmit={onSubmit}>
      <Input
        label="Title"
        type="text"
        onChange={onChange}
        value={form.title}
        name="title"
        error={errors.title}
      />

      <Textarea
        label="Message"
        onChange={onChange}
        value={form.message}
        cols={10}
        rows={3}
        name="message"
        error={errors.message}
      />

      <footer className="new-topic__form-footer">
        <div className="form-footer__buttons">
          <Button type="submit" onClick={onSubmit}>
            ADD
          </Button>
          <Button buttonType={BUTTON_TYPES.TRANSPARENT} onClick={cancel}>
            Cancel
          </Button>
        </div>
      </footer>
    </form>
  );
});
