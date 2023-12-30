import { useParams } from "react-router-dom";
import "./Detail.scss";
import { useEffect, useState } from "react";
import Navbar from "../../components/nav/Navbar";
import ReactPlayer from "react-player/youtube";
import { Keyword } from "../../context/Context";

const Detail = () => {
	const { favorites } = useContext(Keyword);
	const [meal, setMeal] = useState([]);
	const id = useParams().id;
	useEffect(() => {
		fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
			.then((res) => res.json())
			.then((data) => setMeal(data.meals[0]));
	}, [id]);

	console.log(meal);
	return (
		<section className='detail'>
			<section>
				<article>
					<h2>{meal.strMeal}</h2>
					<img
						src={meal.strMealThumb}
						alt=''
					/>
				</article>
				<section>
					<p>{meal.strInstructions}</p>
				</section>
			</section>
			<section className='videoContainer'>
				<div>
					<ReactPlayer
						url={meal.strYoutube}
						controls={true}
						width='100%'
					/>
				</div>
				<article>
					<ol>
						{" "}
						<li>
							<p>{meal.strIngredient1}</p>
							<p>{meal.strMeasure1}</p>
						</li>
						<li>
							<p>{meal.strIngredient2}</p>
							<p>{meal.strMeasure2}</p>
						</li>
						<li>
							<p>{meal.strIngredient3}</p>
							<p>{meal.strMeasure3}</p>
						</li>
						<li>
							<p>{meal.strIngredient4}</p>
							<p>{meal.strMeasure4}</p>
						</li>
						<li>
							<p>{meal.strIngredient5}</p>
							<p>{meal.strMeasure5}</p>
						</li>
						<li>
							<p>{meal.strIngredient6}</p>
							<p>{meal.strMeasure6}</p>
						</li>
						<li>
							<p>{meal.strIngredient7}</p>
							<p>{meal.strMeasure7}</p>
						</li>
						<li>
							<p>{meal.strIngredient8}</p>
							<p>{meal.strMeasure8}</p>
						</li>
						<li>
							<p>{meal.strIngredient9}</p>
							<p>{meal.strMeasure9}</p>
						</li>
						{meal.strIngredient10 !== "" ? (
							<li>
								<p>{meal.strIngredient10}</p>
								<p>{meal.strMeasure10}</p>
							</li>
						) : (
							<p></p>
						)}
						{meal.strIngredient11 !== "" ? (
							<li>
								<p>{meal.strIngredient11}</p>
								<p>{meal.strMeasure11}</p>
							</li>
						) : (
							<p></p>
						)}
						{meal.strIngredient12 !== "" ? (
							<li>
								<p>{meal.strIngredient12}</p>
								<p>{meal.strMeasure12}</p>
							</li>
						) : (
							<p></p>
						)}
						{meal.strIngredient13 !== "" ? (
							<li>
								<p>{meal.strIngredient13}</p>
								<p>{meal.strMeasure13}</p>
							</li>
						) : (
							<p></p>
						)}
						{meal.strIngredient14 !== "" ? (
							<li>
								<p>{meal.strIngredient14}</p>
								<p>{meal.strMeasure14}</p>
							</li>
						) : (
							<p></p>
						)}
						{meal.strIngredient15 !== "" ? (
							<li>
								<p>{meal.strIngredient15}</p>
								<p>{meal.strMeasure15}</p>
							</li>
						) : (
							<p></p>
						)}
						{meal.strIngredient16 !== "" ? (
							<li>
								<p>{meal.strIngredient16}</p>
								<p>{meal.strMeasure16}</p>
							</li>
						) : (
							<p></p>
						)}
					</ol>
				</article>
			</section>
		</section>
	);
};

export default Detail;
