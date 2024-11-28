import styled from 'styled-components';

export const PageContainer = styled.div`
  font-family: Arial, sans-serif;
`;

export const Banner = styled.div`
  padding: 20px;
  color: #fff;
`;

export const MainContent = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  margin-top: 2%;
  margin-left: 3%;
  margin-right: 3%;
  border-radius: 20px;
`;

export const ContentCard = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
`;

export const TablesContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const SectorTableContainer = styled.div`
  width: 250px;
  flex-shrink: 0;
`;

export const EmployeeTableContainer = styled.div`
  flex-grow: 1;
  display: ${props => props.$isVisible ? 'block' : 'none'};
`;

export const SearchBar = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  background-color: #FF0000;
  padding: 10px;
  border-radius: 4px;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 5px;
  font-size: 14px;
`;

export const Table = styled.table`
  width: 100%;
  border: 1px solid white;
  border-collapse: collapse;
  margin-bottom: ${props => props.$marginBottom ? '20px' : '0'};
`;

export const Th = styled.th`
  background-color: #000;
  color: #fff;
  padding: 10px;
  text-align: left;
  border: ${props => props.$hasBorder ? '1px solid white' : 'none'};
`;

export const Td = styled.td`
  border: 1px solid #ccc;
  padding: 10px;
  cursor: ${props => props.$clickable ? 'pointer' : 'default'};
  background-color: ${props => props.$selected ? '#f0f0f0' : 'transparent'};

  &:hover {
    background-color: ${props => props.$clickable ? '#f5f5f5' : 'transparent'};
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
