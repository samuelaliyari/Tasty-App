import { Link } from "react-router-dom";
import "./Login.scss";
import { useContext, useEffect, useState } from "react";
import { Keyword } from "../../context/Context";
const Register = () => {
	const { fav, setFav, users, setUsers } = useContext(Keyword);
	const [mail, setMail] = useState("");
	const [checkMail, setCheckMail] = useState("");
	const [pass, setPass] = useState("");
	const [checkPass, setCheckPass] = useState("");
	const [userData, setUserData] = useState([]);

	const register = () => {
		if (mail === checkMail && pass === checkPass) {
			event.preventDefault();
			setUserData([...userData, { mail: mail, pass: pass }]);
			console.log(userData);

			localStorage.setItem("fav" + mail, JSON.stringify([]));
		}
	};

	useEffect(() => {
		localStorage.setItem("userData", JSON.stringify(userData));
		setUsers([...users, ...userData]);
	}, [userData]);
	return (
		<section className='login'>
			<article>
				<h3>Welcome to Tasty</h3>
				<form>
					<input
						type='text'
						placeholder='e-mail'
						onChange={(e) => setMail(e.target.value)}
					/>
					<input
						type='text'
						placeholder='Confirm e-mail'
						onChange={(e) => setCheckMail(e.target.value)}
					/>
					<input
						type='password'
						placeholder='password'
						onChange={(e) => setPass(e.target.value)}
					/>
					<input
						type='password'
						placeholder='Confirm password'
						onChange={(e) => setCheckPass(e.target.value)}
					/>
					<button onClick={register}>Sign up</button>
					<Link to='/login'>Already have an Account?</Link>
				</form>
			</article>
		</section>
	);
};

export default Register;
