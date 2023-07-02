import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import SearchInput from '../SearchInput'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from "react-router-dom";

describe('Search input value', () => {
    it('value changes on change event', () => {
      const setSearch = jest.fn((value) => {})
      
        render(<BrowserRouter>
        <div className="container">
            <SearchInput setSearch={setSearch}/>
        </div>
    </BrowserRouter>);
  
      const searchInput = screen.getByTestId("searchInput");
      fireEvent.change(searchInput, { target: { value: 'test' } })
  
      expect(searchInput.value).toBe('test');
    })
});

