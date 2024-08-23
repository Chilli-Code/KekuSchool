import React from 'react';
import styled from 'styled-components';

const LoaderDeletee = styled.div`
position: relative;
width: 40px;
height: 40px;
border-radius: 50%;
display: inline-block;
vertical-align: middle;
`;
const LoaderOutter = styled.div`

    position: absolute;
    border: 4px solid #f50057;
    border-left-color: transparent;
    border-bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    -webkit-animation: loader-1-outter 1s cubic-bezier(.42, .61, .58, .41) infinite;
    animation: loader-1-outter 1s cubic-bezier(.42, .61, .58, .41) infinite;
    @keyframes loader-1-outter {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @-webkit-keyframes loader-1-outter {
	 0% {
		 -webkit-transform: rotate(0deg);
		 transform: rotate(0deg);
	}
	 100% {
		 -webkit-transform: rotate(360deg);
		 transform: rotate(360deg);
	}
}
`;

const LoaderInner = styled.div`
    position: absolute;
    border: 4px solid #f50057;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    left: calc(50% - 10px);
    top: calc(50% - 10px);
    border-right: 0;
    border-top-color: transparent;
    -webkit-animation: loader-1-inner 1s cubic-bezier(.42, .61, .58, .41) infinite;
    animation: loader-1-inner 1s cubic-bezier(.42, .61, .58, .41) infinite;

    @keyframes loader-1-inner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-360deg);
        }
    }
    @-webkit-keyframes loader-1-inner {
	 0% {
		 -webkit-transform: rotate(0deg);
		 transform: rotate(0deg);
	}
	 100% {
		 -webkit-transform: rotate(-360deg);
		 transform: rotate(-360deg);
	}
}

`;

const LoaderDelete = () => {
    return (
<LoaderDeletee>
      <LoaderOutter className="loader-outter"></LoaderOutter>
      <LoaderInner className="loader-inner"></LoaderInner>
    </LoaderDeletee>
    );
  }
  
  export default LoaderDelete;
  