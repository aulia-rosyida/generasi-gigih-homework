import { render, screen } from '@testing-library/react';
import Search from './Search';
import Card from '../components/card'
import SearchBar from '../components/searchBar'

test('renders search title', () => {
  render(<Search />);
  const titleSearch = screen.getByText(/Ini page Search/i);
  expect(titleSearch).toBeInTheDocument();
});

test('renders Searchbar component', () => {
    render(<SearchBar />);
});
