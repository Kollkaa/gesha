import React, {Component} from "react";
import styled from "styled-components";
import Test from "../../../public/imgs/artage-io-thumb-56b729da42330240471c366f0fdef485.png"

class PrimaryNews extends Component{
    render() {
        return(
            <Container>
                <ContainerTitle>Головні новини</ContainerTitle>

                <NewsItemsContainer>
                    <NewsItemWrapper>
                        <NewsImg src={Test}/>
                        <NewsDescription>
                            Lorem Ipsum keklolarbidol mamkutvoiutogoetogo
                        </NewsDescription>
                    </NewsItemWrapper>

                    <NewsItemWrapper>
                        <NewsImg src={Test}/>
                        <NewsDescription>
                            Lorem Ipsum keklolarbidol mamkutvoiutogoetogo
                        </NewsDescription>
                    </NewsItemWrapper>

                    <NewsItemWrapper>
                        <NewsImg src={Test}/>
                        <NewsDescription>
                            Lorem Ipsum keklolarbidol mamkutvoiutogoetogo
                            Lorem Ipsum keklolarbidol mamkutvoiutogoetogo

                            Lorem Ipsum keklolarbidol mamkutvoiutogoetogo
                            Lorem Ipsum keklolarbidol mamkutvoiutogoetogo
                            Lorem Ipsum keklolarbidol mamkutvoiutogoetogo

                        </NewsDescription>
                    </NewsItemWrapper>
                </NewsItemsContainer>
            </Container>
        )
    }
}

export default PrimaryNews;

const Container = styled.div`
    
`;

const ContainerTitle = styled.div`
    font-size: 1.2em;
    padding: 10px;
    border-bottom: 1px solid #c3c3c3;
`;

const NewsItemsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: minmax(0, max-content);
    grid-gap: 20px;
    padding: 20px 10px;
`;

const NewsItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 5px 2px black;
    background-color: rgba(235,235,235,0.5);
`;

const NewsImg = styled.img`
    max-width: 100%;
    height: auto;
    display: block;
`;

const NewsDescription = styled.div`
    white-space: pre-wrap;
    padding: 5px;
    font-size: 0.8em;
    flex-grow: 2;
`;