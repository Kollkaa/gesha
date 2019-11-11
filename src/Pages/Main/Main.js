import React, {Component} from 'react';
import styled from "styled-components";
import {connect} from "react-redux";
import SideMenu from "./SideMenu";
import {generateSideLinksAction} from "../../Storage/NavSideLinksStorage/actions";
import {getSideLinks} from "../../api/queries";

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

                </NewsSliderWrapper>

                <SideMenuWrapper>
                    <SideMenu sideLinks={this.props.sideLinks}/>
                </SideMenuWrapper>

                <ActualNewsWrapper>

                </ActualNewsWrapper>

                <AllNewsWrapper>

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
          ". s s ." 400px
          ". a m ." 200px
          ". n m ." minmax(500px, max-content) / 1fr 900px 380px 1fr;
    }
    
    @media screen and (min-width: 769px) and (max-width: 1280px){
        grid-template: 
          ". s s ." 400px
          ". a m ." 200px
          ". n m ." minmax(500px, max-content) / 1fr 500px 268px 1fr;
    }
    
    @media screen and (max-width: 768px){
        grid-template: 
          "s" 400px
          "a" 200px
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

const ActualNewsWrapper = styled.div`
    box-shadow: 2px 2px 5px 2px black;
    grid-area: a;
`;

const AllNewsWrapper = styled.div`
    box-shadow: 2px 2px 5px 2px black;
    grid-area: n;
`;