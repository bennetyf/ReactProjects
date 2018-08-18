import React from "react";
import {setFilter} from "../../Actions/FilterActions";
import {connect} from "react-redux";

const Link = ({active, children, onClick}) => {
  if (active){
    return <p className="filter selected">{children}</p>;
  } else {
    return (
      <a href='#' className="filter not-selected" onClick={(event) => {event.preventDefault(); onClick();}}>
        {children}
      </a>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.filter === ownProps.filter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setFilter(ownProps.filter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
