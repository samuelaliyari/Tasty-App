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

	const login = () => {
		event.preventDefault();

		const currentUser = users.filter((user) =>
			user.mail === userMail ? user : null,
		);
		console.log(currentUser);

		if (currentUser[0].pass === userPass) {
			console.log("sucess");
			setUser(userMail);

			console.log(userMail + " is active");
			setTimeout(() => navigate("/home"), 200);
		}
	};

	useEffect(() => {
		console.log(users);
	}, [users]);

	useEffect(() => {
		setActiveUser(user);
		localStorage.setItem("active", JSON.stringify(user));
	}, [user]);
	return (
		<section className='login'>
			<Navbar />
			<article>
				<h3>welcome Back</h3>
				<form>
					<input
						type='text'
						placeholder='e-mail'
						onChange={(e) => setUserMail(e.target.value)}
					/>
					<input
						type='password'
						placeholder='password'
						onChange={(e) => setUserPass(e.target.value)}
					/>
					<button onClick={login}>Login</button>
					<Link to='/register'>Create new Account</Link>
				</form>
			</article>
		</section>
	);
};

export default Login;
