export const selectTransactions = state => state.transactions.items;

export const selectCategories = state => state.transactions.categories;

export const selectStatistic = state => state.transactions.summaryItem;

export const selectError = state => state.transactions.error;
