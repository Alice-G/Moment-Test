// BLOCK BLOCK BLOCK this whole series is from folklore series

import { createGlobalStyle } from "styled-components";
import colors from "../style/colors";
import fonts from "../style/fonts";

const StyledGlobalStyle = createGlobalStyle`

    * {
      text-decoration: none;
      letter-spacing: 0em;
      list-style-type: none;
      margin: 0;
    
      color: ${colors.rich_black}; 
      font-family: ${fonts.font_gen}, serif;
      font-weight: 500;
      font-size: 16px;
    }

    // styling margins of pages
    section {
      // smaller screens 
      @media (max-width: 375px) {
        margin: 0;
      } 
      
      // medium screens
      @media (min-width: 375px) and (max-width: 768px)  {
        margin: 0  5%;
      }
      
      // medium large
      @media (min-width:  769px) and (max-width: 1199px) {
        margin: 0  100px;
      }

      // medium large
      @media (min-width: 1200px) and (max-width: 1439px) {
        margin: 0  100px;
      } 

      // for-desktop-up 
      @media (min-width: 1440px) { 
        margin: 0  100px;
      }
    }

    body {
      font-family: Montserrat, Arial, sans-serif;
      font-size: 18px; // TODO 
      background-color: ${colors.raisin_black};
      max-width: 1440px;


      // *************************************
      // COLOR SHIFTING BACKGROUND
      // *************************************
  
      // dark purple blue
      // background: linear-gradient(284deg, #0f0c29, #302b63, #24243e);
      // dark browns
      background: linear-gradient(284deg, #231209, #5C4033, #24243e);
      background-size: 400% 400%;
    
      -webkit-animation: AnimationName 15s ease infinite; // DECIDE if longer
      -moz-animation: AnimationName 15s ease infinite;
      animation: AnimationName 15s ease infinite;
    
      @-webkit-keyframes AnimationName {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
      @-moz-keyframes AnimationName {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
      @keyframes AnimationName {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      // for-desktop-up 
        @media (min-width: 1440px) {
          margin: auto;
        }
      
    }

`;

export default StyledGlobalStyle;
