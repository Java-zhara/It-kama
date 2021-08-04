import React from "react";
import { connect } from "react-redux";
import {
  sendMessageCreators,
  updateNewMessageBodyCreators,
} from "../../redux/dialogs-reduсer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreators(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreators());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
