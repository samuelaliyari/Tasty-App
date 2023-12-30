import { Link } from "react-router-dom";
import "./ItemCard.scss";
import heart from "../../public/heart.png";
import { useContext, useEffect } from "react";
import { Keyword } from "../context/Context";

const ItemCard = ({ meal }) => {
	const { favorites, setFavorites, activeUser, setActiveUser } =
		useContext(Keyword);
	const addTofav = () => {
		if (activeUser.includes("@")) {
			if (favorites.find((elt) => elt.idMeal === meal.idMeal)) {
				setFavorites(
					favorites.filter((elt) =>
						elt.idMeal !== meal.idMeal ? elt : null,
					),
				);
			} else {
				setFavorites([...favorites, meal]);
			}
		} else {
			console.log(activeUser);
			window.alert("please Login or register to use this feature");
		}
	};
	useEffect(() => {
		console.log(favorites);
	}, [favorites]);

	useEffect(() => {
		if (localStorage.getItem("active") !== null) {
			setActiveUser(JSON.parse(localStorage.getItem("active")));
			console.log("user found");
		}
	}, []);
	return (
		<article className='itemCard'>
			<Link
				to={`/detail/${meal.idMeal}`}
				onClick={() =>
					window.scroll({
						top: 0,
					})
				}>
				<article>
					<img
						src={meal.strMealThumb}
						alt=''
					/>
					<div>
						<h3>{meal.strMeal}</h3>
					</div>
				</article>
			</Link>
			<section onClick={() => addTofav()}>
				<img
					style={
						favorites.find((elt) => elt.idMeal === meal.idMeal)
							? { filter: "grayscale(0%)" }
							: { filter: "grayscale(100%)" }
					}
					src={heart}
					alt=''
				/>
			</section>
		</article>
	);
};

export default ItemCard;
