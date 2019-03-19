import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = { isPanelVisible: false, }
  refPanel =  React.createRef()
  clickHandle = () => {
    this.setState({ isPanelVisible: ! this.state.isPanelVisible })
  }
  panelBlurHandle = () => { this.setState({ isPanelVisible: false }) }
  showPanel(){
    return this.state.isPanelVisible ?
      <Panle
      panelref={ this.refPanel }
      onPanelBlur={ this.panelBlurHandle.bind(this) }
      >
        <h1>GOOD</h1> 
      </Panle>
      : "" 
  }
  
  /**@todo REMOVE!!~! */
  componentDidMount(){
    if(this.state.isPanelVisible)
      this.refPanel.current.focus();
  }
  render() {
    return (
      <div className="App">
        <button
        disabled = { this.state.isPanelVisible }
        className="btn-notify"
        onClick={ this.clickHandle }
        >
          <i className="fas fa-bell"></i>
        </button>
        { this.showPanel() }

      </div>
    );
  }
}

export default App;
class Panle extends Component{
  componentDidMount(){
    this.props.panelref.current.focus();
  }
  render(){
    return (
      <div 
      tabIndex="123"
      className="panel-notify"
      // style={{width:100, height:100}}
      onBlur={ this.props.onPanelBlur }
      ref={ this.props.panelref }> 
        { this.props.children }
      </div>
    )
  
  }
}