import React, { Component } from 'react';
import Person from './Person/Person';
import Radium from 'radium';
import './App.css';

class App extends Component {
	state={
		persons: [
			{id: "ag123bhcd" , name: 'mridul', age: 21},
			{id: "aghcd" , name: 'anmol', age: 22},
			{id: "123bhcd" , name: 'abhi', age: 23}
		],
		showPersona: false
	}


	changeHandler=(event,id)=>{
		const personIndex = this.state.persons.findIndex((person) => person.id === id );
		const person = {...this.state.persons[personIndex]};
		person.name = event.target.value;
		const persons = [...this.state.persons];
		persons[personIndex] = person;
		this.setState({persons: persons}); 
	}

	deleteHandler=(index)=>{
		const person=[...this.state.persons];
		person.splice(index,1);
		this.setState({persons:person});
	}

	togglePersona=()=>{
		this.setState({
			showPersona: !this.state.showPersona
		});
	}
	render() {
		const button = {
			backgroundColor: "green",
			color: "#fff",
			padding: "10px",
			fontSize: "1rem",
			border: "1px solid #eee",
			cursor: "pointer",
			":hover" : {
				backgroundColor: "white",
				color: "black"
			}
		}

		let persons=null;
		if(this.state.showPersona){
			persons=(
					<div>
						{this.state.persons.map((person,index) => <Person data={person} changed={(event) => this.changeHandler(event,person.id)} delete={() => this.deleteHandler(index)} key={person.id}/>)}
					</div> 
			);
			button.backgroundColor="red";
			button[":hover"] = {
				color: "black"
			}
		}

		let classes = [];

		if(this.state.persons.length <= 2)
			classes.push('red');

		if(this.state.persons.length <= 1)
			classes.push('bold');

		return (
			<div className="App">
				<h1 className={classes.join(' ')}>Persona</h1>
				<button style={button} onClick={this.togglePersona}>Reset</button>
				{persons}
			</div>
		);
	}
}

export default Radium(App);
