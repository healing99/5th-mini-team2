import React, { Component } from 'react';

class CreateLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lecture: '',
      subject: '',
      time: '',
    };
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.addData().then((response) => {
      console.log(response.data);
    });
  };
  handleValueChange = (event) => {
    let nextState = {};
    nextState[e.target.name] = event.target.value;
    this.setState(nextState);
  };

  addData() {
    const formData = new formData();
    formData.append('lecture', this.state.lecture);
    formData.append('subject', this.state.subject);
    formData.append('time', this.state.time);
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <p>
          클래스명 입력
          <input
            type="text"
            name="lecture"
            value={this.state.lecture}
            placeholder="클래스명"
            onChange={this.handleValueChange}></input>
        </p>
        <p>
          종목 입력
          <input
            type="text"
            name="subject"
            value={this.state.subject}
            placeholder="종목"
            onChange={this.handleValueChange}></input>
        </p>
        <p>
          시간 입력
          <input
            type="text"
            name="time"
            value={this.state.time}
            placeholder="제한시간"
            onChange={this.handleValueChange}></input>
        </p>
        <button type="submit">링크생성</button>
      </form>
    );
  }
}
export default CreateLink;
