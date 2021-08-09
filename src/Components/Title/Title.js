import React, { Component } from "react"
import "./Title.css"

class Title extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "React Stop Watch Project",
      isInput: false,
    }
  }

  editHandler() {
    this.setState({
      ...this.state,
      isInput: true,
    })
  }

  inputChange(event) {
    this.setState({
      ...this.state,
      title: event.target.value,
    })
  }

  keyPressHandler(event) {
    if (event.key === "Enter") {
      this.setState({
        ...this.state,
        isInput: false,
      })
    }
  }

  blurHandler(event) {
    this.setState({
      ...this.state,
      isInput: false,
    })
  }

  render() {
    let output = null

    if (this.state.isInput) {
      output = (
        <div className="Title">
          <input
            className="form-control my-2"
            onChange={event => this.inputChange(event)}
            onKeyPress={event => this.keyPressHandler(event)}
            onBlur={event => this.blurHandler(event)}
            type="text"
            value={this.state.title}
          />
        </div>
      )
    } else {
      output = (
        <div className="d-flex Title">
          <h1 className="display-4 px-2">{this.state.title}</h1>
          <span
            onClick={() => this.editHandler()}
            className="ml-auto edit-icon btn btn-sm btn-warning"
          >
            Edit
          </span>
        </div>
      )
    }

    return <div>{output}</div>
  }
}

export default Title
