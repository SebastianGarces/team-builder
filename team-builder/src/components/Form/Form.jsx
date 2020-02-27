import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Form = ({ addMember, memberToEdit }) => {
	const [member, setMember] = useState({ name: "", role: "", email: "" });

	const handleChanges = event => {
		setMember({ ...member, [event.target.name]: event.target.value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		addMember(member);
	};

	// console.log(member);

	useEffect(() => {
		setMember(memberToEdit);
	}, [memberToEdit]);

	return (
		<StyledForm onSubmit={handleSubmit}>
			<label htmlFor="name">Name</label>
			<input
				type="text"
				name="name"
				id="name"
				placeholder="what's your name?"
				value={member.name}
				onChange={handleChanges}
			/>
			<label htmlFor="role">Role</label>
			<input
				type="text"
				name="role"
				id="role"
				placeholder="what's your role?"
				value={member.role}
				onChange={handleChanges}
			/>
			<label htmlFor="email">Email</label>
			<input
				type="email"
				name="email"
				id="email"
				placeholder="what's your email?"
				value={member.email}
				onChange={handleChanges}
			/>
			<Button type="submit">Add</Button>
		</StyledForm>
	);
};

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	border: 1px solid #333;
	padding: 1rem 2rem;
	min-width: 500px;

	input {
		padding: 0.5rem;
		border: 1px solid #333;
		min-width: 200px;
		margin-bottom: 1rem;
	}
`;

export const Button = styled.button`
	margin-top: 1rem;
	border: none;
	padding: 0.5rem 1rem;
`;

export default Form;
