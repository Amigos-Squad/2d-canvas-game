import React from 'react';
import { Context } from './Canvas.types';

export const context: Context = { isStarted: false };

export const GameContext = React.createContext(context);
