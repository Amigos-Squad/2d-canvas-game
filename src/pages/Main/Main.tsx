import React, { ReactElement, memo, useEffect } from 'react';
import { Page } from '@/modules/Layout/Page/Page';
import { Canvas } from '@/modules';

export const Main = memo(
  (): ReactElement => {

    const toggleFullscreenMode = (e: KeyboardEvent) => {
      if (e.key !== 'f') {
        return
      }
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
      } else if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  
    useEffect(() => {
      document.addEventListener('keypress', toggleFullscreenMode)
      return () => {
        document.removeEventListener('keypress', toggleFullscreenMode)
      }
    }, [])

    return (
      <Page>
        <Canvas />
      </Page>
    )
  });
