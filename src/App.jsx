import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Onboarding from "./pages/onBoarding/Onboarding";
import { useContext, useEffect, useState } from "react";
import { Keyword } from "./context/Context";
import Category from "./pages/category/Category";
import Area from "./pages/area/Area";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Detail from "./pages/detail/Detail";
import Favorites from "./pages/favorites/Favorites";
import Navbar from "./components/nav/Navbar";

function App() {
	const [keyword, setKeyword] = useState("");
	const Context = useContext(Keyword);
	const [fav, setFav] = useState([]);
	const [users, setUsers] = useState([]);
	const [activeUser, setActiveUser] = useState("");
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		if (localStorage.getItem("userData") !== null) {
			setUsers(JSON.parse(localStorage.getItem("userData")));
		}
		if (localStorage.getItem("active") !== null) {
			setActiveUser(JSON.parse(localStorage.getItem("active")));
		}
	}, []);

	useEffect(() => {
		if (activeUser !== "") {
			setFavorites(JSON.parse(localStorage.getItem("fav" + activeUser)));
		}
	}, [activeUser]);

	useEffect(() => {
		if (activeUser !== "") {
			localStorage.setItem("fav" + activeUser, JSON.stringify(favorites));
		}
	}, [favorites]);

	useEffect(() => {}, [favorites]);

	return (
		<>
			<Keyword.Provider
				value={{
					keyword,
					setKeyword,
					fav,
					setFav,
					users,
					setUsers,
					activeUser,
					setActiveUser,
					favorites,
					setFavorites,
				}}>
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={<Onboarding />}
					/>
					<Route
						path='/home'
						element={<Home />}
					/>
					<Route
						path='/list'
						element={<List />}
					/>
					<Route
						path='/category/:category'
						element={<Category />}
					/>
					<Route
						path='/area/:area'
						element={<Area />}
					/>
					<Route
						path='/login'
						element={<Login />}
					/>
					<Route
						path='/register'
						element={<Register />}
					/>
					<Route
						path='/detail/:id'
						element={<Detail />}
					/>
					<Route
						path='/favorites'
						element={<Favorites />}
					/>
				</Routes>
			</Keyword.Provider>
		</>
	);
}

export default App;
