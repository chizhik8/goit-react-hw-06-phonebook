import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import contactsAction from '../../redux/actions/contactsAction';

import './ContactList.css';

function ContactList({ contacts, onRemoveContact }) {
  return (
    <div>
      <TransitionGroup component="ul">
        {contacts.map(contact => (
          <CSSTransition key={contact.id} timeout={250} classNames="contacts">
            <li>
              {' '}
              {contact.name}: {contact.number}
              <button type="button" onClick={() => onRemoveContact(contact.id)}>
                x
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

const mapStateToProps = state => ({
  contacts: state.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase()),
  ),
});

const mapDispatchToProps = {
  onRemoveContact: contactsAction.removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// componentDidMount() {
//   if (localStorage.getItem('contacts') !== null) {
//     this.setState({
//       contacts: JSON.parse(localStorage.getItem('contacts')),
//     });
//   }
// }

// componentDidUpdate(prevState) {
//   if (prevState.contacts !== this.state.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
// }
