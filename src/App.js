import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from "./Pages/Main/Main";
import Header from "./PublicComponents/Header/Header";
import Footer from "./PublicComponents/Footer";
import Background from "../public/imgs/General_Staff_of_the_Ukrainian_Armed_Forces.svg.png";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
        <Fragment>

            <BrowserRouter>
                <Header/>

                <BackgroundImg src={Background}/>

                <Switch>
                    <Route exact path={"/"} component={Main}/>
                    <Route exact path={"/news/:id"}/>
                    <Route exact path={"/info-page/:id"}/>
                    <Route exact path={"/minimized"}/>

                    <Route path={"*"}/> {/*if Not found page*/}
                </Switch>

                <Footer/>

            </BrowserRouter>

        </Fragment>
    );
  }
}

export default App;

const BackgroundImg = styled.img`
    position: fixed;
    max-height: 90%;
    max-width: 90%;
    opacity: 0.2;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    filter: grayscale(1);
    z-index: -1;
`;