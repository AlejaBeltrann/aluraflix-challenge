import React from "react"
import styled from "styled-components"
import LogoMain from "../LogoMain"

const Card = styled.div`
    height: 5.125rem;
    flex-shrink: 0;
    background: rgba(0,0,0,0.9);
    align-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0,0,0,0.9);
    border-top: 0.125rem solid #2A7AE4;
    color: rgba(253, 253, 253, 0.9);
    `
const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;
    margin-left: 1rem;
`

const FooterText = styled.h2`
    margin: 0 2rem;
`

const Footer = () => {
    return <Card>
                <LogoMain />
                    <br></br>
                <FooterText>Desarrollado por Tatiana Beltrán © 2025</FooterText>
                <br></br>
                <SocialLinks>
                    <a href="https://github.com/alejabeltrann" target="_blank">
                        <img src="./github.svg" alt="imagem github" />
                    </a>
                    <a href="https://www.linkedin.com/in/beltranascencio/" target="_blank">
                        <img src="./linkedin.svg" alt="imagem linkedin" />
                    </a>
                    <a href="https://www.instagram.com/alejabeltrann/" target="_blank">
                        <img src="./instagram.svg" alt="imagem instagram" />
                    </a>
                </SocialLinks>
            </Card>
};

export default Footer