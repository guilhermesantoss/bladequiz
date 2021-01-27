import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  width: 100%;
  height: 40px;
  outline: none;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin-top: 20px;

  &:hover,
  &:focus {
    background-color: #33bfff;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #ccc;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
