import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #000;
  color: #fff;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 800px;

  input {
    border: none;
    outline: none;
    font-size: 16px;
    flex-grow: 1;
    padding: 4px 8px;

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    color: #000;
    cursor: pointer;
    font-size: 16px;
    margin-left: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding: 6px;
    margin-bottom: 15px;
  }
`;

export const CampaignsTable = styled.table`
  width: 100%;
  max-width: 800px;
  background-color: #222;
  border-collapse: collapse;
  border-radius: 4px;
  overflow-x: auto;
  display: block;

  th, td {
    padding: 12px;
    text-align: left;
    min-width: 120px;

    @media (max-width: 768px) {
      padding: 8px;
      font-size: 14px;
    }

    @media (max-width: 480px) {
      padding: 6px;
      font-size: 12px;
      min-width: 100px;
    }
  }

  th {
    background-color: #333;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  tr:nth-child(even) {
    background-color: #2b2b2b;
  }

  tbody {
    display: block;
    overflow-y: auto;
    max-height: 400px;

    @media (max-width: 768px) {
      max-height: 300px;
    }
  }

  thead, tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }
`;

export const CreateButton = styled.button`
  background-color: #ff0000;
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cc0000;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 20px;
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 8px 16px;
    margin-top: 10px;
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin-bottom: 20px;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #333;
  }

  &::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 3px;
  }
`;