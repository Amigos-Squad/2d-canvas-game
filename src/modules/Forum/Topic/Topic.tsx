import React, { ReactElement, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { Store } from '@/redux/store.type';
import { Post } from './Post';
import { getPosts } from '@/redux';
import './Topic.scss';

export const Topic = memo((): ReactElement => {
  const dispatch = useDispatch();
  const location = useLocation<{ title: string }>();
  const { id } = useParams<{ id: string }>();
  const { posts } = useSelector((store: Store) => store.forumState);

  useEffect(() => {
    dispatch(getPosts(id));
  }, [id]);

  return (
    <div className="topic__container scroll__wrapper">
      <header className="topic__header">{location?.state?.title}</header>
      <div className="topic__posts-container">
        {posts.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </div>
    </div>
  );
});
