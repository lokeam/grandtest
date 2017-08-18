import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRepos } from '../actions/getRepos';
import styled from 'styled-components';

const Search = styled.div`
	text-align: center;
	position: relative;
	margin: 0 auto;
	max-width: 964px;
	margin: 2rem auto;
	padding: 0 2rem;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Input = styled.input.attrs({
	type: "text",
})`
	font-size: 18px;
	line-height: 22px;
	width: 100%;
	height: 50px;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box
	padding-right: 14px;
	padding-right: 4px \9;
	padding-left: 14px;
	padding-left: 4px \9;
	margin-bottom: 0;
	-webkit-border-top-left-radius: 5px;
	-webkit-border-bottom-left-radius: 5px;
	-moz-border-radius-topleft: 5px;
	-moz-border-radius-bottomleft: 5px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;

`;

const SearchButton = styled.button`
	
	background: #174460;
	border: 1px solid #174460;
	border-radius: 0 5px 5px 0;
	border: 1px solid rgba(0,0,0,.1);
	color: #FFFFFF;
	cursor: pointer;
	display: block;
	font-family: inherit;
	font-size: 14px;
	height: 50px;
	opacity: 1;
	padding: 1rem 1.5rem;
	padding: 0 1.5em;
	pointer-events: auto;
	right: -1px;
	text-transform: uppercase;
	-webkit-letter-spacing: 1px;
	-moz-letter-spacing: 1px;
	-ms-letter-spacing: 1px;
	letter-spacing: 1px;
	-webkit-transition: -webkit-transform .05s linear, background 0.3s, color 0.3s;
	-webkit-transition: transform .05s linear, background 0.3s, color 0.3s;
	transition: transform .05s linear, background 0.3s, color 0.3s;

	@media (min-width: 540px) {
		display: flex;
		min-width: 115px;
	  width: auto;

	}
`;


class SearchBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		  target: ""
		}
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
	}
  onFormSubmit(event){
  	event.preventDefault();
  	this.props.getRepos(this.state.target);
  	this.setState({target: ''});
  }
  onInputChange(event) {
  	this.setState({target: event.target.value});
  }
	render() {

		return (
			<form onSubmit={this.onFormSubmit}>
				<Search>
				  <Input
				  	value={this.state.target}
				  	onChange={this.onInputChange}
				    className="search-query" type="text" placeholder="Search GitHub Users" />
				  <SearchButton>Search</SearchButton>
				</Search>
			</form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getRepos}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);