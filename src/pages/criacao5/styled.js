import styled from 'styled-components';

const BREAKPOINTS = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
};

export const Container = styled.div`
  background-color: #f5f5f5;
  margin: 2% 1%;
  font-family: Arial, sans-serif;
  border-radius: 20px;
  display: flex;
`;

export const Content = styled.div`
  padding: 40px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  
  @media (max-width: ${BREAKPOINTS.tablet}) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #000;
  
  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 20px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
  
  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 16px;
  }
`;

export const CampaignDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Row = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: ${BREAKPOINTS.tablet}) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  padding: 20px;
  border-radius: 8px;
  flex: 1;
  
  @media (max-width: ${BREAKPOINTS.tablet}) {
    width: 100%;
  }
  
  h3 {
    margin-bottom: 15px;
    font-size: 18px;
    
    @media (max-width: ${BREAKPOINTS.mobile}) {
      font-size: 16px;
    }
  }
`;

export const GeneralData = styled(Card)`
  background-color: #dcdcdc;
`;

export const Scenario = styled(Card)`
  background-color: red;
`;

export const ScenarioContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Target = styled(Card)`
  background-color: black;
  color: red;
`;

export const TargetBox = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Distribution = styled(Card)`
  background-color: #e9e9e9;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #0038FF;
  }
`;

export const DateInputContainer = styled.div`
  display: flex;
  gap: 10px;
  
  @media (max-width: ${BREAKPOINTS.mobile}) {
    flex-direction: column;
  }
`;

export const DateInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #0038FF;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  gap: 10px;
  
  @media (max-width: ${BREAKPOINTS.mobile}) {
    flex-direction: column;
  }
`;

export const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  flex: 1;
  
  &:focus {
    outline: none;
    border-color: #0038FF;
  }
`;

export const RadioButton = styled.input`
  margin-right: 8px;
`;

export const ScenarioBox = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 10px;
  cursor: pointer;
  border: 2px solid ${({ active }) => (active ? 'red' : 'transparent')};
  
  &:hover {
    background-color: #f8f8f8;
  }
`;

export const TargetList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
  
  @media (max-width: ${BREAKPOINTS.mobile}) {
    flex-direction: column-reverse;
    
    button {
      width: 100%;
      margin: 0;
    }
  }
`;

export const Button = styled.button`
  background-color: ${(props) =>
    props.variant === "cancel"
      ? "#FF0000"
      : props.variant === "next"
      ? "#0038FF"
      : "#555"};
  color: white;
  border: 1px solid ${(props) => (props.variant === "cancel" ? "#d32f2f" : "#ccc")};
  padding: 10px 20px;
  border-radius: 16px;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) =>
      props.variant === "cancel"
        ? "rgba(255, 0, 0, 0.2)"
        : props.variant === "next"
        ? "rgba(0, 56, 255, 0.2)"
        : "rgba(85, 85, 85, 0.2)"};
  }
`;
