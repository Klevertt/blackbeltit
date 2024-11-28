import styled from 'styled-components';

export const Container = styled.div`
  font-family: "Arial", sans-serif;
  padding: 16px;
  background-color: #f8f8f8;
  margin-top: 2%;
  margin-left: 3%;
  margin-right: 3%;
  border-radius: 20px;
`;

export const SubHeader = styled.h1`
  font-size: 24px;
  margin-top: 16px;
  margin-bottom: 1%;
  color: black;
  background-color: #f8f8f8;
`;

export const PhishingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

export const SitesSection = styled.div`
  flex: 1;
  padding: 16px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;

  td {
    padding: 8px;
    vertical-align: middle;
  }
`;

export const EmailPreview = styled.div`
  flex: 2;
  background-color: #f9f9f9;
  padding: 16px;
  border-radius: 8px;

  p {
    margin-bottom: 8px;
  }

  button {
    background-color: orange;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 8px;
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
