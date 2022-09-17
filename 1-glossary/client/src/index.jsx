import React from 'react';
import reactDom from 'react-dom';
import Word_list from './components/word_list.jsx';
import Word_Form from './components/word_form.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words:[
         {
        word: 'Car',
        definition: 'A four-wheeled road vehicle that is powered by an engine and is able to carry a small number of people.',
        category: 'noun',
        syllableCount: 1,
        isWord: true,
      }
    ],
      currentWord: {},
      currentCat: {},
      currentDef:{},
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.editWord = this.editWord.bind(this);
  }

  componentDidMount() {
    this.getWords();
  }

  handleInputChange(e) {
    if(e.target.name === 'word') {
      this.setState({currentWord: e.target.value})
    }
    if(e.target.name === 'cat') {
      this.setState({currentCat: e.target.value})
    }
    if(e.target.name === 'def') {
      this.setState({currentDef: e.target.value})
    }
  }

  getWords() {
    return $.ajax({
      url: '/test',
      type: 'GET',
      success: function(res){
        console.log('This Worked!!')
      }
    })
    .then((results) => {
      this.setState({words: results});
    })
  }

  addWord() {
    return $.ajax({
      url: '/add',
      type: 'POST',
      data: `${this.state.currentWord},${this.state.currentCat},${this.state.currentDef}`,
      success: function(res) {
        alert(res);
      }
    })
    .then((results) => {
      this.getWords();
    })
  }

  editWord(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <>
      <div>
        <Word_list glossWords={this.state.words} onClick={(e) => this.editWord(e)}/>
      </div>
      <div>
        <Word_Form onChange={(e) => this.handleInputChange(e)} onClick={(e) => this.addWord()}/>
      </div>
      </>
    )
  }
}

reactDom.render(<App />, document.getElementById('root'))
