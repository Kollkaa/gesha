import React, {Component} from 'react'
import styled from "styled-components";
import GShImg from '../../../public/imgs/artage-io-thumb-56b729da42330240471c366f0fdef485.png'
import NavBar from "./NavBar";
import {getNavLinks} from "../../api/queries";
import {generateNavLinksAction} from "../../Storage/NavSideLinksStorage/actions";
import {connect} from 'react-redux'
import Links from "./Links";
import SearchField from "./SerachField";
import DisabledFeatures from "./DisabledFeatures";

class Header extends Component{
    componentDidMount() {
        getNavLinks().then(navLinks => {
            this.props.setNavLinksToStore(navLinks);
        });
    }

    render() {

        return(
            <Container>
                <SearchFiledWrapper>
                    <SearchField/>
                </SearchFiledWrapper>
                <DisabledOptionsWrapper>
                    <DisabledFeatures/>
                </DisabledOptionsWrapper>
                <LinksWrapper>
                    <Links/>
                </LinksWrapper>
                <NavMenuWrapper>
                    <NavBar navLinks={this.props.navLinks}/>
                </NavMenuWrapper>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        navLinks: state.navLinks
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setNavLinksToStore: (navLinks) => dispatch(generateNavLinksAction(navLinks)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)

const Container = styled.div`
    background: white;
    box-shadow: 0 1px 4px 1px black;
    display: grid;
    position: relative;
    z-index: 5;
    font-size: 1em;
   
    @media screen and (min-width: 1281px){
        grid-gap: 10px;
        grid-template: 
          ". . . . . . ." 10px
          ". d . s . l ." minmax(0, max-content)
          ". n n n n n ." minmax(0, max-content)
          ". . . . . . ." 10px / 1fr 160px 200px 200px 200px 250px 1fr;
    }
    
    @media screen and (min-width: 769px) and (max-width: 1280px){
        font-size: 0.8em;
    
        grid-gap: 10px;
        grid-template: 
          ". . . . ." 10px
          ". d s l ." minmax(0, max-content)
          ". n n n ." minmax(0, max-content)
          ". . . . ." 10px / 1fr 259px 250px 260px 1fr;
    }
    
    @media screen and (max-width: 768px){
        grid-template: 
          "s . n" minmax(0, max-content) / 160px 1fr 40px;
    }
`;

const LogoImgWrapper = styled.div`
    grid-area: i;
    
    @media screen and (max-width: 768px){
        display: none;
    }
`;

const LogoImg = styled.img`
    height: 100%;
`;

const SearchFiledWrapper = styled.div`
    grid-area: s;
`;

const DisabledOptionsWrapper = styled.div`
    grid-area: d;
    
    @media screen and (max-width: 768px){
        display: none;
    }
`;

const LinksWrapper = styled.div`
    grid-area: l;
    
    @media screen and (max-width: 768px){
        display: none;
    }
`;

const NavMenuWrapper = styled.div`
    grid-area: n;
`;