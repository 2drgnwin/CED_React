import React, { Component } from 'react';

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              this.props.onChangePage();
            }}
          >
            {this.props.title}
          </a>
        </h1>
        {this.props.sub}
        {/* 상위 compo 값 전달 → props */}
      </header>
    );
  }
}

export default Subject;
