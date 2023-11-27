import { useState } from 'react';
import { Input, SearchBtn, InputContainer } from './Searchbar.styled';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const Searchbar = ({onSubmit}) => {
  const [queryValue, setQuery] = useState('');

 const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(queryValue);
    setQuery('');
  };

    return (
      <header className="searchbar">
        <form className="form" onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={queryValue}
            onChange={handleChange}
          />
          <SearchBtn type="submit" className="button">
          <FontAwesomeIcon icon={faSearch} />
          </SearchBtn>
          </InputContainer>
        </form>
      </header>
    );
  }
