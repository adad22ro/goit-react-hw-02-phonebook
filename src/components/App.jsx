import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = name => {
    const newContact = {
      id: nanoid(),
      name,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
    }));
  };

  render() {
    return (
      <div>
        <ContactForm onAddContact={this.addContact} />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
