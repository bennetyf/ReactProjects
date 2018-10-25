import React from 'react';
import {connect} from "react-redux";
import {addTodo} from "../ListRedux";

// Presentational Component
class AddItem extends React.Component {
  constructor(props) {
    super(props);
    // this.refInput = React.createRef();
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input className="new-todo" onChange={this.onInputChange} value={this.state.value}/>
          <button className="add-btn" type="submit"> Add </button>
        </form>
      </div>
    )
  }

  onInputChange(event){
    this.setState({value: event.target.value});
  }

  onSubmit(event){
    event.preventDefault();
    // const input = this.refInput.current;
    const input = this.state.value;
    if (!input.trim()) { //No input values in the form, the return directly.
      return;
    }
    this.props.addItem(input);
    this.setState({value: ''});
  }
}

// Wrap it up with a container

// Add Item component does not need to see the store content.
// It just emits an action
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (text) => {
      dispatch(addTodo(text));
    }
  }
};

export default connect(null, mapDispatchToProps)(AddItem);
