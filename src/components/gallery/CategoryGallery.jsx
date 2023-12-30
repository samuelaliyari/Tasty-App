import { useEffect, useState } from "react";
import ItemCard from "../ItemCard";

const CategoryGallery = ({ category }) => {
	const [renderData, setRenderData] = useState([]);

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

export default CategoryGallery;
