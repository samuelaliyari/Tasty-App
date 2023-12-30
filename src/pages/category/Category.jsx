import { useParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import CategoryGallery from "../../components/gallery/CategoryGallery";
import Navbar from "../../components/nav/Navbar";

const Category = () => {
	const keyword = useParams();
	console.log(keyword.category);

	return (
		<section className='category'>
			<SearchBar />
			<Navbar />
			<CategoryGallery category={keyword.category} />
		</section>
	);
};

export default Category;
