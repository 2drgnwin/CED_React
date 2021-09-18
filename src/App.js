import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContents from './components/ReadContents';
import CreateContents from './components/CreateContents';
import UpdateContents from './components/UpdateContents';
import Control from './components/Control';
import './components/Contents';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'create',
      selected_contents_id: 2,
      subject: { title: 'WEB', sub: 'World Wide Web!!' },
      welcome: { title: 'welcome', sub: 'Hello, React!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'Javascript', desc: 'JS is for interactive' },
      ],
    };
    this.max_content_id = 3;
    // UI에 영향을 주는게 아닌 정보기에 state 뺌
  }

  getReadContents() {
    var i = 0;
    //for랑 filter로 바꿔보시오
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_contents_id) {
        // _title = data.title;
        // _desc = data.desc;
        return data;
        // break;
      }
      i = i + 1;
    }
  }

  getContents() {
    var _title,
      _desc,
      _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.sub;
      _article = <ReadContents title={_title} desc={_desc}></ReadContents>;
    } else if (this.state.mode === 'read') {
      var data = this.getReadContents();
      _article = (
        <ReadContents title={data.title} desc={data.desc}></ReadContents>
      );
    } else if (this.state.mode === 'create') {
      _article = (
        <CreateContents
          onSubmit={function (_title, _desc) {
            console.log(_title, _desc);
            this.max_content_id += 1;
            // this.state.contents.push({
            //   id: this.max_content_id,
            //   title: _title,
            //   desc: _desc,
            // });
            let _contents = Array.from(this.state.contents);
            _contents.push({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            }); // Object 복제는 Object.assign({}, 이전객체)
            // let _contents = this.state.contents.concat({
            //   id: this.max_content_id,
            //   title: _title,
            //   desc: _desc,
            // });
            this.setState({
              contents: _contents,
            });
          }.bind(this)}
        ></CreateContents>
      );
    } else if (this.state.mode === 'update') {
      var _contents = this.getReadContents();
      _article = (
        <UpdateContents
          data={_contents}
          onSubmit={function (_id, _title, _desc) {
            var _contents = Array.from(this.state.contents);
            var i = 0;
            while (i < _contents.length) {
              if (_contents[i].id === _id) {
                console.log(_id);
                _contents[i] = { id: _id, title: _title, desc: _desc };
                break;
              }
              i = i + 1;
            }
            this.setState({
              contents: _contents,
            });
          }.bind(this)}
        ></UpdateContents>
      );
    }
    return _article;
  }

  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            //하위 compo에서 state를 바꾸고 싶음 → evnet fn 호출
            this.setState({
              mode: 'welcome',
            });
          }.bind(this)}
        ></Subject>
        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: 'read',
              selected_contents_id: Number(id),
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        {this.getContents()}
        <Control
          onChangeMode={function (_mode) {
            if (_mode === 'delete') {
              if (window.confirm('Are you sure?')) {
                var _contents = Array.from(this.state.contents);
                var i = 0;
                while (i < _contents.length) {
                  if (_contents[i].id === this.state.selected_contents_id) {
                    _contents.splice(i, 1);
                    break;
                  }
                  i = i + 1;
                }
                this.setState({
                  mode: 'welcome',
                  contents: _contents,
                });
                alert('Finished');
              }
            } else {
              this.setState({
                mode: _mode,
              });
            }
          }.bind(this)}
        ></Control>
      </div>
    );
  }
}
export default App;
