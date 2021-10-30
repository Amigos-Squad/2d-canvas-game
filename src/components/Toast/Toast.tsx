import React, { memo, ReactElement, useEffect, useRef } from 'react';
import block from 'bem-cn-lite';
import { useDispatch } from 'react-redux';
import { Portal } from '../Portal/Portal';
import { useAppSelector } from '@/utils';
import { setToast } from '@/redux';
import { Icon } from '..';
import { ICON } from './const';
import { TOAST_TYPES } from '.';
import './Toast.scss';

const toastBlock = block('toast');

export const Toast = memo((): ReactElement => {
  const timer: React.MutableRefObject<ReturnType<typeof setTimeout> | null> =
    useRef(null);

  const dispatch = useDispatch();
  const { toast } = useAppSelector('globalState');

  useEffect(() => {
    if (timer && !timer.current && toast) {
      timer.current = setTimeout(() => {
        dispatch(setToast(null));
        clearTimeout(timer.current!);
      }, toast.time);
    }
  }, [toast]);

  return (
    <Portal>
      {toast && (
        <div className={toastBlock({ [toast.type]: Boolean(toast) })}>
          <Icon name={ICON[toast.type as TOAST_TYPES]} />
          <div>{toast.message}</div>
        </div>
      )}
    </Portal>
  );
});
