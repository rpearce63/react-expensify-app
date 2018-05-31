
export default (expenses) => {
    // return expenses.reduce((total, curr) => {
    //     return total + curr.amount;
    // }, 0);
    return expenses 
        //.map((expense) => expense.amount)
        .reduce((sum, value) => sum + value.amount , 0);
};