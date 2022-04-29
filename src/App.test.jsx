import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from './App';

describe('With React Testing Library', () => {
  const initialState = { todos: [] };
  const mockStore = configureStore();
  let store;

  test('renders ToDo App header on the page', () => {
    store = mockStore(initialState);
    render(<Provider store={store}><App /></Provider>);
    const reactElement = screen.getByText(/todo list app/i);
    expect(reactElement).toBeInTheDocument();
  });
});
