import React, { useState } from 'react';
import {
  PageContainer,
  Banner,
  MainContent,
  ContentCard,
  TablesContainer,
  SectorTableContainer,
  EmployeeTableContainer,
  SearchBar,
  SearchInput,
  Table,
  Th,
  Td,
  Button,
  ButtonContainer,
} from './styled';

const Criacao3 = () => {
  const [selectedSector, setSelectedSector] = useState(null);

  const sectors = [
    { id: 1, name: 'Equipe de T.I', company: 'BlackBelt Solutions' },
    { id: 2, name: 'RH', company: 'Accenture' },
  ];

  const employees = {
    1: [
      { nome: 'Joaquim', sobrenome: 'Phoenix', email: 'joker@gmail.com' },
      { nome: 'Bruce', sobrenome: 'Wayne', email: 'batman@gmail.com' },
    ],
    2: [{ nome: 'Oswald', sobrenome: 'Cobblepot', email: 'penguin@gmail.com' }],
  };

  const handleSectorClick = (sectorId) => {
    setSelectedSector(sectorId === selectedSector ? null : sectorId);
  };

  return (
    <PageContainer>
      <Banner>
        <h1 style={{ margin: 0 }}>Nova campanha phishing</h1>
      </Banner>

      <MainContent>
        <ContentCard>
          <SearchBar>
            <SearchInput type="text" placeholder="Procurar colaborador..." />
          </SearchBar>

          <TablesContainer>
            <SectorTableContainer>
              <Table>
                <thead>
                  <tr>
                    <Th>Setor de Empresa</Th>
                  </tr>
                </thead>
                <tbody>
                  {sectors.map((sector) => (
                    <tr key={sector.id}>
                      <Td
                        $clickable
                        $selected={selectedSector === sector.id}
                        onClick={() => handleSectorClick(sector.id)}
                      >
                        {sector.name}
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </SectorTableContainer>

            <EmployeeTableContainer $isVisible={selectedSector !== null}>
              <Table>
                <thead>
                  <tr>
                    <Th>Nome</Th>
                    <Th>Sobrenome</Th>
                    <Th>Email</Th>
                  </tr>
                </thead>
                <tbody>
                  {selectedSector &&
                    employees[selectedSector]?.map((employee) => (
                      <tr key={employee.email}>
                        <Td>{employee.nome}</Td>
                        <Td>{employee.sobrenome}</Td>
                        <Td>{employee.email}</Td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </EmployeeTableContainer>
          </TablesContainer>
        </ContentCard>

        <ButtonContainer>
          <Button variant="cancel">Cancelar</Button>
          <Button variant="previous">Voltar</Button>
          <Button variant="next">Próximo</Button>
        </ButtonContainer>
      </MainContent>
    </PageContainer>
  );
};

export default Criacao3;
