import styled from 'styled-components';

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  margin-right: 0.5rem;
  &:hover {
    opacity: 0.9;
  }
`;

export default Button;
