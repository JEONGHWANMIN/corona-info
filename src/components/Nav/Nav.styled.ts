import styled from "styled-components";

export const NavBoxWrapper = styled.div`
	background-color: #003458;
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 20rem;
	text-align: center;
	overflow-y: hidden;

	div > h1 {
		font-size: 3rem;
		margin-top: 80px;
		color: #fff;
	}
`;

export const NavMenu = styled.ul`
	a {
		text-decoration: none;
		display: block;
	}

	li:first-child {
		margin-top: 3.5rem;
	}

	li {
		padding: 1.2rem;
	}
	li > h3 > a {
		color: #fff;
		font-size: 1.6rem;
		display: flex;
		justify-content: center;
	}

	& > li:hover {
		background-color: red;
	}
`;

export const Auth = styled.div`
	margin-top: 2rem;
	color: white;
	a {
		color: white;
		text-decoration: none;
		font-size: 1.3rem;
	}
	& > .border {
		width: 80%;
		margin: 1rem 2rem;
		height: 0.2rem;
		background-color: white;
	}
`;
