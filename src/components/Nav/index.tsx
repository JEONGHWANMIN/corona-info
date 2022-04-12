import React from "react";
import { Link } from "react-router-dom";
import { Auth, NavBoxWrapper, NavMenu } from "./Nav.styled";
import { ImHome } from "react-icons/im";
import { MdDashboard } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";
function index() {
	return (
		<>
			<NavBoxWrapper>
				<div>
					<h1>Covid-Info</h1>
				</div>
				<NavMenu>
					<li>
						<h3>
							<Link to={"/"}>
								<ImHome />
								&nbsp;Home
							</Link>
						</h3>
					</li>
					<li>
						<h3>
							<Link to={"/dashboard"}>
								<MdDashboard />
								&nbsp;DashBoard
							</Link>
						</h3>
					</li>
					<li>
						<h3>
							<Link to={"/comunity"}>
								<AiOutlineComment />
								&nbsp;Community
							</Link>
						</h3>
					</li>
				</NavMenu>
				<Auth>
					<div className="border"></div>
					<div>
						<Link to={"/sign-in"}>SingIn</Link>
						<span> / </span>
						<Link to={"/sign-up"}>SignUp</Link>
					</div>
				</Auth>
			</NavBoxWrapper>
		</>
	);
}

export default index;
