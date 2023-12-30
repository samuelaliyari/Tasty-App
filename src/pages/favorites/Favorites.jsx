import { useContext } from "react";
import ItemCard from "../../components/ItemCard";
import Navbar from "../../components/nav/Navbar";
import "./Favorites.scss";
import { Keyword } from "../../context/Context";
const Favorites = () => {
	const { favorites, setFavorites } = useContext(Keyword);
	console.log(favorites);
	return (
		<section>
			<Navbar favorites={favorites} />
			<article className='favorites'>
				{favorites.map((meal) => (
					<ItemCard meal={meal} />
				))}
			</article>
		</section>
	);
};

export default Favorites;
