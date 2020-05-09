/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'containers/Home/Loadable';
import FormPage from 'containers/FormPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Navbar from './Navbar';

import GlobalStyle from '../../global-styles';
import '@fortawesome/fontawesome-free/css/all.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new" component={FormPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
