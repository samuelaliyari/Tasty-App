import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { useContext, useEffect, useState } from "react";
import { Keyword } from "../../context/Context";
import Navbar from "../../components/nav/Navbar";
const Login = () => {
	const { users, setUsers, activeUser, setActiveUser } = useContext(Keyword);
	const [userMail, setUserMail] = useState("");
	const [userPass, setUserPass] = useState("");
	const [user, setUser] = useState("");
	const navigate = useNavigate();
	const [emailMatch, setEmailMatch] = useState(true);
	const [passMatch, setPassMatch] = useState(true);

	const login = () => {
		event.preventDefault();

		const currentUser = users.filter((user) =>
			user.mail === userMail ? user : null,
		);
		if (!currentUser[0]) {
			setEmailMatch(false);
		}
		if (currentUser[0]) {
			setEmailMatch(true);
		}
		if (!currentUser[0]) {
			setEmailMatch(false);
		}
		if (currentUser[0].pass !== userPass) {
			setPassMatch(false);
		}
		if (currentUser[0].pass === userPass) {
			setUser(userMail);

			console.log(userMail + " is active");
			setTimeout(() => navigate("/home"), 200);
		}
	};

	useEffect(() => {}, [users]);

	useEffect(() => {
		setActiveUser(user);
		localStorage.setItem("active", JSON.stringify(user));
	}, [user]);
	return (
		<section className='login'>
			<article>
				<h3>welcome Back</h3>
				<form>
					<input
						type='text'
						placeholder='e-mail'
						onChange={(e) => setUserMail(e.target.value)}
						style={emailMatch ? null : { color: "red" }}
					/>
					<input
						type='password'
						placeholder='password'
						onChange={(e) => setUserPass(e.target.value)}
						style={passMatch ? null : { color: "red" }}
					/>
					<button onClick={login}>Login</button>
					<Link to='/register'>Create new Account</Link>
				</form>
			</article>
		</section>
	);
};

export default Login;
