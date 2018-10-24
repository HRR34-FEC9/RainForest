import React from 'react';
import ReactDOM from 'react-dom';

import Item from './components/Item.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      text: 'HelloW orld'
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/products')
      .then(body => body.json())
      .then(results => this.setState({ data: results}))
      .catch((err) => {if(err) throw err});
  }

  handleMouseEnter(e) {
    this.setState({ text: 'Hello World'});
  }

  handleMouseLeave(e) {
    this.setState({ text: 'HelloW orld'});
  }
  
  render() {
    return (
      <div>
        <div className='item-container' onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)}>
          <button className='item-container-left-arrow'>{'<'}</button>
          {
            this.state.data.map(product => 
              <Item data={product} key={product.id}/>  
            )
          }
          <button className='item-container-right-arrow'>{'>'}</button>
        </div>
        { this.state.text }
      </div>
    )
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));