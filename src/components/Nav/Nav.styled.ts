import styled from "styled-components";

export const NavContainer = styled.div`
	width: 100%;
	height: 5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;

	h1 {
		font-size: 1.5rem;
		cursor: pointer;
		font-weight: bold;
	}

	& > ul {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-right: 3rem;
		height: auto;
	}

	li {
		padding: 0 0.5rem;
		height: fit-content;
	}

	a {
		display: block;
		padding: 0.5rem;
		text-decoration: none;
		color: black;
		font-weight: 600;
	}

	& > ul > li:hover {
		background-color: yellow;
		color: red;
	}
`;
