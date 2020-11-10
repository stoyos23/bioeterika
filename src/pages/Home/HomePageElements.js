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
    :hover{
        background-color: rgba(0, 0, 0, 0.678);
    }
`;


export const TestBtn = styled.button`
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
            background: rgba(109, 92, 206, 0.433);
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
`;