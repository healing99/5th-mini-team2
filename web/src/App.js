import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '@/pages/Main';
import Create from '@/pages/Create';
import Solve from '@/pages/Solve';
import Login from '@/pages/Login';
import Welcome from '@/pages/Welcome';
import NotFound from '@/pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/create" component={Create} />
        <Route path="/login" component={Login} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/solve/:id" component={Solve} />
        <Route path="*" component={NotFound} />
      </Switch>

      <style jsx global>{`
        body {
          padding: 0;
          font-family: 'Noto-Sans-KR', sans-serif;
        }
      `}</style>
    </BrowserRouter>
  );
};

export default App;
