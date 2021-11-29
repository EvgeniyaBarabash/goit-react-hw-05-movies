import React from 'react';
import PropTypes from 'prop-types';
import s from 'components/Button/Button.module.css';
export default function Button({ type, children, onClick }) {
  return (
    <>
      <button type={type} className={s.Button} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
Button.defaultProps = {
  onClick: () => null,
  children: null,
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
