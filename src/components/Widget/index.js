import styled from 'styled-components'

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: rgba(23, 27, 53, 0.9);
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  
  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Input = styled.input.attrs({
  placeholder: "Diz aí seu nome pra jogar :)",
})`
  &&& {
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
  }
`;

Widget.Button = styled.button`
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

  &:hover {
    background-color: #33bfff;
  }
`;

export default Widget;