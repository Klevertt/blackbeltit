import styled from 'styled-components';

const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
};

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  min-height: 100vh;
  height: 100vh;
  background: linear-gradient(to bottom, #444 65%, #000 35%);
  background-attachment: fixed;
  position: relative;
  padding: 20px;
  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 10px;
  }
`;

export const Card = styled.div`
  background-color: #f0f0f0;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: ${({ isCenter }) => (isCenter ? 'absolute' : 'relative')};
  width: ${({ isCenter }) => (isCenter ? '600px' : '800px')};
  
  @media (max-width: ${breakpoints.desktop}) {
    width: ${({ isCenter }) => (isCenter ? '500px' : '600px')};
  }

  @media (max-width: ${breakpoints.laptop}) {
    width: ${({ isCenter }) => (isCenter ? '400px' : '500px')};
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 90% !important;
    position: relative !important;
    transform: none !important;
    left: auto !important;
    margin: 20px auto !important;
  }

  &.info-card {
    background-color: black;
    color: white;
    text-align: justify;
    font-size: 1.2em;
    align-self: flex-start;
    margin-top: 30px;
    width: 800px;

    @media (max-width: ${breakpoints.tablet}) {
      margin-top: 10px;
      font-size: 1em;
      width: 90%;
    }

    @media (max-width: ${breakpoints.laptop}) {
      width: 610px;
      font-size: 1.1em;
    }
  }

  &.button-card {
    padding: 45px;
    border-radius: 10px;
    position: absolute;
    bottom: 160px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;

    @media (max-width: ${breakpoints.tablet}) {
      padding: 20px;
      bottom: 1%;
      position: absolute;
      width: 90%;
      transform: translateX(-50%);
      order: 2;
    }

    @media (max-width: ${breakpoints.laptop}) {
      width: 500px;
      padding: 20px;
      bottom: 50px;
    }

    @media (max-width: ${breakpoints.desktop}) {
      width: 600px;
      padding: 20px;
      bottom: -14%;
    }
  }
`;

export const Title = styled.h1`
  font-size: 1.6em;
  text-align: center;
  color: black;
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.4em;
    margin-bottom: 15px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 8px;
  }
`;

export const Button = styled.button`
  background-color: ${({ color }) => color || 'black'};
  color: ${({ color }) => (color === 'white' ? 'black' : 'white')};
  border: ${({ border }) => (border ? `2px solid ${border}` : 'none')};
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: normal;
  height: auto;
  min-height: 44px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 0.9em;
    padding: 8px 15px;
  }

  &:hover {
    background-color: ${({ color }) =>
      color === 'black' ? '#333' : color === 'red' ? '#ff3333' : '#f0f0f0'};
  }
`;

export const InfoPanel = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
  align-self: flex-start;
  margin-top: 30px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 250px;
  }

  @media (max-width: ${breakpoints.laptop}) {
    width: 220px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 90%;
    margin: 20px auto;
    padding: 20px;
    order: 3;
  }
`;

export const UserInfo = styled.div`
  h2 {
    font-size: 1.8em;
    color: black;
    margin-bottom: 10px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1.4em;
    }
  }

  p {
    font-size: 1.2em;
    color: #333;
    margin-bottom: 5px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1em;
    }
  }
`;

export const LogoutButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 0.9em;
    padding: 8px 15px;
  }

  &:hover {
    background-color: #ff3333;
  }
`;
