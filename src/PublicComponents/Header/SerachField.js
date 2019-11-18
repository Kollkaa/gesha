import React, {Component} from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

class SearchField extends Component{
    render() {
        return(
            <SearchFieldContainer>
                <SearchInput placeholder={"Пошуковий запит"}/>
                <SearchButton><FontAwesomeIcon icon={faSearch}/></SearchButton>
            </SearchFieldContainer>
        )
    }
}

export default SearchField;

const SearchFieldContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    
    /*:after{
        display: block;
        height: 100%;
        width: 100%;
        content: "";
        background-color: white;
        position: absolute;
        transition: width 500ms;
    }
    
    :hover{
        :after{
            width: 0;
        }
    }*/
`;

const SearchInput = styled.input`
    border: none;
    width: 90%;
    margin-right: 5px;
    outline: none;
    background-color: #d9d9d9;
    padding: 5px;
    box-shadow: 0 0 5px 1px rgb(171,173,163);
    border-radius: 3px;
    
    ::placeholder{
        opacity: 0.8;
    }
`;

const SearchButton = styled.div` 
    padding: 5px;
    border-radius: 3px;
    background-color: #d9d9d9;
    color: white;
    cursor: pointer;
    font-size: 15px;
    box-shadow: 0 0 5px 1px rgb(171,173,163);
`;