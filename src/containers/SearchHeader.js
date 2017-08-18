import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const TitleWrapper = styled.div`
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-align-items: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: space-between;
	-webkit-justify-content: space-between;
	-ms-flex-pack: space-between;
	justify-content: space-between;
`;

const Title = styled.div`
	font-weight: 400;
	-webkit-letter-spacing: 1px;
	-moz-letter-spacing: 1px;
	-ms-letter-spacing: 1px;
	letter-spacing: 1px;
	margin-left: 0.5rem;
`;


class SearchHeader extends React.Component {
	render() {
		console.log('updated props: ', this.props);
		return(
			<header>
			  <TitleWrapper>
			    <svg aria-hidden="true" className="octicon octicon-repo" height="25" version="1.1" viewBox="0 0 12 16" width="21">
			      <path className="gitRepoIcon" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path>
			    </svg>
			    <Title>{this.props.title}</Title>
			  </TitleWrapper>
			  <a className="projectDetails" href={this.props.projectdetails} target="_blank">details</a>
			</header>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	    title: state.title,
	    projectdetails: state.projectdetails,
	  }
}

export default connect(mapStateToProps)(SearchHeader);