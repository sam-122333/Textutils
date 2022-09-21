import React from "react";

function Alert(props) {
  return (
    <div style={{height:"50px"}}>
      {props.alertMsg && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>{props.alertMsg.type}</strong> {props.alertMsg.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;

// entering first commit here
