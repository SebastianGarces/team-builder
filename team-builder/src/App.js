import React, { useState } from "react";
import styled from "styled-components";

import "./App.css";

import Form, { Button } from "./components/Form/Form";

const MEMBERS_DATA = [
	{
		name: "Sebastian Garces",
		role: "Front End Engineer",
		email: "gsgarces1@gmail.com"
	},
	{
		name: "John Doe",
		role: "Back End Engineer",
		email: "johndoe@gmail.com"
	},
	{
		name: "Marie Doe",
		role: "UX Designer",
		email: "mariedoe@gmail.com"
	},
	{
		name: "Tim Doe",
		role: "CEO",
		email: "theboss@gmail.com"
	}
];

function App() {
	const [members, setMembers] = useState(MEMBERS_DATA);
	const [memberToEdit, setMemberToEdit] = useState({});

	const addMember = member => {
		setMembers([...members, member]);
	};

	const handleEdit = member => {
		// console.log(member);
		setMemberToEdit(member);
	};

	console.log("membertoedit", memberToEdit);

	return (
		<AppContainer className="App">
			<Form addMember={addMember} memberToEdit={memberToEdit} />
			<div className="card-container">
				{members.map((member, index) => {
					return (
						<Card key={index}>
							<h2>{member.name}</h2>
							<h4>{`Role: ${member.role}`}</h4>
							<p>{`Email: ${member.email}`}</p>
							<Button onClick={() => handleEdit(member)}>
								Edit
							</Button>
						</Card>
					);
				})}
			</div>
		</AppContainer>
	);
}

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;

	.card-container {
		display: flex;
		flex-wrap: wrap;
	}
`;

const Card = styled.div`
	border: 1px solid #333;
	padding: 3rem;
	margin: 3rem;
`;

export default App;
