import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  ol {
    list-style-type: decimal;
    margin-bottom: 15px;
    margin-left: 20px;

    li {
      font-size: 1.2rem;
      line-height: 1.6;
      margin-bottom: 10px;

      strong {
        font-weight: bold;
      }

      ul {
        list-style-type: disc;
        margin-left: 20px;
      }
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    padding: 0;

    li {
      font-size: 1.5rem;

      span {
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
          color: #007bff;
        }
      }
    }
  }
`;