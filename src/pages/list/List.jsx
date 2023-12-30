import "./List.scss";
import SearchBar from "../../components/SearchBar";
import Gallery from "../../components/gallery/Gallery";
import Navbar from "../../components/nav/Navbar";

const List = () => {
	return (
		<section className='list'>
			<SearchBar />
			<Navbar />
			<Gallery />
		</section>
	);
};

export default List;
