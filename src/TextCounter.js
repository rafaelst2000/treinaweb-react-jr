import React, { Component } from 'react';

class TextCounter extends Component {
  static defaultProps = {
    limit: 15
  }
      
  constructor(props){
    super(props)
    this.state ={
      total: 0,
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const element = event.target,
    text = element.value

    if(text.length <= this.props.limit){
      this.setState({
        total: text.length,
        text
      })
    }
  }

  render(){
   const {state, props} = this

    return(
      <div>
        <h1>Meu Contador</h1>
        <textarea value={state.text} onChange={this.handleChange} />
        <div>
          <strong>Total:</strong> { state.total } / { props.limit }
        </div>
      </div>
    )
  }
}

export default TextCounter