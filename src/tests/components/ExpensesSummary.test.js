import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render page for a single expense correctly',() => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
}); 

test('should render page for multiple expenses correctly',() => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={235123}/>);
    expect(wrapper).toMatchSnapshot();
}); 