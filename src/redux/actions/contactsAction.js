import { v4 as uuidv4 } from 'uuid';
import actionTypes from '../constants/contactsActionTypes';

const addContacts = (name, number) => ({
  type: actionTypes.ADD,
  payload: { contact: { id: uuidv4(), name, number } },
});

const removeContact = contactId => ({
  type: actionTypes.REMOVE,
  payload: { contactId },
});

const addFilter = filter => ({
  type: actionTypes.FILTER,
  payload: { filter },
});

export default { addContacts, removeContact, addFilter };
