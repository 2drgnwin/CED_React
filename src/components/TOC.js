import React, { Component } from 'react';

class TOC extends Component {
  shouldComponentUpdate(newProps, newState) {
    if (newProps.data === this.props.data) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    let lists = [];
    let data = this.props.data;
    let i = 0; // 없으면 왜 안됨
    for (i = 0; i < data.length; i++) {
      lists.push(
        <li>
          {/* <a
            href={'/content/' + data[i].id}
            onClick={function (id, e) {
              //상위 compo에 값 변경 → 상위 compo에 fu 심고 → click시 실행 →
              e.preventDefault();
              this.props.onChangePage(id);
            }.bind(this, data[i].id)}
            //bind의 data[i].id 인자가 function id 인자로 꽂힘 and you can use it
          >
            {data[i].title}
          </a> */}
          <a
            data-id={data[i].id}
            href={'/content/' + data[i].id}
            onClick={(e) => {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }}
          >
            {data[i].title}
          </a>
        </li>
      );
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
