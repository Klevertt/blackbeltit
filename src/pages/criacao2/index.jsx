import React from 'react';
import {
  Container,
  SubHeader,
  PhishingContainer,
  SitesSection,
  Table,
  TableRow,
  EmailPreview,
  ButtonContainer,
  Button,
} from './styled';

function Criacao2() {
  return (
    <Container>
      <SubHeader>Nova campanha phishing</SubHeader>
      <h3>Cenários de phishing</h3>
      <p>Selecione as opções desejadas</p>
      <PhishingContainer>
        <SitesSection>
          <Table>
            <tbody>
              <TableRow>
                <td>
                  <input type="checkbox" id="shoppee" />
                </td>
                <td>
                  <label htmlFor="shoppee">Shoppee.com</label>
                </td>
              </TableRow>
              <TableRow>
                <td>
                  <input type="checkbox" id="amazon" />
                </td>
                <td>
                  <label htmlFor="amazon">Amazon.com</label>
                </td>
              </TableRow>
            </tbody>
          </Table>
        </SitesSection>
        <EmailPreview>
          <p>
            <strong>shoppee@gmail.com.br</strong>
          </p>
          <p>Olá Ricardo,</p>
          <p>
            Espero que você esteja bem! Tenho uma novidade incrível para compartilhar:
            o Produto X agora está com 30% de desconto!
          </p>
          <p>
            Para aproveitar esse alerta exclusivo, basta clicar no link abaixo:
          </p>
          <button>
            Clique aqui!
          </button>
          <p>Abraços,</p>
          <p>Shoppee</p>
        </EmailPreview>
      </PhishingContainer>

      <ButtonContainer>
        <Button variant="cancel">Cancelar</Button>
        <Button variant="previous">Voltar</Button>
        <Button variant="next">Próximo</Button>
      </ButtonContainer>
    </Container>
  );
}

export default Criacao2;
