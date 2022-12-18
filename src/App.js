// Import style
import "./App.css";
import React, { useState } from "react";

// Import components
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Button from "./components/button";

import axios from "axios";

function App() {
	function myFunction() {
		alert("I am an alert box!");
	}

	const [mainContent, setMainContent] = useState(mainMenu());

	function mainMenu() {
		return (
			<>
				<h1>Main Menu</h1>
				<Button text="Login as passenger" handleClick={() => showPassengerMenu(1)}></Button>
				<Button text="Login as Driver" handleClick={() => showDriverMenu(1)}></Button>
				<Button text="Create Passenger Account" handleClick={showCreatePassengerForm}></Button>
				<Button text="Login Driver Account" handleClick={showCreateDriverForm}></Button>
			</>
		);
	}

	function passengerMenu(p) {
		return (
			<>
				<h1>Passenger Menu</h1>
				<Button text="View Trips" handleClick={myFunction}></Button>
				<Button text="Request Trip" handleClick={myFunction}></Button>
				<Button text="Update Account Info" handleClick={myFunction}></Button>
				<Button text="Log Out" handleClick={myFunction}></Button>
			</>
		);
	}

	async function createPassengerAccount() {
		var fname = document.getElementById("fname").value;
		var lname = document.getElementById("lname").value;
		var mNum = document.getElementById("mNum").value;
		var emailAddr = document.getElementById("emailAddr").value;
		var password = document.getElementById("password").value;

		await axios
			.post(`http://localhost:5000/passenger`, {
				firstName: fname,
				lastName: lname,
				mobileNumber: mNum,
				emailAddr: emailAddr,
				password: password,
			})
			.then(
				(response) => {
					const bigbox = document.getElementById("bigbox");
					bigbox.innerHTML = `Course created successfully`;
				},
				(error) => {
					const bigbox = document.getElementById("bigbox");
					bigbox.innerHTML = `Error - course exists`;
				}
			);
	}
	function createPassengerForm() {
		return (
			<form>
				<h1>Create Passenger Form</h1>
				<label for="fname">First name:</label>
				<br></br>
				<input type="text" id="fname" name="fname"></input>
				<br></br>
				<label for="lname">Last name:</label>
				<br></br>
				<input type="text" id="lname" name="lname"></input>
				<br></br>
				<label for="mNum">Mobile Number:</label>
				<br></br>
				<input type="text" id="mNum" name="mNum"></input>
				<br></br>
				<label for="emailAddr">Email Address:</label>
				<br></br>
				<input type="text" id="emailAddr" name="emailAddr"></input>
				<br></br>
				<label for="password">Password:</label>
				<br></br>
				<input type="text" id="password" name="password"></input>
				<br></br>
				<Button text="Create Account" handleClick={createPassengerAccount}></Button>
			</form>
		);
	}

	function showCreateDriverForm() {
		return (
			<>
				<h1>Create Passenger Form</h1>
				<Button text="Log Out" handleClick={myFunction}></Button>
			</>
		);
	}

	function driverMenu(d) {
		return (
			<>
				<h1>Driver Menu</h1>
				<Button text="View Trips" handleClick={myFunction}></Button>
				<Button text="Update Account Info" handleClick={myFunction}></Button>
				<Button text="Log Out" handleClick={myFunction}></Button>
			</>
		);
	}

	function showPassengerMenu(p) {
		setMainContent(passengerMenu(p));
	}

	function showDriverMenu(d) {
		setMainContent(driverMenu(d));
	}

	function showCreatePassengerForm(d) {
		setMainContent(createPassengerForm(d));
	}
	return mainContent;
}

export default App;
