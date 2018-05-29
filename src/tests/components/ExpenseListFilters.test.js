import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import {filters, altFilters } from '../fixtures/filters';

let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters = { filters }
            setTextFilter = {setTextFilter}
            sortByDate = {sortByDate}
            sortByAmount = { sortByAmount }
            setStartDate = { setStartDate }
            setEndDate = { setEndDate }
        />);
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: { altFilters }
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'bill';
    wrapper.find('input').at(0).simulate('change', { target: {value} });
    expect(setTextFilter).toHaveBeenLastCalledWith('bill');
});

test('should sort by date', () => {
    wrapper.find('select').simulate('change', { target: 'date'});
    expect(sortByAmount).toHaveBeenCalled();
});

test('should sort by amount', () => {

});

test('should handle date changes', () => {

});

test('should handle date focus changes', () => {

});
