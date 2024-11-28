import React, { useState } from 'react';
import * as S from './styled';

function Criacao4() {
  const [isLimitChecked, setIsLimitChecked] = useState(true);
  const [emailLimit, setEmailLimit] = useState(20);
  const [delay, setDelay] = useState(30);
  const [timeUnit, setTimeUnit] = useState('Segundos');

  const handleCheckboxChange = () => {
    setIsLimitChecked(!isLimitChecked);
  };

  const handleLimitChange = (event) => {
    setEmailLimit(event.target.value);
  };

  const handleDelayChange = (event) => {
    setDelay(event.target.value);
  };

  const handleUnitChange = (event) => {
    setTimeUnit(event.target.value);
  };

  return (
    <S.Container>
      <S.Content>
        <S.Title>Nova campanha phishing</S.Title>
        <S.EmailDistribution>
          <S.Field>
            <S.Checkbox
              type="checkbox"
              checked={isLimitChecked}
              onChange={handleCheckboxChange}
            />
            <label>Limitar o envio de emails?</label>
          </S.Field>
          {isLimitChecked && (
            <>
              <S.Field>
                <label>Limitar envios a:</label>
                <S.Input
                  type="number"
                  value={emailLimit}
                  onChange={handleLimitChange}
                />
              </S.Field>
              <S.Field>
                <label>Delay:</label>
                <S.Input
                  type="number"
                  value={delay}
                  onChange={handleDelayChange}
                />
                <S.Select value={timeUnit} onChange={handleUnitChange}>
                  <option>Segundos</option>
                  <option>Minutos</option>
                  <option>Horas</option>
                </S.Select>
              </S.Field>
            </>
          )}
        </S.EmailDistribution>
        <S.Finalize>
          <S.Title>Finalizar?</S.Title>
          <S.Description>
            Antes de finalizar por completo, você irá conferir todos os dados
            que foram inseridos em etapas passadas.
          </S.Description>
          <S.ButtonContainer>
            <S.Button variant="cancel">Cancelar</S.Button>
            <S.Button variant="previous">Voltar</S.Button>
            <S.Button variant="next">Próximo</S.Button>
          </S.ButtonContainer>
        </S.Finalize>
      </S.Content>
    </S.Container>
  );
}

export default Criacao4;
