import React, { memo, ReactElement, useEffect, useMemo, useRef } from 'react';
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
      }, toast.time || 4000);
    }

    return clearTimeout(timer.current!);
  }, [toast]);

  const currentToast = useMemo(() => {
    return {
      message: toast ? toast.message : '',
      type: toast && toast.type ? toast.type : TOAST_TYPES.WARNING,
    };
  }, [toast]);

  return (
    <Portal>
      <div className={toastBlock({ [currentToast.type]: Boolean(toast) })}>
        <Icon name={ICON[currentToast.type as TOAST_TYPES]} />
        <div>{currentToast.message}</div>
      </div>
    </Portal>
  );
});
