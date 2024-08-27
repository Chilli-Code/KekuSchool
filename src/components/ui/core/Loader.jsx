// import React from 'react';
// import styled from 'styled-components';

// const LoaderWrapper = styled.div`
//   position: relative;
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   /* margin: 75px; */
//   display: inline-block;
//   vertical-align: middle;
// `;

// const LoaderStar = styled.svg`
//   position: static;
//   width: 60px;
//   height: 60px;
//   transform: scale(0.7);
//   animation: loader-2-star 1s ease alternate infinite;

//   @keyframes loader-2-star {
//     0% {
//       transform: scale(0) rotate(0deg);
//     }
//     100% {
//       transform: scale(0.7) rotate(360deg);
//     }
//   }

//   @-webkit-keyframes loader-2-star {
// 	 0% {
// 		 -webkit-transform: scale(0) rotate(0deg);
// 		 transform: scale(0) rotate(0deg);
// 	}
// 	 100% {
// 		 -webkit-transform: scale(0.7) rotate(360deg);
// 		 transform: scale(0.7) rotate(360deg);
// 	}
// }
//  @keyframes loader-2-star {
// 	 0% {
// 		 -webkit-transform: scale(0) rotate(0deg);
// 		 transform: scale(0) rotate(0deg);
// 	}
// 	 100% {
// 		 -webkit-transform: scale(0.7) rotate(360deg);
// 		 transform: scale(0.7) rotate(360deg);
// 	}
// }
// `;

// const LoaderCircles = styled.div`
//   width: 8px;
//   height: 8px;
//   background: #18ffff;
//   border-radius: 50%;
//   position: absolute;
//   left: calc(50% - 4px);
//   top: calc(50% - 4px);
//   transition: all 1s ease;
//   animation: loader-2-circles 1s ease-in-out alternate infinite;


//   @-webkit-keyframes loader-2-circles {
// 	 0% {
// 		 -webkit-box-shadow: 0 0 0 #18ffff;
// 		 box-shadow: 0 0 0 #18ffff;
// 		 opacity: 1;
// 		 -webkit-transform: rotate(0deg);
// 		 transform: rotate(0deg);
// 	}
// 	 50% {
// 		 -webkit-box-shadow: 24px -22px #18ffff, 30px -15px 0 -3px #18ffff, 31px 0px #18ffff, 29px 9px 0 -3px #18ffff, 24px 23px #18ffff, 17px 30px 0 -3px #18ffff, 0px 33px #18ffff, -10px 28px 0 -3px #18ffff, -24px 22px #18ffff, -29px 14px 0 -3px #18ffff, -31px -3px #18ffff, -30px -11px 0 -3px #18ffff, -20px -25px #18ffff, -12px -30px 0 -3px #18ffff, 5px -29px #18ffff, 13px -25px 0 -3px #18ffff;
// 		 box-shadow: 24px -22px #18ffff, 30px -15px 0 -3px #18ffff, 31px 0px #18ffff, 29px 9px 0 -3px #18ffff, 24px 23px #18ffff, 17px 30px 0 -3px #18ffff, 0px 33px #18ffff, -10px 28px 0 -3px #18ffff, -24px 22px #18ffff, -29px 14px 0 -3px #18ffff, -31px -3px #18ffff, -30px -11px 0 -3px #18ffff, -20px -25px #18ffff, -12px -30px 0 -3px #18ffff, 5px -29px #18ffff, 13px -25px 0 -3px #18ffff;
// 		 -webkit-transform: rotate(180deg);
// 		 transform: rotate(180deg);
// 	}
// 	 100% {
// 		 opacity: 0;
// 		 -webkit-transform: rotate(360deg);
// 		 transform: rotate(360deg);
// 		 -webkit-box-shadow: 25px -22px #18ffff, 15px -22px 0 -3px black, 31px 2px #18ffff, 21px 2px 0 -3px black, 23px 25px #18ffff, 13px 25px 0 -3px black, 0px 33px #18ffff, -10px 33px 0 -3px black, -26px 24px #18ffff, -19px 17px 0 -3px black, -32px 0px #18ffff, -23px 0px 0 -3px black, -25px -23px #18ffff, -16px -23px 0 -3px black, 0px -31px #18ffff, -2px -23px 0 -3px black;
// 		 box-shadow: 25px -22px #18ffff, 15px -22px 0 -3px black, 31px 2px #18ffff, 21px 2px 0 -3px black, 23px 25px #18ffff, 13px 25px 0 -3px black, 0px 33px #18ffff, -10px 33px 0 -3px black, -26px 24px #18ffff, -19px 17px 0 -3px black, -32px 0px #18ffff, -23px 0px 0 -3px black, -25px -23px #18ffff, -16px -23px 0 -3px black, 0px -31px #18ffff, -2px -23px 0 -3px black;
// 	}
// }
//  @keyframes loader-2-circles {
// 	 0% {
// 		 -webkit-box-shadow: 0 0 0 #18ffff;
// 		 box-shadow: 0 0 0 #18ffff;
// 		 opacity: 1;
// 		 -webkit-transform: rotate(0deg);
// 		 transform: rotate(0deg);
// 	}
// 	 50% {
// 		 -webkit-box-shadow: 24px -22px #18ffff, 30px -15px 0 -3px #18ffff, 31px 0px #18ffff, 29px 9px 0 -3px #18ffff, 24px 23px #18ffff, 17px 30px 0 -3px #18ffff, 0px 33px #18ffff, -10px 28px 0 -3px #18ffff, -24px 22px #18ffff, -29px 14px 0 -3px #18ffff, -31px -3px #e11a2b, -30px -11px 0 -3px #18ffff, -20px -25px #18ffff, -12px -30px 0 -3px #18ffff, 5px -29px #18ffff, 13px -25px 0 -3px #18ffff;
// 		 box-shadow: 24px -22px #18ffff, 30px -15px 0 -3px #18ffff, 31px 0px #18ffff, 29px 9px 0 -3px #18ffff, 24px 23px #18ffff, 17px 30px 0 -3px #18ffff, 0px 33px #18ffff, -10px 28px 0 -3px #18ffff, -24px 22px #18ffff, -29px 14px 0 -3px #18ffff, -31px -3px #18ffff, -30px -11px 0 -3px #18ffff, -20px -25px #18ffff, -12px -30px 0 -3px #18ffff, 5px -29px #18ffff, 13px -25px 0 -3px #18ffff;
// 		 -webkit-transform: rotate(180deg);
// 		 transform: rotate(180deg);
// 	}
// 	 100% {
// 		 opacity: 0;
// 		 -webkit-transform: rotate(360deg);
// 		 transform: rotate(360deg);
// 		 -webkit-box-shadow: 25px -22px #18ffff, 15px -22px 0 -3px black, 31px 2px #18ffff, 21px 2px 0 -3px black, 23px 25px #18ffff, 13px 25px 0 -3px black, 0px 33px #18ffff, -10px 33px 0 -3px black, -26px 24px #18ffff, -19px 17px 0 -3px black, -32px 0px #18ffff, -23px 0px 0 -3px black, -25px -23px #18ffff, -16px -23px 0 -3px black, 0px -31px #18ffff, -2px -23px 0 -3px black;
// 		 box-shadow: 25px -22px #18ffff, 15px -22px 0 -3px black, 31px 2px #18ffff, 21px 2px 0 -3px black, 23px 25px #18ffff, 13px 25px 0 -3px black, 0px 33px #18ffff, -10px 33px 0 -3px black, -26px 24px #18ffff, -19px 17px 0 -3px black, -32px 0px #18ffff, -23px 0px 0 -3px black, -25px -23px #18ffff, -16px -23px 0 -3px black, 0px -31px #18ffff, -2px -23px 0 -3px black;
// 	}
// }



// `;

// const Loader = () => {
//   return (
//     <LoaderWrapper className="loader loader-2">
//       <LoaderStar
//         className="loader-star"
//         xmlns="http://www.w3.org/2000/svg"
//         xmlnsXlink="http://www.w3.org/1999/xlink"
//         version="1.1"
//       >
//         <polygon
//           points="29.8 0.3 22.8 21.8 0 21.8 18.5 35.2 11.5 56.7 29.8 43.4 48.2 56.7 41.2 35.1 59.6 21.8 36.8 21.8"
//           fill="#18ffff"
//         ></polygon>
//       </LoaderStar>
//       <LoaderCircles className="loader-circles"></LoaderCircles>
//     </LoaderWrapper>
//   );
// }

// export default Loader;
import React from 'react';
import styled from 'styled-components';

const Batery = styled.div`
  width:40px;
  height:20px;
  border:1px solid #766DF4;
  border-right-color: transparent;
  padding:1.5px;
  background:
  repeating-linear-gradient(90deg,#54ADB3 0 5px,#0000 0 7.5px) 
left/0% 100% no-repeat content-box content-box;
  position: relative;
  animation:p5 2s infinite steps(6);

  &::before{
    content:"";
  position: absolute;
  top:-1px;
  bottom:-1px;
  left:100%;
  width:5px;
  background:
    linear-gradient(
        #0000   calc(50% - 3.5px),#54ADB3 0 calc(50% - 2.5px),
        #0000 0 calc(50% + 2.5px),#54ADB3 0 calc(50% + 3.5px),#0000 0) left /100% 100%,
    linear-gradient(#54ADB3 calc(50% - 2.5px),#0000        0 calc(50% + 2.5px),#54ADB3 0) left /1px 100%,
    linear-gradient(#0000        calc(50% - 2.5px),#54ADB3 0 calc(50% + 2.5px),#0000        0) right/1px 100%;
  background-repeat:no-repeat;
}
@keyframes p5 {
    100% {background-size:120% 100%}
}
`;



const Loader = () => {
  return (
<Batery className="custom-loader"></Batery>

  );
}


export default Loader;