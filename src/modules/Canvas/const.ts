import React from 'react';
import { Context } from './Canvas.types';
import { Game } from './Game';

export const context: Context = { isStarted: false, game: new Game() };

export const GameContext = React.createContext(context);
