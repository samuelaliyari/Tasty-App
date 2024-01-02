import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import "./Home.scss";
import { Link } from "react-router-dom";
import Navbar from "../../components/nav/Navbar";
import Gallery from "../../components/gallery/Gallery";
const Home = () => {
	//    ====================Home Start Components & Fetches=======================
	const [mealOfTheDay, setMealOfTheDay] = useState({});
	const [allAreas, setallAreas] = useState([]);
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		fetch("https://www.themealdb.com/api/json/v1/1/random.php")
			.then((res) => res.json())
			.then((data) => setMealOfTheDay(data.meals[0]))
			.catch((err) => console.log(err));

		fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
			.then((res) => res.json())
			.then((data) => setallAreas(data.meals))
			.catch((err) => console.log(err));
		fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
			.then((res) => res.json())
			.then((data) => setCategories(data.meals))
			.catch((err) => console.log(err));
	}, []);

	//    ====================Search Function=======================
	const [searchInput, setSearchInput] = useState("");

	return (
		<main>
			<SearchBar
				input={searchInput}
				setInput={setSearchInput}
			/>
			<article className='categoriesConteiner'>
				<h2>Categories</h2>
				<div className='categories'>
					{categories?.map((category, index) => (
						<Link
							value={category.strCategory}
							key={index}
							to={`/category/${category.strCategory}`}>
							{category.strCategory}
						</Link>
					))}
				</div>
			</article>

			<article className='areaContainer'>
				<h2>Areas</h2>
				<div className='areas'>
					{allAreas?.map((area, index) => (
						<Link
							key={index}
							area={area.strArea}
							to={`/area/${area.strArea}`}>
							{area.strArea}
						</Link>
					))}
				</div>
			</article>

			<article className='day'>
				<h2>Meal of the Day</h2>
				<article>
					<Link to={`/detail/${mealOfTheDay.idMeal}`}>
						<img
							src={mealOfTheDay.strMealThumb}
							alt=''
						/>
						<div>
							<div>
								<p>{mealOfTheDay.strArea}</p>
								<p>{mealOfTheDay.strCategory}</p>
							</div>
							<h3>{mealOfTheDay.strMeal}</h3>
							<ul>
								<li>{mealOfTheDay.strIngredient1}</li>
								<li>{mealOfTheDay.strIngredient2}</li>
								<li>{mealOfTheDay.strIngredient3}</li>
							</ul>
						</div>
					</Link>
				</article>
			</article>
		</main>
	);
};

export default Home;
