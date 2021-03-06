import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:boerder-box;
    }
    html{
        font-family:-apple-system, 'Noto Sans KR', BlinkMacSystemFont, 'Segoe UI', Roboto, 'Pinyon Script', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 'Noto Sans KR', sans-serif;
        font-size: 10px;
    }

    @media screen and (max-width: 1440px) {
        html{
            font-size: 9px;
        }
    }

    @media screen and (max-width: 768px) {
        html{
            font-size:10px;
        }
    }
`;

export default globalStyles;
