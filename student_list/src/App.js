import logo from "./logo.svg";
import "./App.css";
import React from "react";
import StudentList from "./components/StudentList";
import Alert from "./components/Alert";

const studentList = [
	{
		id: 1,
		name: "Nguyễn Văn A",
		age: 30,
		address: "Hà Nội",
	},
	{
		id: 2,
		name: "Nguyễn Văn B",
		age: 20,
		address: "Hà Nội",
	},
];

function App() {
	return (
		<>
			<Alert />
			<StudentList list={studentList} />
		</>
	);
}

export default App;
