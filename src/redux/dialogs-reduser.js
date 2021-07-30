const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  dialogs: [
    { id: '1', name: 'Java' },
    { id: '2', name: 'Zhara' },
    { id: '3', name: 'Shut' },
  ],

  messages: [
    { id: '1', message: 'Hi' },
    { id: '2', message: 'Hello' },
  ],
  newMessageBody: ''
}

export const dialogsReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };
    case SEND_MESSAGE: 
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: '3', message: body }]
      };    
    default: return state;
  }
}

export const sendMessageCreators = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreators = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
