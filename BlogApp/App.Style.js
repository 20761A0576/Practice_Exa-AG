import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #222;
    position: fixed;
    width: 100%;
    top: 0;
`;
export const Navbtn = styled.button`
    background-color: transparent;
    color: #fff;
    border:none;
    margin-left: 1rem;
    font-size: 16px;
    &:hover{
        color:#6ce9ef;
    }
`;
export const Title = styled.div`
    color: white;
    font-size: 22px;
    font-weight: bold;
`;

export const Nav = styled.div`
    margin-right: 1rem;
`;