import { SAVE_CONTACT, ADD_CONTACT } from './Actions';

export const initialState = {
  contacts:[
  {
    id: 1,
    firstName: 'tes1t',
    lastName: 'testLastName1',
    phone: '123456',
  }, {
    id: 2,
    firstName: 'test2',
    lastName: "testLastName2",
    phone: '234567',
  }, {
    id: 3,
    firstName: 'test3',
    lastName: "testLastName3",
    phone: '345678',
  }, {
    id: 4,
    firstName: 'test4',
    lastName: "testLastName4",
    phone: '456789',
  }]
};

const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CONTACT: {
      state.contacts.splice(state.contacts.findIndex(c => c.id === action.payload.id), 1);
      return {
        ...state,
        contacts: state.contacts.concat([action.payload]),
      };
    }
    case ADD_CONTACT: {
      return {
        ...state,
        contacts: state.contacts.concat([action.payload]),
      };
    }
    default: {
      return state;
    }
  }
};

export default ContactReducer;
