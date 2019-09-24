import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects'
import axios from 'axios';

//need a saga for getting characters
//pass them to characterList reducer
//then update the redux store
function* getProjects (action){
    try {
        const response = yield axios.get('/projects');
        console.log('got that there data');
        yield put ({type: 'SET_PROJECTS', payload: Response.data});
        console.log('sent off SET_PROJECTS action');
        
        
    }
    catch (error) {
        console.log('could not get characters', error);
        
    }
}

//Character list is a reducer that will hold characters from the server
const projectsList = (state=[], action) => {
    if (action.type === 'SET_PROJECTS'){
        return action.payload;
    }
    return state;
}

const sagaMiddleware = createSagaMiddleware();

function* watcherSaga () {
    yield takeEvery ('GET_PROJECTS', getProjects)
}





const reduxStore = createStore(
    combineReducers({
        projectsList,

    }),
    applyMiddleware(logger, sagaMiddleware)
)
sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
