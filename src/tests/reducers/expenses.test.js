import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
}); 

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const newExpense = {
        id: '4',
        description: 'new expense',
        note: '',
        amount: 1000,
        createdAt: moment(1000)
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense    
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense]);
});

test('should edit an expense', ()  => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {note: 'new note'}
    }
    expect(expenses[0].note).toBe('');
    const state = expensesReducer(expenses, action);
    expect(state[0].note).toBe('new note');
});

test('should not edit expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {note: 'new note'}
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});