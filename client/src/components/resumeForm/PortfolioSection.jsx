import React, { useState } from 'react';
import { UserProfile } from '../../style/CreateResumeStyle';
import { InputField } from './InputField';
import { AddButton } from '../../components/common/AddButton';
import { DeleteButton } from '../../components/common/DeleteButton';

const PortfolioSection = ({ info, formData, handleInputChange }) => {
  const [portfolio, setPortfolio] = useState({ portfolioURL: '' });
  const [portfolioList, setPortfolioList] = useState(formData.portfolio || []);

  const handleChange = (e) => {
    setPortfolio({ ...portfolio, [e.target.name]: e.target.value });
  };

  const addPortfolioItem = () => {
    const updatedPortfolioList = [...portfolioList, portfolio];
    setPortfolioList(updatedPortfolioList);
    handleInputChange('portfolio', 1, 'portfolioList', updatedPortfolioList);
    setPortfolio({ portfolioURL: '' });
  };

  const deletePortfolioItem = (index) => {
    const updatedPortfolioList = portfolioList.filter((_, i) => i !== index);
    setPortfolioList(updatedPortfolioList);
    handleInputChange('portfolio', 1, 'portfolioList', updatedPortfolioList);
  };

  return (
    <UserProfile key={info.id} className={info.id}>
      {portfolioList.map((item, index) => (
        <div key={index} style={{ marginTop: '20px' }}>
          <InputField
            label='포트폴리오 URL'
            type='text'
            name='portfolioURL'
            value={item.portfolioURL}
            readOnly
          />
          <DeleteButton onClick={() => deletePortfolioItem(index)} />
        </div>
      ))}
      <div style={{ marginTop: '20px' }}>
        <InputField
          label='포트폴리오 URL'
          type='text'
          name='portfolioURL'
          value={portfolio.portfolioURL}
          handleChange={handleChange}
        />
      </div>
      <AddButton onClick={addPortfolioItem} />
    </UserProfile>
  );
};

export default PortfolioSection;
