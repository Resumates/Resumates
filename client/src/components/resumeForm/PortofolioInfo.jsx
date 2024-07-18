import React, { useState } from 'react';
import styled from 'styled-components';

function PortofolioInfo() {
  const [portfolios, setPortfolios] = useState([{ id: 1, url: '' }]);

  const addPortfolio = () => {
    setPortfolios([...portfolios, { id: portfolios.length + 1, url: '' }]);
  };

  const removePortfolio = (id) => {
    setPortfolios(portfolios.filter((portfolio) => portfolio.id !== id));
  };

  const handleInputChange = (id, value) => {
    const updatedPortfolios = portfolios.map((portfolio) =>
      portfolio.id === id ? { ...portfolio, url: value } : portfolio,
    );
    setPortfolios(updatedPortfolios);
  };

  return (
    <Container>
      <Title>포트폴리오</Title>
      {portfolios.map((portfolio) => (
        <InputContainer key={portfolio.id}>
          <Label>
            <Input
              type='text'
              value={portfolio.url}
              onChange={(e) => handleInputChange(portfolio.id, e.target.value)}
              placeholder='포트폴리오 URL'
            />
          </Label>
          {portfolios.length > 1 && (
            <RemoveButton onClick={() => removePortfolio(portfolio.id)}>제거</RemoveButton>
          )}
        </InputContainer>
      ))}
      <ButtonContainer>
        <AddButton onClick={addPortfolio}>
          <span>+</span> 추가
        </AddButton>
      </ButtonContainer>
    </Container>
  );
}

export default PortofolioInfo;

const Container = styled.div`
  width: 650px;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 10px;
  margin-left: 20px;
  padding: 20px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 16px;
  color: #04438b;
  margin-bottom: 10px;
`;

const InputContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  flex: 1;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: #04438b;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;

  span {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
`;

const RemoveButton = styled.button`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  color: red;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
`;
