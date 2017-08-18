import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
	background-color: #4ECBC2;
	border: 1px solid #4ECBC2;
	border-radius: 3px;
	color: #fff;
	cursor: pointer;
	font-family: Arial;
	font-size: 1em;
	font-weight: bold;
	margin: 1em;
	padding: 1rem 2.5rem;

	text-transform: uppercase;
`;

const Input = styled.input.attrs({
	placeholder: 'search',
	type: 'search'
})`
	background: transparent;
	border: 1px solid rgba(23,68,96,0.35);
	border-radius: 3px;
	color: rgba(23,68,96,1);
	font-size:13px;
	height: 50px;
	position:relative;
	line-height:30px;
	padding:5px 10px;
	min-height:40px;
	margin:0 0 10px 0;
	outline:0;
	text-transform: uppercase;
	width:40%;
`;


class InputSearch extends React.Component{
	render() {
	  return (
	    <form 
	      className="searchbox" 
	      onSubmit={this.handleClick.bind(this)}>
	      <input ref={(input) => { this.textInput = input; }}  
              className="form-control" type="text" placeholder="Search for repo..."/>
	      
	      <button onClick={this.search.bind(this)}
                className="btn btn-primary">Search</button>
	    </form>
	  )
	}
	
	handleClick(e) {
	  e.preventDefault();
	  let username = this.refs.search.findDOMNode().value;
	  // sending the username value to parent component to fetch new data from API
	  this.props.fetchUser(username);
	  this.refs.search.getDOMNode().value = '';
	}
}

export default InputSearch;