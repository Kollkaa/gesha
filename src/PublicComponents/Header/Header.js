import React, {Component} from 'react'
import styled from "styled-components";
import GShImg from '../../../public/imgs/artage-io-thumb-56b729da42330240471c366f0fdef485.png'
import NavBar from "./NavBar";
import {getNavLinks} from "../../api/queries";
import {generateNavLinksAction} from "../../Storage/NavSideLinksStorage/actions";
import {connect} from 'react-redux'

class Header extends Component{
    componentDidMount() {
        getNavLinks().then(navLinks => {
            this.props.setNavLinksToStore(navLinks);
        });
    }

    render() {

        return(
            <Container>
                <LogoImgWrapper>
                    <LogoImg src={GShImg}/>
                </LogoImgWrapper>
                <SearchFiledWrapper>
                    search
                </SearchFiledWrapper>
                <DisabledOptionsWrapper>
                    disabled
                </DisabledOptionsWrapper>
                <LinksWrapper>
                    links
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
    background-color: #97a1ff;
    display: grid;
    
    @media screen and (min-width: 1281px){
        grid-template: 
          ". . . . . . ." 10px
          ". i s d l l ." 50px
          ". i . . . . ." 60px
          ". i n n n n ." 50px
          ". . . . . . ." 10px / 1fr 160px 280px 250px 300px 300px 1fr;
    }
    
    @media screen and (min-width: 769px) and (max-width: 1280px){
        grid-template: 
          ". . . . . ." 10px
          ". i s d l ." 30px
          ". i . . . ." 100px
          ". n n n n ." 30px
          ". . . . . ." 10px / 1fr 160px 200px 250px 350px 1fr;
    }
    
    @media screen and (max-width: 768px){
        grid-template: 
          "s . n" 40px / 40px 1fr 40px;
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