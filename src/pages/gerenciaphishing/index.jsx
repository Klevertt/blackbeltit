import React, { useState } from 'react';
import {
  PageContainer,
  CenteredContainer,
  Header,
  SearchBar,
  Body,
  Sidebar,
  ContentArea,
  Option,
  Input,
  Button,
} from './styled';

function PhishingOp() {
  const [content, setContent] = useState('Nada selecionado...');

  const handleOptionClick = () => {
    setContent("Aqui está o conteúdo relacionado à 'Opção1'.");
  };

  return (
    <PageContainer>
      <CenteredContainer>
        <Header>
          <span>Gerenciamento de phishing</span>
          <SearchBar>
            <Input type="text" placeholder="Procurar opções de phishing..." />
            <Button>
              <span role="img" aria-labelledby="lupa">
                🔍
              </span>
            </Button>
          </SearchBar>
          <Button>Voltar</Button>
          <Button>Nova opção</Button>
        </Header>
        <Body>
          <Sidebar>
            <Option onClick={handleOptionClick}>Opcao1</Option>
          </Sidebar>
          <ContentArea>{content}</ContentArea>
        </Body>
      </CenteredContainer>
    </PageContainer>
  );
}
export default PhishingOp;
