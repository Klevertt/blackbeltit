import React from 'react';
import * as S from './styled';

const criacao5 = () => (
  <S.Container>
    <S.Content>
      <S.Title>Nova campanha phishing</S.Title>
      <S.Subtitle>Confira os dados da sua campanha</S.Subtitle>
      <S.CampaignDetails>
        <S.Row>
          <S.GeneralData>
            <h3>Dados gerais</h3>
            <p>Nome:</p>
            <S.Input type="text" />
            <p>Início:</p>
            <div>
              <S.RadioButton type="radio" id="agora" name="inicio" checked />
              <label htmlFor="agora">Agora</label>
            </div>
            <p>Duração:</p>
            <S.DateInputContainer>
              <S.DateInput type="date" value="2024-05-30" />
              <S.DateInput type="date" value="2024-06-12" />
            </S.DateInputContainer>
          </S.GeneralData>
          <S.Scenario>
            <h3>Cenário(s)</h3>
            <S.ScenarioContainer>
              <S.ScenarioBox active>
                <p>Amazon.com</p>
              </S.ScenarioBox>
            </S.ScenarioContainer>
          </S.Scenario>
        </S.Row>
        <S.Row>
          <S.Target>
            <h3>Alvos</h3>
            <S.TargetBox>
              <S.TargetList>
                <li>Equipe de T.I</li>
                <li>BlackBelt Solutions</li>
              </S.TargetList>
            </S.TargetBox>
          </S.Target>
          <S.Distribution>
            <h3>Distribuição</h3>
            <div>
              <input type="checkbox" checked readOnly />
              Limitar o envio de emails?
            </div>
            <p>Limite de envios:</p>
            <S.Input type="number" value="20" />
            <p>Delay:</p>
            <S.SelectContainer>
              <S.Input type="number" value="30" />
              <S.Select>
                <option>Segundos</option>
              </S.Select>
            </S.SelectContainer>
          </S.Distribution>
        </S.Row>
      </S.CampaignDetails>
      <S.ButtonContainer>
        <S.Button variant="cancel">Cancelar</S.Button>
        <S.Button variant="previous">Voltar</S.Button>
        <S.Button variant="next">Próximo</S.Button>
      </S.ButtonContainer>
    </S.Content>
  </S.Container>
);

export default criacao5;
