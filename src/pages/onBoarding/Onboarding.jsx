import { Link } from "react-router-dom";
import onBoarding from "../../../public/onBoarding.png";
import "./Onboarding.scss";
import Splash from "../../components/SplashScreen/Splash";
import { useEffect, useState } from "react";

const Onboarding = () => {
	const [display, setDisplay] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setDisplay(false);
		}, 3000);
	}, []);
	return (
		<section className='onBoarding'>
			<Splash display={display} />
			<h1>All recipe you needed</h1>
			<img
				src={onBoarding}
				alt=''
				className='plate'
			/>
			<Link to='/home'> get Started</Link>
			<p>5000+ healthy recipes made by people for your healthy life</p>
		</section>
	);
};

export default Onboarding;
