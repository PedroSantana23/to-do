import styled from "styled-components";

const FooterContainer = styled.div`
    background-color: #494444;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>Desenvolvido por Pedro e João © 2024</p>
        </FooterContainer>
    );
}

export default Footer;