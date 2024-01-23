import React, { Component } from 'react';
import ContactListItem from './ContactListItem';

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(contact => (
          <ContactListItem key={contact.id} name={contact.name} />
        ))}
      </ul>
    );
  }
}

export default ContactList;
