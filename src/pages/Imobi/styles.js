import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 150px;
  }
`;

export const Left = styled.div`
  width: 100%;
  padding: 10px;
  border: 1px solid rgb(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: 70%;
  }
`;

export const Thumb = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

export const Description = styled.div`
  padding: 30px 0;

  h2,
  p {
    margin-bottom: 15px;
    color: var(--secondary);
  }
`;

export const Right = styled.div`
  width: 100%;
  padding: 10px;
  border: 1px solid rgb(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-top: 20px;

  @media (min-width: 768px) {
    width: 28%;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ProfileImg = styled.div`
  width: 100%;
  max-width: 115px;
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

export const ProfileDescription = styled.div`
  padding: 20px 0;

  h3,
  p {
    margin-bottom: 15px;
    color: var(--secondary);
  }
`;

export const ProfileContact = styled.div`
  padding: 20px 0;

  h3,
  p {
    margin-bottom: 15px;
    color: var(--secondary);
  }
`;

export const ProfileFormContact = styled.div`
  padding: 20px 0;

  h3 {
    margin-bottom: 15px;
    color: var(--secondary);
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;
