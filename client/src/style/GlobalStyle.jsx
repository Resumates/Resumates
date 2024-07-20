import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset};
:root{
  --bgColor: #EFF2F6;
	--mainColor:#04438B;
	--subColor:#3D79BF;
	--buttonMain:#04438B;
	--buttonSub:#3D79BF;
	--buttonDisable: #D9D9D9;
	--small : 390px;
	--medium : 768px;
	--large : 1320px;

}
html{ 
	font-size: 62.5%;
}
body{
	background-color: var(--bgColor);
	font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
	padding-top: 9.5rem;
}
a{
	text-decoration:none;
	color:inherit;
	cursor:pointer;
}
input,button{
	border:none;
	background-color:inherit;
}
button{
	cursor:pointer;
	font: inherit;
}
li{
	list-style: none;
}
p{
	color: #000;
}
Link{
	color: inherit;
	&:visited{
		color: inherit;
	}
}
button{
	padding: 0;
	border: none;
	background: transparent;
}
.hide {
	clip: rect(1px, 1px, 1px, 1px);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
}

`;

export default GlobalStyle;
