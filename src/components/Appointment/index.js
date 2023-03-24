import React from "react";
import "./styles.scss"
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";

export default function Appointment(props) {
  // const show = (props.interview) ? Show : Empty;

  return (
    <article className="appointment">
      <Header time={props.time}> </Header>
      {(props.interview) ?
        <Show interviewer={props.interview.interviewer.name} student={props.interview.student} /> :
        <Empty />
      }


    </article>


  )
}
