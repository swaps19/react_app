import React, { Component } from 'react';
import './HelloWorldList.css';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';
import AddLanguage from './AddLanguage';

class HelloWorldList extends Component {
    render() {
        return (
            <div className="HelloWorldList">
                <AddGreeter addGreeting = {this.addGreeting} />
                <AddLanguage addLanguage = {this.addLanguage} />
                { this.renderGreetings() }
            </div>
        );
    }

    constructor(props) {
        super(props);
        this.state = { greetings: ['Jim', 'Sally', 'Swaps'] };
        this.addGreeting = this.addGreeting.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }

    renderGreetings() {
        return this.state.greetings.map(name => (
            <HelloWorld
                key = {name}
                name = {name}
                removeGreeting = {this.removeGreeting}
            />
        ));
    }

    addGreeting(newName) {
        this.setState({ greetings: [...this.state.greetings, newName] });
    }

    removeGreeting(removeName) {
        const filteredGreetings = this.state.greetings.filter(name => {
            return name !== removeName;
        });
        this.setState({ greetings: filteredGreetings });
    }

    addLanguage(newLanguage) {
        // TODO add newLanguage to LanguageList.js
    }
}
export default HelloWorldList;
