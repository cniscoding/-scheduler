import React from "react";
import "./styles.scss"
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";
import { useVisualMode } from "hooks/useVisualMode";

//mode constants
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const CANCEL = "CANCEL";
const DELETE = "DELETE";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";


export default function Appointment(props) {
  function edit() {
    transition(EDIT)
  }

  function deleteAppointment() {
    transition(DELETE, true)
    props.cancelInterview(props.id)
      .then(() => {
        transition(EMPTY)
      })
      .catch(() => {
        transition(ERROR_DELETE, true)
      })
  }

  function cancelConfirmation() {
    transition(CANCEL)
  }
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    // console.log('props', props)
    // console.log('interview', interview)

    transition(SAVING)
    props.bookInterview(props.id, interview)
      .then(() => {
        return transition(SHOW)
      })
      .catch((res) => {
        transition(ERROR_SAVE, true)
      })
  }

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
      <Header time={props.time}> </Header>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={cancelConfirmation}
          onEdit={edit}

        />
      )}

      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          // onAdd={}
          onCancel={back}
          onSave={save}
        />)
      }
      {mode === SAVING && <Status text="Saving" />}
      {mode === CANCEL && <Confirm
        message="Are you sure you would like to delete"
        onConfirm={deleteAppointment}
        onCancel={back}
      />}
      {mode === DELETE && <Status text="Deleting" />}
      {mode === EDIT && <Form
        student={props.interview.student}
        interviewer={props.interview.interviewer['id']}
        interviewers={props.interviewers}
        onCancel={back}
        onSave={save}
      />}
      {mode === ERROR_DELETE && <Error
        text='error deleting'
        onClose={back}

      />}

      {mode === ERROR_SAVE && < Error
        text='error saving'
        onClose={back}

      />}
    </article>
  )
}
