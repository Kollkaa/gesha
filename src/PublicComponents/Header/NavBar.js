import React, {Component} from 'react';
import styled from 'styled-components';
import BurgerImg from '../../../public/imgs/iconfinder_Menu_4473024.svg';
import {BrowserRouter, Link} from "react-router-dom";

export default class NavBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            activeDropdown: null,
            opened: false
        };

        this.toggleActiveDropdown = this.toggleActiveDropdown.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);
    }

    toggleActiveDropdown(id){
        this.setState({activeDropdown: id});
    }

    toggleOpen(){
        this.setState({opened: !this.state.opened});
    }

    renderDropdowns(data){
        return data.map((el, index) => {
            let active = this.state.activeDropdown === index;

            return (
                <NavBarDropdown
                    onMouseLeave={() => {
                        this.setState({activeDropdown: null})
                    }}
                    key={index}
                >
                    <NavDropdownTitle
                        onClick={() => {
                            this.toggleActiveDropdown(index)
                        }}

                        onMouseEnter={() => {
                            this.toggleActiveDropdown(index)
                        }}

                        active={active}
                    >
                        {el.title}
                    </NavDropdownTitle>

                    <NavBarDropdownItemContainer active={active}>

                        {el.menutabs.map((el, index) => (
                            <Link key={index} to={el.href} style={{textDecoration: "none", color: "black"}}><NavBarDropdownItem>{el.title}</NavBarDropdownItem></Link>
                        ))}

                    </NavBarDropdownItemContainer>
                </NavBarDropdown>
            )
            }
        )
    }

    render() {
        return(
            <NavBarContainer id={"navbar"}>

                <NavBarToggle src={BurgerImg} onClick={this.toggleOpen}/>

                <NavBarDropdownWrapper opened={this.state.opened}>

                    {this.renderDropdowns(this.props.navLinks)}
                </NavBarDropdownWrapper>

            </NavBarContainer>
        )
    }
}

const NavBarContainer = styled.div`
    background-color: transparent; 
`;

const NavBarToggle = styled.img`
    display: none;
    cursor: pointer;
    
    @media screen and (max-width: 768px){
        display: inline-block;
        width: 100%;
        height: 100%;
    }
`;

const NavBarDropdownWrapper = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    position: ${props => props.active ? "relative" : "none"};
    
    @media screen and (max-width: 768px){
        display: ${props => props.opened ? "block" : "none"};
        position: absolute;
        top: 40px;
        left: 0;
        width: 100vw;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        background-color: white;
    }
`;

const NavDropdownTitle = styled.div`
    padding: 5px;
    cursor: default;
    position: relative;
    font-weight: bolder;
    font-size: 1rem;
    
    :hover{
    
    }
`;

const NavBarDropdown = styled.span`
    
`;

const NavBarDropdownItemContainer = styled.div`
    position: absolute;
    display: ${props => props.active ? "inline-block" : "none"};
    cursor: pointer;
    background-color: white;
    
    @media screen and (min-width: 769px){
        box-shadow: 3px 3px 10px 1px black;
    }
    
    @media screen and (max-width: 768px){
        position: relative;
        width: 100%;
    }
`;

const NavBarDropdownItem = styled.div`
    display: block;
    position: relative;
    padding: 10px;
    font-size: 1rem;
    transition: 400ms;
    
    > a{
        text-decoration: none;
        color: black;
    }
    
    :hover{
            background-color: #ebebeb;
    }
`;