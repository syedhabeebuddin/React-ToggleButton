class ToggleButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {toggle : true};
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    this.setState(state => (
      {toggle: !state.toggle}
    ));
  }
  
  render(){
    return(
      <button onClick={this.handleClick}>
       {this.state.toggle ? 'ON':'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <ToggleButton />, mountNode
);
