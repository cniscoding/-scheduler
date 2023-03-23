import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {

  let interviewClass = classNames("interviewers__item", {
    "interviewers__item--selected" : props.selected
  });

  return (
    <li className={interviewClass} onClick={()=>{props.setInterviewer(props.id)}}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.name}
    </li>
    )
};

