import React, {Component} from "react";
import styled from "styled-components";

export default class NotFoundPage extends Component{
    render() {
        return(
            <Container>
                <Title>Сторінку, яку ви шукаєте не знайдено...</Title>
            </Container>
        )
    }
}

const Container = styled.div`
    height: 100%;
`;

const Title = styled.h1`
    margin: 20px;
`;