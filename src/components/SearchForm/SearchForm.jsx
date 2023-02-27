import PropTypes from 'prop-types';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { FiSearch } from 'react-icons/fi';

import { StyledSearchForm, StyledButton} from './SearchForm.styled';

export const SearchForm = ({ onSubmit}) => {
   const [query, setQuery] = useState('');

   const handleChange = e => {
     setQuery(e.target.value);
	};
	
   const handleSubmit = e => {
     e.preventDefault();
		onSubmit(query);
		
		if (query === '') {
		  toast.error('Please enter the name of movie!');
       return;
     }
     setQuery('');
   };
	
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <StyledSearchForm onSubmit={handleSubmit}>
        <input
          name="query"
          value={query || ''}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter the name of the movie"
        />

        <StyledButton type="submit">
          <span>
            <FiSearch size={20} />
          </span>
        </StyledButton>
      </StyledSearchForm>

      <Toaster />
    </div>
  );
};

SearchForm.propTypes = {
  defaultValue: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
