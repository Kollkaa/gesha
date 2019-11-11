import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faMinusSquare, faPlusSquare} from "@fortawesome/free-solid-svg-icons";
import {faAutoprefixer} from "@fortawesome/free-brands-svg-icons";

export default () => {
    return(
        <DisabledFeaturesContainer>
            <FontAwesomeIcon icon={faEye} size={"2x"}/>
            <FontAwesomeIcon icon={faMinusSquare}/>
            <FontAwesomeIcon icon={faAutoprefixer} size={"2x"}/>
            <FontAwesomeIcon icon={faPlusSquare}/>
        </DisabledFeaturesContainer>
    )
};

const DisabledFeaturesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    > *{
        margin-left: 5px;
    }
    
    > :first-child{
        margin: 0;
    }
`;