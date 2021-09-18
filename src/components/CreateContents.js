import React, { Component } from 'react';

class CreateContents extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
        <form
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
            //debugger → e Object → title&desc(name) > value 값 확인
          }.bind(this)}
        >
          <p>
            <input type="text" name="title" placeholder="title"></input>
          </p>
          <p>
            <textarea name="desc" placeholder="description"></textarea>
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

export default CreateContents;
