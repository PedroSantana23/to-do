import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

const LayOutContainer = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const WrapperContainer = styled.div`
  width: 80vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ChildrenContainer = styled.div`
  width: 100%;
  height: 86vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5f5d5d;
`;
const Layout = ({ children, role }) => {
  return (
    <LayOutContainer>
      <SideBar role={role} />
      <WrapperContainer>
        <Header />
        <ChildrenContainer>{children}</ChildrenContainer>
        <Footer />
      </WrapperContainer>
    </LayOutContainer>
  );
};

export default Layout;
