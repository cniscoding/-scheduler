import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "./InterviewerList.scss"

export default function InterviewerList(props) {
  const interviewList = props.interviewers.map((interview) => {
    return (
      <InterviewerListItem
      key={interview.id}
      name ={interview.name}
      avatar={interview.avatar}
      selected={interview.id === props.value}
      setInterviewer={() => {props.onChange(interview.id)}  }
        />
    )
  })
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewList}</ul>
    </section>
  )
};
    