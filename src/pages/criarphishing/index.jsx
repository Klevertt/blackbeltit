import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPen,
  faBold,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faAlignJustify,
  faUndo,
  faRedo,
  faTrash,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faPen,
  faBold,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faAlignJustify,
  faUndo,
  faRedo,
  faTrash,
  faUser,
);

const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #000;
  min-height: 100vh;
  color: white;
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  margin: 0;
`;

const Button = styled.button`
  background-color: #fff;
  color: #000;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
`;

const EmailSection = styled.div`
  padding: 20px;
`;

const EmailInput = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.div`
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
`;

const EmailEditor = styled.div`
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
`;

const EditorToolbar = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ccc;
  color: black;
`;

const ToolbarTitle = styled.div`
  margin-right: 20px;
`;

const IconGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex: 1;
  color: black;
`;

const EmailContent = styled.div`
  padding: 20px;
  min-height: 300px;
  color: #000;
  background-color: #f5f5f5;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

function CriarPhishing() {
  return (
    <Container>
      <ContentHeader>
        <Title>Criação</Title>
        <Button>Voltar</Button>
      </ContentHeader>

      <EmailSection>
        <EmailInput>
          <Label>Email do remetente:</Label>
          <Input type="email" value="shoppeee@gmail.com.br" readOnly />
        </EmailInput>

        <EmailEditor>
          <EditorToolbar>
            <ToolbarTitle>Criação de E-mail</ToolbarTitle>
            <IconGroup>
              <FontAwesomeIcon icon={faPen} />
              <FontAwesomeIcon icon={faBold} />
              <FontAwesomeIcon icon={faAlignLeft} />
              <FontAwesomeIcon icon={faAlignCenter} />
              <FontAwesomeIcon icon={faAlignRight} />
              <FontAwesomeIcon icon={faAlignJustify} />
              <FontAwesomeIcon icon={faUndo} />
              <FontAwesomeIcon icon={faRedo} />
              <FontAwesomeIcon icon={faTrash} />
              <div style={{ marginLeft: 'auto' }}>
                shoppeee@gmail.com.br
                <FontAwesomeIcon icon={faUser} style={{ marginLeft: '10px' }} />
              </div>
            </IconGroup>
          </EditorToolbar>
          <EmailContent>
            Olá Ricardo,
            <br />
            <br />
            Espero que você esteja bem! Tenho uma novidade incrível para
            compartilhar: o Produto X agora está com 30% de desconto! Esta é uma
            oportunidade imperdível para adquirir um item que você vai adorar.
            <br />
            <br />
            Para aproveitar essa oferta exclusiva, basta clicar no link abaixo:
            <br />
            <br />
            <button
              style={{
                backgroundColor: '#ff6600',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                cursor: 'pointer',
                borderRadius: '20px',
              }}
            >

              Clique aqui!!!
            </button>
            <br />
            <br />
            Mas corra, pois a promoção é por tempo limitado!
            <br />
            Se tiver alguma dúvida, estou à disposição para ajudar.
            <br />
            <br />
            Abraços,
            <br />
            Shoppee
          </EmailContent>
        </EmailEditor>
      </EmailSection>

      <ButtonContainer>
        <Button>Criar</Button>
      </ButtonContainer>
    </Container>
  );
}

export default CriarPhishing;
