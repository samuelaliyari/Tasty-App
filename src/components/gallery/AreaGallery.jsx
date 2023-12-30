import { useEffect, useState } from "react";
import ItemCard from "../ItemCard";

const AreaGallery = ({ area }) => {
	const [renderData, setRenderData] = useState([]);

	useEffect(() => {
		if (area !== "") {
			fetch(
				`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`,
			)
				.then((res) => res.json())
				.then((data) => setRenderData(data.meals))
				.catch((err) => console.log(err));
		}
	}, [area]);

	useEffect(() => {
		console.log(renderData);
	}, [area]);

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

export default AreaGallery;
