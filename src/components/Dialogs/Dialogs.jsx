import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let messagesElements = state.messages.map((message) => (
    <Message message={message.message} key={message.id} id={message.id} />
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>
        <div>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const maxLength10 = maxLengthCreator(10);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newMessageBody"
          placeholder="Enter yuor massage"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

export const AddMessageFormRedux = reduxForm({
  form: "dialogAddMessageForm",
})(AddMessageForm);

export default Dialogs;
