import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should correctly add up multiple expenses', () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toBe(114195);
});

test('should corrctly add up a single value', () => {
    const total = selectExpensesTotal([expenses[1]]);
    expect(total).toBe(109500);
});

test('should return 0 if no expenses', () => {
    const total = selectExpensesTotal([]);
    expect(total).toBe(0);
}); 