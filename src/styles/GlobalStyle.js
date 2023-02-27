import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
body{
	background-color: ${theme.colors.primaryBg};

	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;

}

	h1,
h2,
h3,
h4,
h5,
h6,
p {
   margin: 0;
}

ul,
ol {
   margin: 0;
   padding: 0;

   list-style: none;
}

img {
   display: block;
	max-width: 100%;
	height: auto;
}
;`;