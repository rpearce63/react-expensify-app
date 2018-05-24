import React from 'react';

const ExpenseListItem = ({description, amount, createdAt}) => (
    <li>{description} - {amount} - {createdAt}</li>
);

export default ExpenseListItem;