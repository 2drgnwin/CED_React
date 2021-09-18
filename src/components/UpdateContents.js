import React, { Component } from 'react';

class UpdateContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc,
    };
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }
  inputFormHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // []안에 내용은 js 신규 문법임
  };

  render() {
    return (
      <article>
        <h2>Update</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc
            );
            //e.target.title.value, e.target.desc.value);
            //debugger → e Object → title&desc(name) > value 값 확인
          }}
        >
          <input type="hidden" name="id" value={this.state.id}></input>
          <p>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.inputFormHandler}
              // props:read only → state :바뀔근거는 없음
              // 위에 state를 바꿔야 함 → onChange fn
              // onChange={function (e) {
              //   this.setState({ title: e.target.value });
              // }.bind(this)}
            ></input>
          </p>
          <p>
            <textarea
              name="desc"
              placeholder="description"
              value={this.state.desc}
              onChange={this.inputFormHandler}
              //props → state → form data와 동기화
            ></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
        {/* form tag안에 submit 있으믄 form 의 속성 onsubmit 실행하게하는 고유기능*/}
      </article>
    );
  }
}

export default UpdateContents;
