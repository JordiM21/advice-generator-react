import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import dice from "../images/icon-dice.svg";
import divDesktop from "../images/pattern-divider-desktop.svg";
import divMobile from "../images/pattern-divider-mobile.svg";

function App() {
	const [advice, setAdvice] = useState({});
	const random = () => {
		axios.get(`https://api.adviceslip.com/advice`).then((res) =>
			setAdvice(res.data)
		);
	};

	useEffect(() => {
		axios.get(`https://api.adviceslip.com/advice`).then((res) =>
			setAdvice(res.data)
		);
	}, []);

	return (
		<div className="background">
			<section className="card">
				<p>ADVICE # {advice.slip?.id} </p>
				<h2>"{advice.slip?.advice}"</h2>
				<img className="separator" src={divMobile} />
				<div onClick={random} className="dice">
					<img src={dice} />
				</div>
			</section>
		</div>
	);
}

export default App;
