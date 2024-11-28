import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: black;
`;

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
  background-color: black;
  border: 2px solid white;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 95%;
    height: auto;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  padding: 10px 20px;
  color: white;
  font-size: 1.6rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    flex-wrap: wrap;
    padding: 10px;
  }
`;

export const Button = styled.button`
  background-color: white;
  border: none;
  margin-right: 1%;
  border-radius: 20px;
  padding: 5px 15px;
  font-size: 1rem;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 5px 10px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1%;
  margin-right: 1%;
  gap: 10px;
  background-color: white;
  border-radius: 20px;
  padding: 5px 15px;
  flex-grow: 1;

  @media (max-width: 768px) {
    gap: 5px;
    padding: 5px 10px;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-grow: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.div`
  width: 20%;
  background-color: black;
  border-right: 2px solid white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 2px solid white;
  }
`;

export const Option = styled.div`
  background-color: black;
  border: 1px solid white;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
    color: black;
  }
`;

export const ContentArea = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: white;
  color: black;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px;
  }
`;
