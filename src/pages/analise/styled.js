import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: black;
  color: white;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const BackButton = styled.button`
  background-color: black;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: 3px solid white;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #1a1a1a;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const MetricCard = styled.div`
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: ${props => 
    props.variant === 'red' ? '#8B0000' : 
    props.variant === 'black' ? '#1A1A1A' : 'white'
  };
  color: ${props => 
    props.variant === 'red' ? 'white' : 
    props.variant === 'black' ? 'white' : 'black'
  };
  border: 1px solid ${props => 
    props.variant === 'red' || props.variant === 'black' ? '#3C3C3C' : '#E0E0E0'
  };

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const MetricTitle = styled.h3`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const MetricValue = styled.div`
  display: flex;
  justify-content: ${props => props.split ? 'space-between' : 'flex-start'};
  align-items: center;
  margin-bottom: 0.5rem;
  
  span {
    font-size: 2rem;
    font-weight: bold;
  }

  @media (max-width: 480px) {
    span {
      font-size: 1.5rem;
    }
  }
`;

export const MetricSubtitle = styled.p`
  font-size: 1rem;
  opacity: 0.9;

  @media (max-width: 480px) {
    font-size: 0.625rem;
  }
`;

export const BottomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const ChartContainer = styled.div`
  background-color: #1A1A1A;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(255,255,255,0.1);
  color: white;

  @media (max-width: 480px) {
    padding: 1rem;
    overflow-x: auto;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
  }
  
  th {
    font-weight: 600;
  }

  @media (max-width: 480px) {
    th, td {
      padding: 0.5rem;
      font-size: 0.875rem;
    }
  }
`;
