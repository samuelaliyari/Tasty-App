import { NavLink } from "react-router-dom";
import home from "../../../public/home.png";
import lupe from "../../../public/lupe.png";
import heart from "../../../public/heart.png";
import cook from "../../../public/cook.png";
import "./Navbar.scss";
import { useContext, useEffect } from "react";
import { Keyword } from "../../context/Context";

const Navbar = () => {
	const { activeUser, favorites } = useContext(Keyword);
	useEffect(() => {}, [favorites, activeUser]);
	return (
		<header>
			<nav>
				<NavLink
					to='/home'
					onClick={() =>
						window.scrollTo({
							top: 0,
							behavior: "smooth",
						})
					}>
					<img
						src={home}
						alt=''
					/>
				</NavLink>
				<NavLink
					to='/home'
					onClick={() =>
						window.scrollTo({
							top: 0,
							behavior: "smooth",
						})
					}>
					<img
						src={lupe}
						alt=''
					/>
				</NavLink>
				<NavLink to='/favorites'>
					<img
						src={heart}
						alt=''
					/>
					{activeUser !== "" ? <p>{favorites.length}</p> : null}
				</NavLink>
				<NavLink to='/login'>
					<img
						src={cook}
						alt=''
					/>
				</NavLink>
			</nav>
		</header>
	);
};

export default Navbar;
