import React, { memo, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';
import { Input, Textarea } from '@/components/Form';
import { Button, BUTTON_TYPES } from '@/components/Button';
import { ROUTES, useForm } from '@/utils';
import { DEFAULT_TOPIC, DEFAULT_TOPIC_VALIDATION } from './const';
import { createTopic, createPost } from '@/redux/slices/forumSlice/forumSlice';
import { ITopicBody } from '../Forum.types';
import { Store } from '@/redux/store.type';
import './NewTopic.scss';
import { IPostBody } from '..';

type Props = {
  cancel: () => void;
};

export const NewTopicForm = memo(({ cancel }: Props): ReactElement => {
  const dispatch = useDispatch();
  const route = useRouteMatch(ROUTES.FORUM_NEW_POST) as {
    isExact: boolean;
    params: {
      id: string;
    };
  };
  const { user } = useSelector((store: Store) => store.user);
  const history = useHistory();

  const { form, errors, onChange, onSubmit } = useForm(
    DEFAULT_TOPIC,
    submitTopicCallback,
    DEFAULT_TOPIC_VALIDATION
  );

  function submitTopicCallback(newForm: Omit<ITopicBody, 'author'>) {
    if (!route || !route.isExact) {
      dispatch(createTopic({ ...newForm, author: user?.id as number }));
      history.goBack();
    } else {
      dispatch(
        createPost({
          ...newForm,
          author: user?.id as number,
          topicId: Number(route.params.id),
        } as IPostBody)
      );
      history.goBack();
    }
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
