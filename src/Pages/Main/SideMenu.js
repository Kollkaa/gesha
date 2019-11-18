import React, {Component} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import TestImg from "../../../public/imgs/artage-io-thumb-56b729da42330240471c366f0fdef485.png";

class SideMenu extends Component{
    constructor(props) {
        super(props);

        this.renderSideLinks = this.renderSideLinks.bind(this);
    }

    renderSideLinks(sideLinks){
        return sideLinks.map(link => {
            return(
                <Link style={{textDecoration: "none"}} to={link.href}>
                    <UsefulLinksItem>
                        <UsefulLinkDescription>{link.title}</UsefulLinkDescription>
                        <UsefulLinkImg src={TestImg}/>
                    </UsefulLinksItem>
                </Link>
            )
        })
    }

    render() {
        return(
            <Container>

                <UsefulLinksContainer>

                    <UsefulLinksTitle>Військовослужбовцям</UsefulLinksTitle>

                    <UsefulLinksItemsContainer>

                        {this.renderSideLinks(this.props.sideLinks)}

                    </UsefulLinksItemsContainer>

                </UsefulLinksContainer>

            </Container>
        )
    }
}

export default SideMenu;

const Container = styled.div`
    @media screen and (min-width: 769px) and (max-width: 1280px){
        font-size: 0.8rem;
    }
`;

const UsefulLinksContainer = styled.div`
    
`;

const UsefulLinksTitle = styled.div`
    font-size: 1.2em;
    padding: 10px;
    border-bottom: 1px solid #c3c3c3;
`;

const UsefulLinksItemsContainer = styled.div`
    padding: 10px;

    > :nth-child(2n+1) div{
        flex-direction: row-reverse;
    }
`;

const UsefulLinksItem = styled.div`
    background-color: rgba(235,235,235,0.5);
    display: flex;
    height: 100px;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
    margin-top: 10px;
    transition: 500ms;
    box-shadow: 2px 2px 5px 2px black;
    
    :hover{
        box-shadow: 2px 2px 15px 2px black;
        transform: scale(1.1);
    }
`;

const UsefulLinkDescription = styled.span`
    font-size: 1em;
    margin: 0 10px;
    color: black;
`;

const UsefulLinkImg = styled.img`
    height: 80px;
`;