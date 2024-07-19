import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const PortfolioSection = ({ portfolio = [], setFormData }) => {
  const [portfolioURL, setPortfolioURL] = useState('');

  const handleAddPortfolio = () => {
    if (portfolioURL.trim()) {
      setFormData((prevData) => ({
        ...prevData,
        structure: {
          ...prevData.structure,
          content: {
            ...prevData.structure.content,
            portfolio: [...prevData.structure.content.portfolio, { portfolioURL }],
          },
        },
      }));
      setPortfolioURL('');
    }
  };

  const handleDeletePortfolio = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      structure: {
        ...prevData.structure,
        content: {
          ...prevData.structure.content,
          portfolio: prevData.structure.content.portfolio.filter((_, i) => i !== index),
        },
      },
    }));
  };

  return (
    <SectionContainer>
      <SectionTitle>포트폴리오</SectionTitle>
      <PortfolioList>
        {portfolio.map((item, index) => (
          <PortfolioItem key={index}>
            <PortfolioText>{item.portfolioURL}</PortfolioText>
            <DeletePortfolioButton onClick={() => handleDeletePortfolio(index)}>
              삭제
            </DeletePortfolioButton>
          </PortfolioItem>
        ))}
      </PortfolioList>
      <InputContainer>
        <PortfolioInput
          type='text'
          value={portfolioURL}
          placeholder='포트폴리오 추가'
          onChange={(e) => setPortfolioURL(e.target.value)}
        />
        <Button type='button' padding='8px 8px' fontSize='16px' onClick={handleAddPortfolio}>
          추가
        </Button>
      </InputContainer>
    </SectionContainer>
  );
};

export default PortfolioSection;

const SectionContainer = styled.div`
  margin-top: 20px;
`;

const SectionTitle = styled.h4`
  font-size: 1.25em;
  margin-bottom: 10px;
`;

const PortfolioList = styled.div`
  margin-top: 10px;
`;

const PortfolioItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  border: 1px solid #acacac;
  border-radius: 4px;
  padding: 8px;
`;

const PortfolioText = styled.span`
  flex-grow: 1;
  margin-right: 10px;
`;

const DeletePortfolioButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const PortfolioInput = styled.input`
  flex: 1;
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #acacac;
  border-radius: 4px;
  box-sizing: border-box;
`;
