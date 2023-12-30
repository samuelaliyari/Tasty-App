import { useParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import AreaGallery from "../../components/gallery/AreaGallery";
import Navbar from "../../components/nav/Navbar";

const Area = () => {
	const keyword = useParams();
	console.log(keyword.area);

	return (
		<section className='area'>
			<SearchBar />
			<Navbar />
			<AreaGallery area={keyword.area} />
		</section>
	);
};

export default Area;
