import React from 'react';

import { Inventory } from '../features/inventory/inventory.js';
import { CurrencyFilter } from '../features/currencyFilter/currencyFilter.js';
import { Cart } from '../features/cart/cart.js';
import { SearchTerm } from '../features/searchTerm/searchTerm.js';

export const App = (props) => {
  const { state, dispatch } = props;

  const getFilteredItems = (items, searchTerm) => {
    return items.filter((items) => items.name.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <SearchTerm
        searchTerm={state.searchTerm}
        dispatch={dispatch}
      />

      <Inventory
        inventory={getFilteredItems(state.inventory, state.searchTerm)}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  );
};
