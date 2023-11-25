import styled from "styled-components";

export const Container = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-size: 1.875rem;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 15px;
    text-align: justify;
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  strong {
    display: block; /* Ensure the strong tag is treated as a block element */
    margin-top: 10px; /* Adjust as needed */
  }
`;