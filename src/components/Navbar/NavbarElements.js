import styled from 'styled-components';

export const NavMenu = styled.menu`
    list-style-type: none;
    margin: 0;
    padding: 0.3rem;
    overflow: hidden;
    background-color: #FFFFFF;
    text-align: center;
    position:fixed;
    width:100%;
    z-index:100;
    top:0;
    &.active{
        visibility:visible;
        transition: all 0.3s;
    }
    &.hidden {
    visibility: hidden;
    transition: all 0.5s;
    transform: translateY(-100%);
    }
`;

export const LinkButton = styled.div`
        display: inline-block;
        margin-left: 0.5%;
        padding: 0.6rem 1rem;
        font-size: 1.1rem;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        outline: none;
        color: violet;
        background-color: #FFF3FF;
        border: none;
        border-radius: 1rem;
        :hover{
            background-color: #9B00AA
        }
        :active{
            background-color: #9B00AA;
            box-shadow: 0 5px #666;
            transform: translateY(4px);
        }
`;