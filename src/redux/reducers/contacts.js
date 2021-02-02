import { combineReducers } from 'redux';
import actionTypes from '../constants/contactsActionTypes';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      //   return [...state, payload.contact];
      return state.find(
        contact =>
          contact.name.toLowerCase() === payload.contact.name.toLowerCase(),
      )
        ? (alert(`${payload.contact.name} is already in contacts `), [...state])
        : [...state, payload.contact];

    case actionTypes.REMOVE:
      return state.filter(contact => contact.id !== payload.contactId);

    default:
      return state;
  }
};
const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.FILTER:
      return payload.filter;

    default:
      return state;
  }
};

export default combineReducers({ items, filter });

//   componentDidMount() {
//     if (localStorage.getItem('contacts') !== null) {
//       this.setState({
//         contacts: JSON.parse(localStorage.getItem('contacts')),
//       });
//     }
//   }

//   componentDidUpdate(prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }
