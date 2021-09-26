import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GloablSyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: arial,sans-serif;
    }
`;

export const Container = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;
`;

export default GloablSyle;