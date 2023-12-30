import { useNavigate } from "react-router-dom";
import "./SearchBar.scss";
import { useContext, useEffect, useState } from "react";
import { Keyword } from "../context/Context";
import Logo from "../../public/Logo.png";
import Tasty from "../../public/Tasty.png";

const SearchBar = () => {
	const { keyword, setKeyword } = useContext(Keyword);
	const [userInput, setUserInput] = useState("");
	const navigate = useNavigate();
	const search = () => {
		event.preventDefault();
		setKeyword(userInput);
		navigate("/list");
	};

	return (
		<section className='search'>
			<div>
				<img
					src={Logo}
					alt=''
				/>
				<img
					src={Tasty}
					alt=''
				/>
			</div>
			<form onSubmit={() => search()}>
				<input
					type='text'
					placeholder='search...'
					onChange={(e) => setUserInput(e.target.value)}
				/>
			</form>
		</section>
	);
};

export default SearchBar;
