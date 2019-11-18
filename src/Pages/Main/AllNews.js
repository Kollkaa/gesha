import React, {Component} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

class AllNews extends Component{
    render() {
        let testTime = new Date("1997-07-16T19:20:30+01:00");

        return (
            <Container>
                <ContainerTitle>Усі новини</ContainerTitle>

                <NewsRowsContainer>
                    <NewsRow>
                        <NewsRowDate>{testTime.getUTCHours()}:{testTime.getUTCSeconds()}</NewsRowDate>
                        <Link style={{color: "grey", textDecoration: "none", textUnderline: "none"}}>
                            <NewsRowDescription>;lknkjjjjjj;ljpojpojpojklhlu ktygho; isdfyutl7r6ke5jrsjudjgkliou ktrewgiopuyteggi joilutkehgjoi;ulkth sou ;lknkjjjjjj;ljpo jpojpojklhluktygho ;isdfyutl7r6ke 5jrsju djgkliouktrewgiopuyteggijoilutkehgjoi;ul kthsou ;lknkjjjjjj;ljpo jpojpojklhluktygho;isdfyutl 7r6ke5jrsjudjgkliouktrewgiopu yteggijoilutkehgjoi ;ulkthsou
                            ;lknkjjjjjj; ljpojpojpojklhluktygho;isdfyutl7r6k e5jrsjudjgkliouktrewgiopuyteggijoilutkehgjoi;ulkthsou</NewsRowDescription>
                        </Link>
                    </NewsRow>

                    <NewsRow>
                        <NewsRowDate>{testTime.getUTCHours()}:{testTime.getUTCSeconds()}</NewsRowDate>
                        <Link style={{color: "grey", textDecoration: "none", textUnderline: "none"}}>
                            <NewsRowDescription>;lknkjjjjjj;ljpojpojpojklhlu ktygho; isdfyutl7r6ke5jrsjudjgkliou ktrewgiopuyteggi joilutkehgjoi;ulkth sou ;lknkjjjjjj;ljpo jpojpojklhluktygho ;isdfyutl7r6ke 5jrsju djgkliouktrewgiopuyteggijoilutkehgjoi;ul kthsou ;lknkjjjjjj;ljpo jpojpojklhluktygho;isdfyutl 7r6ke5jrsjudjgkliouktrewgiopu yteggijoilutkehgjoi ;ulkthsou
                                ;lknkjjjjjj; ljpojpojpojklhluktygho;isdfyutl7r6k e5jrsjudjgkliouktrewgiopuyteggijoilutkehgjoi;ulkthsou</NewsRowDescription>
                        </Link>
                    </NewsRow>

                    <DateDelimiter>{testTime.getUTCDay()}.{testTime.getUTCMonth()}.{testTime.getUTCFullYear()}</DateDelimiter>

                    <NewsRow>
                        <NewsRowDate>{testTime.getUTCHours()}:{testTime.getUTCSeconds()}</NewsRowDate>
                        <Link style={{color: "grey", textDecoration: "none", textUnderline: "none"}}>
                            <NewsRowDescription>;lknkjjjjjj;ljpojpojpojklhlu ktygho; isdfyutl7r6ke5jrsjudjgkliou ktrewgiopuyteggi joilutkehgjoi;ulkth sou ;lknkjjjjjj;ljpo jpojpojklhluktygho ;isdfyutl7r6ke 5jrsju djgkliouktrewgiopuyteggijoilutkehgjoi;ul kthsou ;lknkjjjjjj;ljpo jpojpojklhluktygho;isdfyutl 7r6ke5jrsjudjgkliouktrewgiopu yteggijoilutkehgjoi ;ulkthsou
                                ;lknkjjjjjj; ljpojpojpojklhluktygho;isdfyutl7r6k e5jrsjudjgkliouktrewgiopuyteggijoilutkehgjoi;ulkthsou</NewsRowDescription>
                        </Link>
                    </NewsRow>

                    <NewsRow>
                        <NewsRowDate>{testTime.getUTCHours()}:{testTime.getUTCSeconds()}</NewsRowDate>
                        <Link style={{color: "grey", textDecoration: "none", textUnderline: "none"}}>
                            <NewsRowDescription>;lknkjjjjjj;ljpojpojpojklhlu ktygho; isdfyutl7r6ke5jrsjudjgkliou ktrewgiopuyteggi joilutkehgjoi;ulkth sou ;lknkjjjjjj;ljpo jpojpojklhluktygho ;isdfyutl7r6ke 5jrsju djgkliouktrewgiopuyteggijoilutkehgjoi;ul kthsou ;lknkjjjjjj;ljpo jpojpojklhluktygho;isdfyutl 7r6ke5jrsjudjgkliouktrewgiopu yteggijoilutkehgjoi ;ulkthsou
                                ;lknkjjjjjj; ljpojpojpojklhluktygho;isdfyutl7r6k e5jrsjudjgkliouktrewgiopuyteggijoilutkehgjoi;ulkthsou</NewsRowDescription>
                        </Link>
                    </NewsRow>

                    <NewsRow>
                        <NewsRowDate>{testTime.getUTCHours()}:{testTime.getUTCSeconds()}</NewsRowDate>
                        <Link style={{color: "grey", textDecoration: "none", textUnderline: "none"}}>
                            <NewsRowDescription>;lknkjjjjjj;ljpojpojpojklhlu ktygho; isdfyutl7r6ke5jrsjudjgkliou ktrewgiopuyteggi joilutkehgjoi;ulkth sou ;lknkjjjjjj;ljpo jpojpojklhluktygho ;isdfyutl7r6ke 5jrsju djgkliouktrewgiopuyteggijoilutkehgjoi;ul kthsou ;lknkjjjjjj;ljpo jpojpojklhluktygho;isdfyutl 7r6ke5jrsjudjgkliouktrewgiopu yteggijoilutkehgjoi ;ulkthsou
                                ;lknkjjjjjj; ljpojpojpojklhluktygho;isdfyutl7r6k e5jrsjudjgkliouktrewgiopuyteggijoilutkehgjoi;ulkthsou</NewsRowDescription>
                        </Link>
                    </NewsRow>

                    <NewsRow>
                        <NewsRowDate>{testTime.getUTCHours()}:{testTime.getUTCSeconds()}</NewsRowDate>
                        <Link style={{color: "grey", textDecoration: "none", textUnderline: "none"}}>
                            <NewsRowDescription>;lknkjjjjjj;ljpojpojpojklhlu ktygho; isdfyutl7r6ke5jrsjudjgkliou ktrewgiopuyteggi joilutkehgjoi;ulkth sou ;lknkjjjjjj;ljpo jpojpojklhluktygho ;isdfyutl7r6ke 5jrsju djgkliouktrewgiopuyteggijoilutkehgjoi;ul kthsou ;lknkjjjjjj;ljpo jpojpojklhluktygho;isdfyutl 7r6ke5jrsjudjgkliouktrewgiopu yteggijoilutkehgjoi ;ulkthsou
                                ;lknkjjjjjj; ljpojpojpojklhluktygho;isdfyutl7r6k e5jrsjudjgkliouktrewgiopuyteggijoilutkehgjoi;ulkthsou</NewsRowDescription>
                        </Link>
                    </NewsRow>

                    <DateDelimiter>{testTime.getUTCDay()}.{testTime.getUTCMonth()}.{testTime.getUTCFullYear()}</DateDelimiter>

                    <NewsRow>
                        <NewsRowDate>{testTime.getUTCHours()}:{testTime.getUTCSeconds()}</NewsRowDate>
                        <Link style={{color: "grey", textDecoration: "none", textUnderline: "none"}}>
                            <NewsRowDescription>;lknkjjjjjj;ljpojpojpojklhlu ktygho; isdfyutl7r6ke5jrsjudjgkliou ktrewgiopuyteggi joilutkehgjoi;ulkth sou ;lknkjjjjjj;ljpo jpojpojklhluktygho ;isdfyutl7r6ke 5jrsju djgkliouktrewgiopuyteggijoilutkehgjoi;ul kthsou ;lknkjjjjjj;ljpo jpojpojklhluktygho;isdfyutl 7r6ke5jrsjudjgkliouktrewgiopu yteggijoilutkehgjoi ;ulkthsou
                                ;lknkjjjjjj; ljpojpojpojklhluktygho;isdfyutl7r6k e5jrsjudjgkliouktrewgiopuyteggijoilutkehgjoi;ulkthsou</NewsRowDescription>
                        </Link>
                    </NewsRow>

                </NewsRowsContainer>
            </Container>
        );
    }
}

export default AllNews;

const Container = styled.div`
    
`;

const ContainerTitle = styled.div`
    font-size: 1.2em;
    padding: 10px;
    border-bottom: 1px solid #c3c3c3;
`;

const NewsRowsContainer = styled.div`
    margin-top: 10px;
    font-size: 0.8em;
    padding: 10px;
    background-color: rgba(235,235,235,0.75);
    
    > :last-child{
        border: none;
        margin: 0;
        padding: 0;
    }
`;

const NewsRow = styled.div`
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #c3c3c3;
`;

const NewsRowDate = styled.div`
    float: left;
    color: black;
    margin-right: 5px;
    padding-right: 5px;
    cursor: default;
    border-right: 1px solid black;
`;

const NewsRowDescription = styled.div`
    white-space: pre-wrap;
    
    :hover{
        color: #bdbdbd;
    }
`;

const DateDelimiter = styled.div`
    font-size: 1em;
    color: black;
    text-align: center;
    margin: 10px 0;
    cursor: default;
`;