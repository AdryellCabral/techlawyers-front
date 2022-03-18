import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 0;
`;

export const InputContainer = styled.form`
  flex: 1;
  margin-top: 32px;
  padding: 0 38px;
  section {
    display: flex;
    > div {
      max-width: 80%;
      flex: 1;
      margin-right: 16px;
    }

    button {
      max-width: 260px;
      height: 56px;
      margin: 0;
    }
  }
`;

export const CardsContainer = styled.div`
  padding: 38px 0;
  margin: 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  /* div {
    margin-top: 32px;
    margin-right: 16px;
  } */
`;
