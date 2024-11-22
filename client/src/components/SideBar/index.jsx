import styled from "styled-components";

const SideBarContainer = styled.div`
    width: 20vw;
    height: 100vh;
    background-color: #252424;
    color: #fff;
`;

const SideBar = () => {
    return (
        <SideBarContainer>
            <p>SideBar</p>
        </SideBarContainer>
    );
}

export default SideBar;