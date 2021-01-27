/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBase = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.contrastText};
  font-size: 1em;
  padding-left: 20px;

  &:focus {
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 5px;
  }
`;

function Input({ onChange, ...props }) {
  return (
    <InputBase
      {...props}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  'data-cy': PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
};

export default Input;
