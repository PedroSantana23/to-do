import styled from "styled-components";

const HeaderContainer = styled.div`
    background-color: #494444;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <p>Bem-vindo(a)</p>
        </HeaderContainer>
    );
}

export default Header;