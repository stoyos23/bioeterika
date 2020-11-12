import styled, { keyframes } from 'styled-components';

export const ImageBox = styled.object`
    position: sticky;
    display: flex;
    max-height: 800px;
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    margin: 7px;
    z-index: -50;
    margin:1.2%;
`;


export const Button = styled.button`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40%;
        height: 10%;
        background-color: rgba(0, 0, 0, 0.378);
        border-width: medium;
        font-size: xxx-large;
        color: whitesmoke;
        font-weight: bolder;
        border-radius: 20vh;
        ::before{
            background: rgba(0, 0, 0, 0.433);
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            z-index: -1;
            transition: all 0.6s ease;
        }
        ::before{
            width: 100%;
            height: 0%;
            transform: translate(-50%,-50%);
        }
        :hover::before{
            height: 100%;
            border-radius:20vh;
        }
        @media (max-width: 768px) {
            font-size: x-large;
        }
`;

const dividerAnimation = keyframes
`
        from{
            width: 0%;
        }
        to{
            width:80%
        }
`;

export const Divider = styled.div`
    margin:auto;
    margin-top:5vh;
    margin-bottom:5vh;
    height: 2px;
    width: 80%;
    background: blue;
    background: linear-gradient(90deg, hsl(0, 0%, 20%), hsl(0, 0%, 70%), hsl(0, 0%, 20%));
    animation: ${dividerAnimation} 2s linear;
`;

export const TopSpacer = styled.section`
    position:relative;
    min-height:6vh;
    @media (max-height: 485px) {
        min-height:12vh;
    }
    @media (min-height: 690px) {
        min-height:3vh;
    }
`;

export const TestDivider = styled.div`

`;

export const Heading = styled.header`
    font-size:6em;
    position:absolute;
    width:100%;
    text-align:center;
    color:  #FFF;
    text-shadow: 4px 5px 3px rgba(155,0,170,0.59);
    font-weight:lighter;
    margin-top:10vh;
    @media (max-width: 668px) {
        font-size:3em;
    }
`;

