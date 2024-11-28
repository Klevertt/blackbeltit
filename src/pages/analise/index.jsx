import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
} from 'recharts';
import {
  Container,
  Title,
  Header,
  BackButton,
  MetricCard,
  MetricsGrid,
  MetricTitle,
  MetricSubtitle,
  MetricValue,
  BottomGrid,
  Table,
  ChartContainer,
} from './styled';

const analise = () => {
  const chartData = [
    { name: 'TI', value: 25, color: '#0066FF' },
    { name: 'Marketing', value: 35, color: '#FF00FF' },
    { name: 'RH', value: 20, color: '#FF0000' },
    { name: 'Vendas', value: 40, color: '#000000' },
  ];

  const departmentData = [
    { department: 'TI', clicks: 10 },
    { department: 'Marketing', clicks: 35 },
    { department: 'Recursos Humanos', clicks: 35 },
    { department: 'Vendas', clicks: 20 },
  ];

  return (
    <Container>
      <div className="max-w-7xl mx-auto">
        <Header>
          <Title>Análise de Resultados</Title>
          <BackButton>Voltar</BackButton>
        </Header>

        <h2 className="text-xl mb-6">Análise dos Dados - BlackBeltIT</h2>

        <MetricsGrid>
          <MetricCard>
            <MetricTitle>Total de emails enviados</MetricTitle>
            <MetricValue>200</MetricValue>
            <MetricSubtitle>Número total de emails enviados</MetricSubtitle>
          </MetricCard>

          <MetricCard variant="red">
            <MetricTitle>Taxa de abertura</MetricTitle>
            <MetricValue split>
              <span>50%</span>
              <span>100</span>
            </MetricValue>
            <MetricSubtitle>Porcentagem de emails abertos</MetricSubtitle>
          </MetricCard>

          <MetricCard variant="black">
            <MetricTitle>Cliques em links falsos</MetricTitle>
            <MetricValue split>
              <span>50%</span>
              <span>50</span>
            </MetricValue>
            <MetricSubtitle>% dos que abriram o link</MetricSubtitle>
          </MetricCard>

          <MetricCard>
            <MetricTitle>Relatórios de phishing</MetricTitle>
            <MetricValue>100</MetricValue>
            <MetricSubtitle>Número de pessoas que reportaram</MetricSubtitle>
          </MetricCard>
        </MetricsGrid>

        <BottomGrid>
          <ChartContainer>
            <h3 className="text-lg font-semibold mb-4">Gráfico da campanha</h3>
            <BarChart width={400} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="value">
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>

          <ChartContainer>
            <h3 className="text-lg font-semibold mb-4">Cliques em links por setor</h3>
            <Table>
              <thead>
                <tr>
                  <th>Departamento</th>
                  <th>N° de cliques</th>
                </tr>
              </thead>
              <tbody>
                {departmentData.map((item, index) => (
                  <tr key={`row-${index}`}>
                    <td>{item.department}</td>
                    <td>{item.clicks}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </ChartContainer>
        </BottomGrid>
      </div>
    </Container>
  );
};

export default analise;
