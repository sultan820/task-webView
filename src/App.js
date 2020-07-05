import React, { Component } from 'react';
import './App.css';
import NavBar from './components/common/navBar';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Owners from './components/owners';
import Pets from './components/pets';
import Owned from './components/Owned';
import PetsForm from './components/PetsForm';
import NotFound from './components/notFound';

class App extends Component {
  async componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container">
          <Switch>
            <Route exact path="/">
              <Redirect to="/owners" />
            </Route>
            <Route exact path="/owners" component={Owners} />
            <Route exact path="/pets" component={Pets} />
            <Route exact path="/pets/:id" component={PetsForm} />
            <Route exact path="/owners/:id" component={Owned} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
