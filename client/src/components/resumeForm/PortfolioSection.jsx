import React, { useState, useEffect } from 'react';
import { InfoTitle, UserProfile, PortfolioItem } from '../../style/CreateResumeStyle';
import { AddButton } from '../../components/common/AddButton';
import { ReactComponent as DeleteBtn } from '../../asset/images/icon-deleteBtn.svg';
import styled from 'styled-components';

const PortfolioSection = ({ setFormData, formData, setResumeDetail }) => {
  const prevPortfolio = formData.structure.content.portfolio;
  const [portfolioList, setPortfolioList] = useState([]);
  const [portfolio, setPortfolio] = useState('');

  useEffect(() => {
    if (prevPortfolio) setPortfolioList(prevPortfolio);
  }, [prevPortfolio]);

  const handleChange = (e) => {
    e.preventDefault();
    const newPortfolio = e.target.value;
    console.log(newPortfolio);
    console.log([...prevPortfolio, newPortfolio]);
    setPortfolio(e.target.value);
  };

  const addPortfolioItem = () => {
    const updatedPortfolioList = [...portfolioList, portfolio];
    setPortfolioList(updatedPortfolioList);
    updateFormData(updatedPortfolioList);
    setPortfolio('');
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
          portfolio: [...updatedPortfolioList],
        },
      },
    }));
  };

  useEffect(() => {
    setResumeDetail(formData);
  }, [portfolio, portfolioList, formData, setResumeDetail]);

  return (
    <>
      <InfoTitle>포트폴리오</InfoTitle>
      {portfolioList?.length > 0 && (
        <>
          {portfolioList.map((item, index) => (
            <PortfolioItem>
              <InputArea className='portfolioURL'>
                <UserLabel htmlFor='portfolioURL'>포트폴리오 URL</UserLabel>
                <UserInput type='text' value={item} name='portfolioURL' readOnly />
              </InputArea>
              <DeleteButton onClick={() => deletePortfolioItem(index)}>
                <DeleteBtn width='35px' height='35px' fill='#D9D9D9' />
              </DeleteButton>
            </PortfolioItem>
          ))}
        </>
      )}
      <PortfolioItem>
        <InputArea className='portfolioURL'>
          <UserLabel htmlFor='portfolioURL'>포트폴리오 URL</UserLabel>
          <UserInput type='text' value={portfolio} name='portfolioURL' onChange={handleChange} />
        </InputArea>
      </PortfolioItem>
      <AddButton onClick={addPortfolioItem} />
    </>
  );
};

export default PortfolioSection;

const InputArea = styled.div`
  border: 1px solid #acacac;
  padding: 10px 8px;
  border-radius: 0.5rem;
  height: 60px;
  box-sizing: border-box;
  font-size: 1.2rem;
  box-sizing: border-box;
  overflow: hidden;
  flex-grow: 1;
`;

const UserLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  margin-left: 2px;
  color: #acacac;
`;

const UserInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  font-size: 1.6rem;
  outline: none;
`;

const DeleteButton = styled.button`
  grid-area: 1/6/1/7;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: -30px;
`;
