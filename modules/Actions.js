export const SAVE_CONTACT = 'CONTACT_BOOK/SAVE_CONTACT'
export const ADD_CONTACT = 'CONTACT_BOOK/ADD_CONTACT'

export const saveContact = payload => ({
  type: SAVE_CONTACT,
  payload,
});

export const addContact = payload => ({
  type: ADD_CONTACT,
  payload,
});
