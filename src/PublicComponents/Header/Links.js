import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faFacebook, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {dom} from "@fortawesome/fontawesome-svg-core";

dom.watch();

export default function () {
        return(
            <LinksWrapper>
                    <LinkStyler color={"blue"}><Link to={"https://facebook.com/"}><FontAwesomeIcon icon={faFacebook} size={"2x"}/></Link></LinkStyler>
                    <LinkStyler color={"aqua"}><Link to={"https://twitter.com/"}><FontAwesomeIcon icon={faTwitter} size={"2x"}/></Link></LinkStyler>
                    <LinkStyler color={"red"}><Link to={"https://instagram.com/"}><FontAwesomeIcon icon={faInstagram} size={"2x"}/></Link></LinkStyler>
                    <LinkStyler color={"crimson"}><Link to={"https://youtube.com/"}><FontAwesomeIcon icon={faYoutube} size={"2x"}/></Link></LinkStyler>
            </LinksWrapper>
        )
}

const LinksWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    > *{
        margin-left: 5px;
    }
`;

const LinkStyler = styled.div`
    > a{
        text-underline: none;
        outline: none;
        color: black;
        
        :hover{
        color: ${props => props.color};
        }
    }
`;