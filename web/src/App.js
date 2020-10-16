import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Main from '@/pages/Main';
import Create from '@/pages/Create';
import Solve from '@/pages/Solve';
import Result from '@/pages/Result';
import NotFound from '@/pages/NotFound';
import history from '@/utils/history';
import connectStore from '@/hoc/connectStore';
import Loading from '@/components/Loading';

const App = ({ loading }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/create" component={Create} />
        <Route path="/solve/:id" component={Solve} />
        <Route path="/result" component={Result} />
        <Route path="*" component={NotFound} />
      </Switch>

      <Loading show={loading} />
      <style jsx global>{`
        body {
          padding: 0;
          font-family: 'Noto-Sans-KR', sans-serif;
        }
      `}</style>
    </Router>
  );
};

export default connectStore(App);
