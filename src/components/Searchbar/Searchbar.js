import { useState } from 'react';
import s from './Searchbar.module.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
export default function SearchBar({ onSubmit }) {
    const [query, setQuery] = useState('');
  
    const handleQueryChange = e => {
      setQuery(e.target.value.toLowerCase());
    };
    const handleSubmit = e => {
      e.preventDefault();
      if (query.trim() === '') {
        toast.warning('Enter correct value');
        return;
      }
      onSubmit(query);
      setQuery('');
    };
    return (
        <form className={s.form} onSubmit={handleSubmit}>
        <Button className={s.btn} type={'submit'} children={'Search'}  aria-label="Search"/>
  
          <input
            className={s.input}
            type="text"
            autoComplete="off"
            value={query}
            autoFocus
            placeholder="Search movies"
            onChange={handleQueryChange}
          />
        </form>
    );
  }
  SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };