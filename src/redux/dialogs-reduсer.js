const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    { id: "1", name: "Java" },
    { id: "2", name: "Zhara" },
    { id: "3", name: "Shut" },
  ],

  messages: [
    { id: "1", message: "Hi" },
    { id: "2", message: "Hello" },
  ],
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: "3", message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreators = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});
