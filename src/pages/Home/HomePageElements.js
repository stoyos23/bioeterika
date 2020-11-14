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


// export const Button = styled.button`
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//         width: 40%;
//         height: 10%;
//         background-color: rgba(0, 0, 0, 0.378);
//         border-width: medium;
//         font-size: xxx-large;
//         color: whitesmoke;
//         font-weight: bolder;
//         border-radius: 20vh;
//         ::before{
//             background: rgba(0, 0, 0, 0.433);
//             content: "";
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%,-50%);
//             z-index: -1;
//             transition: all 0.6s ease;
//         }
//         ::before{
//             width: 100%;
//             height: 0%;
//             transform: translate(-50%,-50%);
//         }
//         :hover::before{
//             height: 100%;
//             border-radius:20vh;
//         }
//         @media (max-width: 768px) {
//             font-size: x-large;
//         }
// `;

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
    min-height:8vh;
    @media (max-height: 485px) {
        min-height:12vh;
    }
    @media (min-height: 690px) {
        min-height:7vh;
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
    text-shadow: 4px 5px 3px rgba(15, 195, 204, 0.9);
    font-weight:lighter;
    margin-top:10vh;
    @media (max-width: 670px) {
        font-size:3em;
    }
`;

export const TestButton = styled.button`
    --x: 50%;
	--y: 50%;
	
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: auto%;
	appearance: none;
	padding: 1em 2em;
	color: white;
	cursor: pointer;
	outline: none;
	border-radius: 100px;
    font-size:4vh;
    font-weight:bold;
    
    @media (max-width: 670px) {
        width:60%;
        font-size:3vh;
    }
	
	// The magic
	border: 2px solid #12d9eee6;
	background: linear-gradient(#0000,#0000) padding-box,radial-gradient(farthest-corner at var(--x) var(--y),#73F0F0B8,#845EC236) border-box;
`;

