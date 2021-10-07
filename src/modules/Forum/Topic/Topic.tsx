import React, { ReactElement, memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { tempTopicPosts } from './const';
import { Post } from './Post';
import { ITopicPost } from './Topic.types';
import './Topic.scss';

export const Topic = memo((): ReactElement => {
  const { id } = useParams<{ id: string }>();

  /* TODO replace test data */
  const [posts, setPosts] = useState<ITopicPost[]>([]);
  const [title, setTitle] = useState('');
  /* TODO replace test data */

  const loadTopic = () => {
    setTitle(
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque'
    );
    setPosts(tempTopicPosts);
  };

  useEffect(() => {
    loadTopic();
  }, [id]);

  return (
    <div className="topic__container scroll__wrapper">
      <header className="topic__header">{title}</header>
      <div className="topic__posts-container">
        {posts.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </div>
    </div>
  );
});
