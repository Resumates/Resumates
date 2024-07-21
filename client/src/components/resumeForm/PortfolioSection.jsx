import React, { useState, useEffect } from 'react';
import { UserProfile } from '../../style/CreateResumeStyle';
import { InputField } from './InputField';
import { AddButton } from '../../components/common/AddButton';
import { DeleteButton } from '../../components/common/DeleteButton';

const PortfolioSection = ({ info, setFormData, formData }) => {
  const [portfolioList, setPortfolioList] = useState([
    ...formData.structure.content.portfolio,
    { portfolioURL: '' },
  ]);

  const handleChange = (e, index) => {
    const updatedPortfolioList = portfolioList.map((item, i) =>
      i === index ? { ...item, [e.target.name]: e.target.value } : item,
    );
    setPortfolioList(updatedPortfolioList);
    updateFormData(updatedPortfolioList);
  };

  const addPortfolioItem = () => {
    const newPortfolio = { portfolioURL: '' };
    const updatedPortfolioList = [...portfolioList, newPortfolio];
    setPortfolioList(updatedPortfolioList);
    updateFormData(updatedPortfolioList);
  };

  const deletePortfolioItem = (index) => {
    const updatedPortfolioList = portfolioList.filter((_, i) => i !== index);
    setPortfolioList(updatedPortfolioList);
    updateFormData(updatedPortfolioList);
  };

  const updateFormData = (updatedPortfolioList) => {
    setFormData((prevData) => ({
      ...prevData,
      structure: {
        ...prevData.structure,
        content: {
          ...prevData.structure.content,
          portfolio: updatedPortfolioList.filter((item) => item.portfolioURL !== ''), // 빈 항목 제외
        },
      },
    }));
  };

  useEffect(() => {
    setPortfolioList([...formData.structure.content.portfolio, { portfolioURL: '' }]);
  }, [formData.structure.content.portfolio]);

  return (
    <UserProfile key={info.id} className={info.id}>
      {portfolioList.map((item, index) => (
        <div key={index} style={{ marginTop: '20px' }}>
          <InputField
            label='포트폴리오 URL'
            type='text'
            name='portfolioURL'
            value={item.portfolioURL}
            handleChange={(e) => handleChange(e, index)}
          />
          {portfolioList.length > 1 && <DeleteButton onClick={() => deletePortfolioItem(index)} />}
        </div>
      ))}
      <AddButton onClick={addPortfolioItem} />
    </UserProfile>
  );
};

export default PortfolioSection;
