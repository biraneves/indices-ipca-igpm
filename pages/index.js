import styled from 'styled-components';
import Card from '../src/components/Card';
import { CSSReset } from '../src/components/CSSReset';

const StyledAllPageDiv = styled.div`
    width: 100%;
    height: 100vh;
    background-color: aliceblue;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const HomePage = () => {
    return (
        <>
            <CSSReset />
            <StyledAllPageDiv>
                <Card type="ipca" />
                <Card type="igpm" />
            </StyledAllPageDiv>
        </>
    );
};

export default HomePage;
