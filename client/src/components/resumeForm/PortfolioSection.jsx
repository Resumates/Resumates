import React, { useState, useEffect } from 'react';
import { UserProfile } from '../../style/CreateResumeStyle';
import { InputField } from './InputField';
import { AddButton } from '../../components/common/AddButton';
import { DeleteButton } from '../../components/common/DeleteButton';

const PortfolioSection = ({ info, setFormData, setResumeDetail, formData }) => {
  const [portfolio, setPortfolio] = useState({ portfolioURL: '' });
  const [portfolioList, setPortfolioList] = useState(formData.structure.content.portfolio || []);

  const handleChange = (e) => {
    setPortfolio({ ...portfolio, [e.target.name]: e.target.value });
  };

  const addPortfolioItem = () => {
    const updatedPortfolioList = [...portfolioList, portfolio];
    setPortfolioList(updatedPortfolioList);
    setFormData((prevData) => ({
      ...prevData,
      structure: {
        ...prevData.structure,
        content: {
          ...prevData.structure.content,
          portfolio: updatedPortfolioList,
        },
      },
    }));
    setPortfolio({ portfolioURL: '' });
  };

  const deletePortfolioItem = (index) => {
    const updatedPortfolioList = portfolioList.filter((_, i) => i !== index);
    setPortfolioList(updatedPortfolioList);
    setFormData((prevData) => ({
      ...prevData,
      structure: {
        ...prevData.structure,
        content: {
          ...prevData.structure.content,
          portfolio: updatedPortfolioList,
        },
      },
    }));
  };

  useEffect(() => {
    setResumeDetail(formData);
  }, [portfolioList, formData, setResumeDetail]);

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
