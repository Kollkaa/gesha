import React, {Component} from 'react';
import styled from 'styled-components';
import BurgerImg from '../../../public/imgs/iconfinder_Menu_4473024.svg';

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
                            <NavBarDropdownItem key={index} href={el.href}>{el.title}</NavBarDropdownItem>
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
   
    @media screen and (max-width: 768px){
        
    }
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
    background-color: ${props => props.active ? "#2c2c2c" : "transparent"};
`;

const NavBarDropdown = styled.span`
    padding: 1px;
`;

const NavBarDropdownItemContainer = styled.div`
    position: absolute;
    display: ${props => props.active ? "inline-block" : "none"};
    
    @media screen and (max-width: 768px){
        position: relative;
    }
`;

const NavBarDropdownItem = styled.a`
    display: block;
`;