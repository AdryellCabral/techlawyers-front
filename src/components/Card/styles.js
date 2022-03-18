import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 250px;
  padding: 16px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--black);
  color: var(--black);
  font-size: 1rem;
  margin-right: 16px;
  margin-top: 16px;

  hr {
    width: 80%;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  button {
    margin-top: 25px;
    align-self: flex-end;
  }

  svg {
    font-size: 1rem;
    color: var(--orange);
    margin-right: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  div {
    height: 10px;
    padding: 0;
    margin: 8px;
    display: flex;
    align-items: center;
  }
`;
