import React from "react";

function Event(props) {
  console.log(props);
  return (
    <div className="Event">
      <figure>
        <img src={props.event_image} alt="Dog Walking" />
        <p>{props.event_title} </p>
        <p>Date: {props.event_date} </p>
        <p>Address: {props.event_address}</p>
        <figcaption>{props.event_description}</figcaption>
      </figure>
    </div>
  );
}

export default Event;
