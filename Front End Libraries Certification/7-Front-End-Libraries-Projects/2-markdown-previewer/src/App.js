import React, { Component } from 'react';
import './App.css';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

let marked = require('marked');

marked.setOptions({
  breaks: true,
});

class App extends Component {
  state={
    markdown: placeholder
  }

  updateEditor = (markdown) => {
    this.setState({markdown})
  }

  render() {
    let {markdown} = this.state;

    return (
      <div className="App container">
        <br />
        <div className="card-deck mb-4 text-center">
          <div className="card mb-1 box-shadow bg-light">
            <div className="card-header">
              <h1>Markdown</h1>
            </div>
            <div className="card-body">
              <FormGroup controlId="formControlIsTextArea editor">
                <FormControl componentClass="textarea" defaultValue={placeholder} onChange={(event)=> this.updateEditor(event.target.value)}></FormControl>
              </FormGroup>
            </div>
          </div>
          <div className="card mb-3 box-shadow bg-light">
            <div className="card-header">
              <h1>Preview</h1>
            </div>
            <div className="card-body">
              <div id="preview" className="results" dangerouslySetInnerHTML={{__html: marked(markdown)}}>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const placeholder = 
`# Welcome to my React Markdown Previewer!
## This is a sub-heading
### And this is a level 3 heading
#### And so on...
  
Heres some code, \`<div>Markdown is cool 😎</div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Some Wild Header  | Some Crazy Header  | Another Header?
------------ | ------------- | ------------- 
Your content | can be here,  | or here....
And here.    | Okay.         | I think we get it.
  
  
And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
      - That look like this.
 
 
1. And there are numbererd lists too.
2. Use just 1s if you want! 
3. But the list goes on...
3.1 And on
3.2 And on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`   

export default App;
