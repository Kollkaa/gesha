import React, {Component} from 'react';
import styled from "styled-components";
import {connect} from "react-redux";
import SideMenu from "./SideMenu";
import {generateSideLinksAction} from "../../Storage/NavSideLinksStorage/actions";
import {getSideLinks} from "../../api/queries";
import {Carousel} from "react-bootstrap";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import Dota2_1 from "../../../public/imgs/ss_d0f973ce376ca5b6c08e081cb035e86ced105fa9.1920x1080.jpg";
import Dota2_2 from "../../../public/imgs/ss_f9ebafedaf2d5cfb80ef1f74baa18eb08cad6494.1920x1080.jpg";
import Dota2_3 from "../../../public/imgs/dota2_teamfight_guide-1024x592.png";
import PrimaryNews from "./PrimaryNews";
import AllNews from "./AllNews";

class Main extends Component{
    componentDidMount() {
        getSideLinks().then(sideLinks => {
            this.props.setSideMenuLinksToStore(sideLinks);
        })
    }

    render() {
        return(
            <Container>
                <NewsSliderWrapper>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className={"d-block w-100"}
                                src={Dota2_1}/>
                            <Carousel.Caption>
                                Test 1
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className={"d-block w-100"}
                                src={Dota2_2}/>
                            <Carousel.Caption>
                                Test 2
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className={"d-block w-100"}
                                src={Dota2_3}/>
                            <Carousel.Caption>
                                Test 2
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </NewsSliderWrapper>

                <SideMenuWrapper>
                    <SideMenu sideLinks={this.props.sideLinks}/>
                </SideMenuWrapper>

                <PrimaryNewsWrapper>
                    <PrimaryNews/>
                </PrimaryNewsWrapper>

                <AllNewsWrapper>
                    <AllNews/>
                </AllNewsWrapper>
            </Container>
        )
    }
}

let mapStateToProps = state => {
    return{
        sideLinks: [...state.sideLinks]
    }
};

let mapDispatchToProps = dispatch => {
    return{
        setSideMenuLinksToStore: sideLinks => dispatch(generateSideLinksAction(sideLinks))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

const Container = styled.div`
    position: relative;
    display: grid;
    grid-gap: 20px;
    
    @media screen and (min-width: 1281px){
        grid-template: 
          ". s s ." minmax(min-content, max-content)
          ". a m ." minmax(min-content, max-content)
          ". n m ." minmax(500px, max-content) / 1fr 900px 380px 1fr;
    }
    
    @media screen and (min-width: 769px) and (max-width: 1280px){
        grid-template: 
          ". s s ." minmax(min-content, max-content)
          ". a m ." minmax(min-content, max-content)
          ". n m ." minmax(500px, max-content) / 1fr 500px 268px 1fr;
    }
    
    @media screen and (max-width: 768px){
        grid-template: 
          "s" minmax(min-content, max-content)
          "a" minmax(min-content, max-content)
          "n" minmax(300px, max-content) / 1fr;
    }
`;

const NewsSliderWrapper = styled.div`
    box-shadow: 2px 2px 5px 2px black;
    grid-area: s;
`;

const SideMenuWrapper = styled.div`
    grid-area: m;
    
    @media screen and (max-width: 768px){
        display: none;
    }
`;

const PrimaryNewsWrapper = styled.div`
    grid-area: a;
`;

const AllNewsWrapper = styled.div`
    grid-area: n;
`;