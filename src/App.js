import React from "react";
import "./App.css";
import Note from "./Note.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notText: "",
      notes: []
    };
  }
  updateNotText(notText) {
    this.setState({ notText: notText.target.value });
  }

  handleKeyPress = event => {
    if (event.key === "Enter") {
      {
        return;
      }
      let notesArr = this.state.notText;
      notesArr.push(this.state.notText);
      this.setState({ notText: "" });
    }
  };
  addNote = () => {
    if (this.state.notText === "") {
      return;
    }
    let notesArr = this.state.notes;

    notesArr.push(this.state.notText);
    this.setState({ notText: "" });
    this.textInput.focus();
  };

  deleteNote = index => {
    let notesArr = this.state.notes;
    notesArr.splice(index, 1);
    this.setState({ notes: notesArr });
  };

  render() {
    let notes = this.state.notes.map((val, key) => {
      return (
        <Note key={key} text={val} deleteMethod={() => this.deleteNote(key)} />
      );
    });
    return (
      <div className="container">
        <div className="header">React ToDo Application</div>
        {notes}
        <div className="btn" onClick={this.addNote.bind(this)}>
          +
        </div>
        <input
          className="textInput"
          type="text"
          ref={input => {
            this.textInput = input;
          }}
          value={this.state.notText}
          onChange={notText => this.updateNotText(notText)}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
      </div>
    );
  }
}
export default App;
