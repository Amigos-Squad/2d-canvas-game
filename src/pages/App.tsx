import React, { ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';

export const App = ({}): ReactElement => {
  return (
    <div>
      <Switch>
        <Route path="/auth">
          <div>auth</div>
        </Route>

        <Route exact path="/">
          <div>base</div>
        </Route>

        <Route path="*">
          <div>err</div>
        </Route>
      </Switch>
    </div>
  );
};
