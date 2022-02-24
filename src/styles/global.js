import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}
body, input, button {
  font-family: 'Poppins', sans-serif;
  font-size: 0.88rem;
}
button {
  cursor: pointer;
}
a {
  text-decoration: none;
}
ul{
    list-style: none;
}

:root {
  --color-primary: #FF577F;
  --color-primary-50: #FF427F;
  --color-primary-Disable: #59323F;
  --gray-4: #121214;
  --gray-3: #212529;
  --gray-2: #343B41;
  --gray-1: #868E96;
  --gray-0: #868E96;
  --sucess: #3FE864;
  --negative: #E83F5B;
  --title: #F8F9FA;
  
}
 
`;
