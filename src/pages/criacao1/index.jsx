import React, { useState } from 'react';
import {
  FormContainer,
  FormTitle,
  FormGroup,
  Label,
  Input,
  RadioGroup,
  RadioLabel,
  RadioInput,
  Button,
  ButtonContainer,
} from './styled';

function Criacao1() {
  const [campaignName, setCampaignName] = useState('');
  const [startType, setStartType] = useState('now');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <FormContainer>
      <FormTitle>Nova campanha phishing</FormTitle>

      <FormGroup>
        <div>
          <Label>Nome da campanha:</Label>
          <Input
            type="text"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
          />
        </div>

        <div>
          <Label>Quando começar?</Label>
          <RadioGroup>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="startType"
                value="now"
                checked={startType === 'now'}
                onChange={(e) => setStartType(e.target.value)}
              />
              Agora
            </RadioLabel>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="startType"
                value="later"
                checked={startType === 'later'}
                onChange={(e) => setStartType(e.target.value)}
              />
              Depois (tempo em horas)
            </RadioLabel>
          </RadioGroup>
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <Input
              type="text"
              placeholder="selecione a data início"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div style={{ flex: 1 }}>
            <Input
              type="text"
              placeholder="selecione a data término"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <ButtonContainer>
          <Button variant="cancel">Cancelar</Button>
          <Button variant="next">Próximo</Button>
        </ButtonContainer>
      </FormGroup>
    </FormContainer>
  );
}

export default Criacao1;
