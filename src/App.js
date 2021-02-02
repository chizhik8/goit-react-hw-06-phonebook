import React, { Component } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
// import { Alert } from './components/Alert/Alert';
import ContactList from './components/ContactList/ContactList';
import { v4 as uuidv4 } from 'uuid';
import Filter from './components/Filter/Filter';

export class App extends Component {
  componentDidMount() {
    if (localStorage.getItem('contacts') !== null) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts')),
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <div>
        <ContactForm />
        <Filter />
        <ContactList />

        {/* {this.state.alert && <Alert />} */}

        {/* <ContactForm onAddContacts={this.addContacts} /> */}

        {/* {this.state.contacts.length ? (
          <Filter onInputFilter={this.addFilter} />
        ) : (
          <h2>Contact list is empty. Please add contact.</h2>
        )} */}

        {/* {this.state.filter.length ? (
          <ContactList
            contacts={this.taskFilter()}
            onRemoveContact={this.removeContact}
          />
        ) : (
          <ContactList
            contacts={this.state.contacts}
            onRemoveContact={this.removeContact}
          />
        )} */}
      </div>
    );
  }
}

export default App;
