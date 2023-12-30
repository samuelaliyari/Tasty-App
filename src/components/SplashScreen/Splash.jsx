import "./Splash.scss";
import Logo from "../../../public/Logo.svg";
import Tasty from "../../../public/Tasty.png";
import Pattern from "../../../public/Pattern.png";

const Splash = ({ display }) => {
	return (
		<section
			className='splash'
			style={display ? { display: "flex" } : { display: "none" }}>
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
		</section>
	);
};

export default Splash;
