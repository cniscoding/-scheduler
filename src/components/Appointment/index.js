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

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    console.log('props', props)
    console.log('interview', interview)
    props.bookInterview(props.id, interview)
    //CHANGE TO SHOW
    .then (()=>{
      transition(SHOW)
    })
    .catch((res) =>{
      console.log(res)
    }
    )
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
    </article>
  )
}
