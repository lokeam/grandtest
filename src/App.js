import React, { Component } from 'react';
import { connect } from 'react-redux';

import SectionHead from './components/SectionHead';
import RepoList from './containers/RepoList';
import SearchBar from './containers/SearchBar';
import SearchHeader from './containers/SearchHeader';


import './App.css';

class App extends Component {
  toggle(value) {
    this.setState(function(state, props){
      return { repoHidden: !this.state.rankingVisible }
    })
  }

  render() {
    /*const repobox = (this.state.repoHidden ? <RepoList repos={this.state.repos} /> : null);*/
    return (
        <section className="gitSearch">
          <SectionHead />
          <article>
            <SearchHeader />
            <SearchBar />
            <RepoList />
          </article>
        </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      title: state.title,
      projectDetails: state.projectDetails
    }
}

export default connect(mapStateToProps)(App);