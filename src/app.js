import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import moment from 'moment';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
// let state;
// store.subscribe(() => {
//     state = store.getState();
//     //console.log(state);
// })
const now = moment().valueOf();
store.dispatch(addExpense({ description: 'Water bill', amount: 10000, createdAt: now}));
store.dispatch(addExpense({description: 'Gas bill', amount: 4000, createdAt: moment('2018-05-22').valueOf()}));
store.dispatch(addExpense({description: 'Rent', amount: 109500, createdAt: moment('2018-05-01').valueOf()}));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);

// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx , document.getElementById('app'));
