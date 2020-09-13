import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '@/pages/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>

      <style jsx global>{`
        body {
          padding: 0 16px;
        }
      `}</style>
    </BrowserRouter>
  );
};

export default App;
