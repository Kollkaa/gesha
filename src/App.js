import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from "./Pages/Main/Main";
import Header from "./PublicComponents/Header/Header";
import Footer from "./PublicComponents/Footer";

class App extends Component {
  render() {
    return (
        <Fragment>
          <Header/>

          <BrowserRouter>
            <Switch>
              <Route exact path={"/"} component={Main}/>
              <Route path={"/news/:id"}/>
              <Route path={"/info-page/:id"}/>
              <Route path={"/minimized"}/>

              <Route path={"/not-found"}/> {/*if Not found page*/}
            </Switch>
          </BrowserRouter>

          <Footer/>
        </Fragment>
    );
  }
}

export default App;
