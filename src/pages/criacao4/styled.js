import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  margin-top: 2%;
  margin-left: 3%;
  margin-right: 3%;
  border-radius: 20px;
`;

export const Navigation = styled.nav`
  display: flex;
`;

export const NavigationLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 20px;
`;

export const Content = styled.div`
  padding: 40px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const EmailDistribution = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const Field = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 60px;
`;

export const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Finalize = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
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
