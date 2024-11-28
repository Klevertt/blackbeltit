import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 100px;
  padding: 1rem;
  font-weight: bold;
  background-color: #dc2626;
  color: white;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #dc2626;
  color: white;
  position: sticky;
  top: 0;
  z-index: 2;
  border-radius: 10px 10px 0px 0px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.5rem;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 0.25rem;
  margin-left: 0.5rem;
  width: 200px;
  color: #374151;
`;

export const Table = styled.div`
  background: white;
  border-radius: 0px 0px 10px 10px;
  overflow-x: auto;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 100px;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  align-items: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9fafb;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;

    &:not(:last-child) {
      border-bottom: 1px solid #eee;
    }
  }
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  color: ${props => props.delete ? '#dc2626' : '#4b5563'};
  transition: color 0.2s;

  &:hover {
    color: ${props => props.delete ? '#991b1b' : '#1f2937'};
  }
`;

export const AddButton = styled.button`
  background: #2563eb;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  margin-left: 1%;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.2s;

  &:hover {
    background: #1d4ed8;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  z-index: 1000;
  width: 90%;
  max-width: 500px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  z-index: 999;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37,99,235,0.1);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${props => props.primary ? '#2563eb' : '#e5e7eb'};
  color: ${props => props.primary ? 'white' : '#374151'};
  transition: background-color 0.2s;

  &:hover {
    background: ${props => props.primary ? '#1d4ed8' : '#d1d5db'};
  }
`;

export const Label = styled.div`
  font-weight: bold;
  margin-bottom: 0.25rem;

  @media (min-width: 768px) {
    display: none;
  }
`;
