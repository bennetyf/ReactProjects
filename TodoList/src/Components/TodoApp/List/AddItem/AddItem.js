import React from 'react';
import {connect} from "react-redux";
import {addTodo} from "../../Actions/ListActions";

// Presentational Component
class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.refInput = React.createRef();
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input className="new-todo" ref={this.refInput}/>
          <button className="add-btn" type="submit"> Add </button>
        </form>
      </div>
    )
  }

  onSubmit(event){
    event.preventDefault();
    const input = this.refInput.current;
    if (!input.value.trim()) { //No input values in the form, the return directly.
      return;
    }
    this.props.addItem(input.value);
    input.value = '';
  }
}

// Wrap it up with a container
// const mapStateToProps = (state) => {
//   return {
//     itemlist: state.todos
//   }
// };

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (text) => {
      dispatch(addTodo(text));
    }
  }
};

export default connect(null, mapDispatchToProps)(AddItem);
