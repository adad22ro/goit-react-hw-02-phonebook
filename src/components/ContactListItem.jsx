import React, { Component } from 'react';

class ContactListItem extends Component {
  render() {
    return <li>{this.props.name}</li>;
  }
}

export default ContactListItem;
