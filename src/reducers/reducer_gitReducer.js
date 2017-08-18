import { GET_REPOS } from '../actions/getRepos';

export default function(state = [], action) {
  switch (action.type) {
    case GET_REPOS:
      return action.payload.data;
    default:
      return state;
  }
}