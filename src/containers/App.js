import React, {Component, Fragment} from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";

class App extends Component {
    state = {
        persons: [
            {id: 'asfa1', name: 'Max', age: 28},
            {id: 'asfdw', name: 'Manu', age: 29},
            {id: 'asf4d', name: 'Stephanie', age: 26}
        ],
        showPersons: false,
        showCockpit: true
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons})
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    }

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}
                />
            );

        }

        return (
            <Fragment>
                <button onClick={() => {
                    this.setState({showCockpit: !this.state.showCockpit})
                }}>
                    {this.state.showCockpit ? 'Remove' : 'Show'} Cockpit
                </button>
                {this.state.showCockpit ? (
                    <Cockpit
                        showPersons={this.state.showPersons}
                        personsLengt={this.state.persons.length}
                        clicked={this.togglePersonHandler}
                    />
                ) : null}
                {persons}
            </Fragment>
        );
    }
}

export default withClass(App, classes.App);
