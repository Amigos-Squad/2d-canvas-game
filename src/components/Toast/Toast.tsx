import React, { memo, ReactElement, useEffect, useRef } from 'react';
import block from 'bem-cn-lite';
import { useDispatch } from 'react-redux';
import { Portal } from '../Portal/Portal';
import { useAppSelector } from '@/utils';
import { setToast } from '@/redux';
import './Toast.scss';

const toastBlock = block('toast');

export const Toast = memo((): ReactElement => {
  const timer: React.MutableRefObject<
    ReturnType<typeof setTimeout> | undefined
  > = useRef();

  const dispatch = useDispatch();
  const { toast } = useAppSelector('globalState');

  useEffect(() => {
    if (timer && !timer.current && toast) {
      timer.current = setTimeout(() => {
        dispatch(setToast(null));
        clearTimeout(timer.current!);
      }, toast.time);
    }

    return clearTimeout(timer.current!);
  }, [toast]);

  return (
    <Portal>
      <div className={toastBlock({ type: toast.type })}>
        <div>{toast.message}</div>
      </div>
    </Portal>
  );
});
