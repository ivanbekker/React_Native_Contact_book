import { SAVE_CONTACT } from './Actions';

export const state = [
  {
    firstName: 'test',
    lastName: 'testLastName',
    phone: 123456,
  }, {
    firstName: 'test',
    lastName: "testLastName",
    phone: 123456,
  }
];

const ContactReducer = (state = state, action) => {
  switch (action.type) {
    case SAVE_CONTACT: {
      return {
        ...state,
        data: action,
      };
    }
    default: {
      return state;
    }
  }
};

export default ContactReducer;
