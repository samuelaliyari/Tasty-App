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
	const [emailMatch, setEmailMatch] = useState(true);
	const [passMatch, setPassMatch] = useState(true);
	const [dataMatch, setDataMatch] = useState(false);

	const register = () => {
		event.preventDefault();
		if (mail !== checkMail) {
			setEmailMatch(false);
		} else if (pass !== checkPass) {
			setPassMatch(false);
		}
		if (mail === checkMail && pass === checkPass) {
			setUserData([...userData, { mail: mail, pass: pass }]);
			localStorage.setItem("fav" + mail, JSON.stringify([]));
			setDataMatch(true);
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
				<form onSubmit={register}>
					<input
						type='text'
						placeholder='e-mail'
						onChange={(e) => setMail(e.target.value)}
						style={emailMatch ? null : { color: "red" }}
					/>
					<input
						type='text'
						placeholder='Confirm e-mail'
						onChange={(e) => setCheckMail(e.target.value)}
						style={emailMatch ? null : { color: "red" }}
					/>
					<input
						type='password'
						placeholder='password'
						onChange={(e) => setPass(e.target.value)}
						style={passMatch ? null : { color: "red" }}
					/>
					<input
						type='password'
						placeholder='Confirm password'
						onChange={(e) => setCheckPass(e.target.value)}
						style={passMatch ? null : { color: "red" }}
					/>
					<button>Sign up</button>
					<Link to='/login'>Already have an Account?</Link>
				</form>
				{dataMatch ? (
					<Link to='/login'>
						Successfuly registered <span>click to Login</span>
					</Link>
				) : null}
			</article>
		</section>
	);
};

export default Register;
