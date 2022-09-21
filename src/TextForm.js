import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const changeUpperCase = () => {
    setText(document.getElementById("myBox").value.toUpperCase());
    console.log(
      document.getElementById("myBox").value.toUpperCase(),
      "this is the value"
    );
    props.showAlert("Converted to Upper Case.", "Success! ");
    // console.log("onclick happened: ");
  };
  const changeLowerCase = () => {
    setText(document.getElementById("myBox").value.toLowerCase());
    props.showAlert("Converted to Lower Case.", "Success! ");
    // console.log("onclick happened: ");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("copied to clipboard.", "Success! ");
  };
  const clearText = () => {
    props.showAlert("Text is cleared.", "Success! ");
    setText("");
  };
  const handleExtraSpace = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed.", "Success! ");
  };

  return (
    <>
      <div className="container my-3">
        <div className="mb-3">
          <h2 style={props.style}>{props.textArea}</h2>
          <textarea
            placeholder="Enter Some Text Here..."
            value={text}
            className="form-control"
            id="myBox"
            rows="8"
            onChange={handleChange}
            style={props.textStyle}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          onClick={changeUpperCase}
          className={`btn btn-${props.btn} mx-2 my-1`}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          onClick={changeLowerCase}
          className={`btn btn-${props.btn} mx-2 my-1`}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleCopy}
          className={`btn btn-${props.btn} mx-2 my-1`}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleExtraSpace}
          className={`btn btn-${props.btn} mx-2 my-1`}
        >
          Remove Space
        </button>
        <button
          disabled={text.length === 0}
          onClick={clearText}
          className={`btn btn-${props.btn} mx-2 my-1`}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={props.style}>
        <h1>your text summery</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes take to read this
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text.toLocaleLowerCase() : "Enter Some Text"}</p>
      </div>
    </>
  );
}
