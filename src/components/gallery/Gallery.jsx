import { useContext, useEffect, useState } from "react";
import ItemCard from "../ItemCard";
import { Keyword } from "../../context/Context";
import "./Gallery.scss";

const Gallery = ({ category, area }) => {
	const { keyword, setKeyword } = useContext(Keyword);
	const [renderData, setRenderData] = useState([]);

	useEffect(() => {
		fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
			.then((res) => res.json())
			.then((data) => setRenderData(data.meals))
			.catch((err) => console.log(err));
	}, [keyword]);

	useEffect(() => {
		if (category !== "") {
			fetch(
				`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
			)
				.then((res) => res.json())
				.then((data) => setRenderData(data.meals))
				.catch((err) => console.log(err));
		}
	}, [category]);

	useEffect(() => {
		console.log(renderData);
	}, [area, category, keyword]);

	return (
		<section className='gallery'>
			{renderData?.map((meal) => (
				<ItemCard
					key={meal.idMeal}
					meal={meal}
				/>
			))}
		</section>
	);
};

export default Gallery;
