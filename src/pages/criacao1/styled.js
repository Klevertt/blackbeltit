import styled from 'styled-components';

const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
};

export const FormContainer = styled.div`
  font-family: "Arial", sans-serif;
  padding: 16px;
  background-color: #f8f8f8;
  margin-top: 2%;
  margin-left: 3%;
  margin-right: 3%;
  border-radius: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
    padding: 16px;
    margin: 5% 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 12px;
    margin: 5% 16px;
  }
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  color: black;
  margin-bottom: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 12px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: black;
  margin-bottom: 4px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #4a5568;
  background-color: white;
  color: black;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
    padding: 6px 10px;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 6px;
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: black;
  font-size: 14px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
    gap: 6px;
  }
`;

export const RadioInput = styled.input`
  accent-color: #007bff;
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  gap: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 20px;
    flex-direction: column;
    gap: 12px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
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
  padding: 8px 16px;
  border-radius: 16px;
  font-size: 14px;
  cursor: pointer;
  margin-left: 8px;
  justify-content: space-between;
`;

export const DateInputsContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 12px;
    
    > div {
      width: 100%;
    }
    
    button {
      width: 100%;
      padding: 8px;
    }
  }
`;
