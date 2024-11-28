import React from 'react';
import {
  MainContainer,
  Card,
  Title,
  ButtonContainer,
  Button,
  InfoPanel,
  UserInfo,
  LogoutButton,
} from './styled';

function MainPage() {
  const nomeUsuario = '@nome_user';

  return (
    <MainContainer>
      <Card className="info-card" isLeft>
        <p>
          Phishing é uma prática maliciosa que envolve a tentativa de enganar
          usuários para que revelem informações sensíveis, como senhas, números
          de cartões de crédito ou dados pessoais. Normalmente, ocorre por meio
          de e-mails, mensagens ou sites falsos que se passam por entidades
          legítimas, como bancos ou serviços populares. Os perigos do phishing
          são significativos, pois podem resultar em roubo de identidade,
          perdas financeiras, comprometimento de contas e até mesmo espionagem
          corporativa. Ataques bem-sucedidos podem causar danos duradouros à
          reputação e segurança das vítimas, além de afetar negativamente
          organizações inteiras.
        </p>
      </Card>

      <Card className="button-card" isCenter>
        <Title>Phishing</Title>
        <ButtonContainer>
          <Button color="black">Criar/gerenciar campanha(s)</Button>
          <Button color="white" border="black">
            Gerenciar opções de phishing
          </Button>
          <Button color="red">Gerenciar empresas e colaboradores</Button>
        </ButtonContainer>
      </Card>

      <InfoPanel>
        <UserInfo>
          <h2>
            Bem-vindo
            {nomeUsuario}
          </h2>
          <p>Campanhas realizadas: 5</p>
          <p>Campanhas em andamento: 2</p>
          <p>% geral de clicks em links: 33%</p>
          <LogoutButton>Sair</LogoutButton>
        </UserInfo>
      </InfoPanel>
    </MainContainer>
  );
}

export default MainPage;
