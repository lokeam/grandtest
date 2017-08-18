import axios from 'axios';

export const GET_REPOS = 'GET_REPOS';

export function getRepos(githubUser) {
  const url = `https://api.github.com/users/${githubUser}/repos`;
  const req = axios.get(url);
	return {
		type: GET_REPOS,
		payload: req
	};
}

export function repoRequestError(bool) {
    return {
        type: 'REPO_REQUEST_ERROR',
        hasErrored: bool
    };
}

export function loadingRepos(bool) {
    return {
        type: 'LOADING_REPOS',
        isLoading: bool
    };
}

export function repoRequestSuccess(items) {
    return {
        type: 'REPO_REQUEST_SUCCESS',
        items
    };
}

// export function getRepos(url) {
//     console.log('inside itemsFetchData');
//     return (dispatch) => {
//         dispatch(loadingRepos(true));

//         fetch(url)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw Error(response.statusText);
//                 }

//                 dispatch(loadingRepos(false));

//                 return response;
//             })
//             .then((response) => response.json())
//             .then((items) => dispatch(repoRequestSuccess(items)))
//             .catch(() => dispatch(repoRequestError(true)));
//     };
// }
