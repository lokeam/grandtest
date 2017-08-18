import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const RepoWrapper = styled.div`
	max-width: 964px;
	margin: 2rem auto;
	padding: 0 2rem;
`;

const Card = styled.div`
	background: #FFF;
	border-radius: 3px;
	border: 1px solid #E1E1E1;
	box-shadow: 2px 10px 20px 0 rgba(0,0,0,0.05);
	padding: 2rem;
	z-index: 1;
`;

const RepoTitle = styled.div`
	font-size: 1em;
	padding: 8px 0;
	border-bottom: 1px dashed #E1E1E1;
	text-transform: uppercase;
`;

class RepoList extends React.Component{
	renderListItem(repos) {
		const repoName = repos.name
		return (
			<li key={repoName}>
				<a target="_blank" href={`https://github.com/{$repoName}`}>{repoName}</a>
			</li>
		)
	}
	render() {
		return(
			<RepoWrapper>
			  <Card>
			    <RepoTitle>User repositories</RepoTitle>
			    <ul className="repos">
			      {this.props.repos.map((this.renderListItem))}
			    </ul>
			  </Card>
			</RepoWrapper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		repos: state.repos,
		isLoading: state.loadingRepos
	}
}

export default connect(mapStateToProps)(RepoList);