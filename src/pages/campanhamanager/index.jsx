import React, { useState } from 'react';
import { Search } from 'lucide-react';
import {
  Container,
  Title,
  SearchContainer,
  CampaignsTable,
  CreateButton,
} from './styled';

const campanhamanager = () => {
  const originalCampaigns = [
    { name: 'BlackBeltit', date: '30/05/2024' },
    { name: 'Campaign2', date: '15/04/2024' },
    { name: 'Campaign3', date: '01/02/2024' },
    { name: 'Campaign4', date: '20/11/2023' },
  ];

  const [campaignName, setCampaignName] = useState('');
  const [filteredCampaigns, setFilteredCampaigns] = useState(originalCampaigns);

  const handleSearch = (searchTerm) => {
    if (searchTerm === '') {
      setFilteredCampaigns(originalCampaigns);
    } else {
      const filtered = originalCampaigns.filter((campaign) =>
        campaign.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredCampaigns(filtered);
    }
  };

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setCampaignName(searchTerm);
    handleSearch(searchTerm);
  };

  return (
    <Container>
      <Title>Qual campanha quer analisar?</Title>
      <SearchContainer>
        <input
          type="text"
          placeholder="Procurar campanha..."
          value={campaignName}
          onChange={handleInputChange}
        />
        <button>
          <Search size={16} />
        </button>
      </SearchContainer>
      <CampaignsTable>
        <thead>
          <tr>
            <th>Nome da Campanha</th>
            <th>Data de Criação</th>
          </tr>
        </thead>
        <tbody>
          {filteredCampaigns.map((campaign, index) => (
            <tr key={index}>
              <td>{campaign.name}</td>
              <td>{campaign.date}</td>
            </tr>
          ))}
        </tbody>
      </CampaignsTable>
      <CreateButton>Criar nova campanha</CreateButton>
    </Container>
  );
};

export default campanhamanager;
