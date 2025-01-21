import React from "react"
import { VideoCardMain } from "../VideoCard"
import TitleCategory from "../TitleCategory"
import styled from "styled-components"

const BannerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    flex-shrink: 0;
    border: 1px solid #000;
    background: url(1669559000581.png), var(--color-black-dark);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding-bottom: 2rem;

    @media (max-width: 768px) {
        height: auto;
        padding: 1rem;
    }
`
const Contenido = styled.div`
    display: flex;
    justify-content: space-between;
    height: 20.84888rem;
    flex-shrink: 0;
    padding: 13rem 1rem 0 1rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding: 2rem 1rem;
    }
`
const ContenidoTexto = styled.div`
    width: 45%;
    height: 19.0625rem;
    flex-shrink: 0;
    padding-top: 1rem;
    display: contents;

    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 2rem;
    }
`
const Encabezado = styled.h1`
    font-size: 2.875rem;
    font-style: normal;
    line-height: normal;
    padding-top: 2rem;
    padding-bottom: 0.56rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`
const Banner = () => {
    return (
        <BannerDiv>
            <Contenido>
                <ContenidoTexto>
                    <TitleCategory titleCategoria='Front End' titleColor='rgba(42, 122, 228, 1)' />
                    <Encabezado>Challenge React</Encabezado>
                </ContenidoTexto>
                <VideoCardMain borderColor={'rgba(42, 122, 228, 1)'} videoImg={'https://img.youtube.com/vi/ov7vA5HFe6w/0.jpg'} src={'https://www.youtube.com/watch?v=ov7vA5HFe6w'} />
            </Contenido>
        </BannerDiv>
    )
};

export default Banner;