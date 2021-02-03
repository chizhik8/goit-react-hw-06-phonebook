import React from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

export default function App() {
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />

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
