import { useParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import CategoryGallery from "../../components/gallery/CategoryGallery";
import Navbar from "../../components/nav/Navbar";

const Category = () => {
	const keyword = useParams();

	return (
		<section className='category'>
			<SearchBar />

			<CategoryGallery category={keyword.category} />
		</section>
	);
};

export default Category;
