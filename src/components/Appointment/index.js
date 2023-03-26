import React from "react";
import "./styles.scss"
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import { useVisualMode } from "hooks/useVisualMode";

//mode constants
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

export default function Appointment(props) {

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
      <Header time={props.time}> </Header>
      {/* {(props.interview) ?
        <Show interviewer={props.interview.interviewer.name} student={props.interview.student} /> :
        <Empty />
      } */}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE) }/>}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {/* will add to loater as per instructions */}
      {mode === CREATE && <Form />} 

    </article>


  )
}
