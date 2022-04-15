import React from "react";
import { Link } from "react-router-dom";
import { NavContainer } from "./Nav.styled";

function Nav() {
	return (
		<NavContainer>
			<h1>CORONA-INFO</h1>
			<ul>
				<li>
					<a href="/">HOME</a>
				</li>
				<li>
					<a href="/">DISTANCE</a>
				</li>
			</ul>
		</NavContainer>
	);
}

export default Nav;
