import React, { useState, useEffect } from 'react';
import addImg from '../../asset/images/icon-addCircle.svg';
import ModalCrop from '../Modal/ModalCrop';
import { InfoTitle } from '../../style/CreateResumeStyle';
import styled from 'styled-components';
import InputArea from './UserInfoInput';

export default function UserInfo({
  prevUser,
  setPrevUser,
  setFormData,
  formData,
  setResumeDetail,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [croppedImage, setCroppedImage] = useState('');
  const [information, setInformation] = useState({
    name: '',
    image: croppedImage,
    birth: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
  });

  useEffect(() => {
    if (prevUser) {
      setInformation({
        name: prevUser.name,
        image: croppedImage,
        birth: prevUser.birth,
        gender: prevUser.gender,
        phone: prevUser.phone,
        email: prevUser.email,
        address: prevUser.address,
      });
    }
  }, [prevUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedInfo = { ...information, [name]: value };
    setInformation(updatedInfo);
    setPrevUser(updatedInfo);
    setFormData((prevData) => ({ ...prevData, ...updatedInfo }));
    setResumeDetail((prevDetail) => ({ ...prevDetail, ...updatedInfo }));
  };

  useEffect(() => {
    setInformation({ ...information, image: croppedImage });
    setFormData((prevData) => ({ ...prevData, ...information }));
    setResumeDetail(formData);
  }, [croppedImage]);

  return (
    <>
      <InfoTitle id='infoArea'>인적사항</InfoTitle>
      <InfoCont>
        <ProfileImgArea onClick={() => setModalOpen(!modalOpen)}>
          {croppedImage ? (
            <img src={croppedImage} alt='추가' className='profileImg' />
          ) : (
            <>
              <img src={addImg} alt='추가' className='defaultImg' />
              <p>사진등록하기</p>
            </>
          )}
        </ProfileImgArea>
        <Info>
          <InputArea
            label='이름'
            id='name'
            name='name'
            type='text'
            onChange={handleChange}
            value={prevUser?.name}
            className='name'
          />
          <InputArea
            label='생년월일'
            id='birth'
            name='birth'
            type='text'
            onChange={handleChange}
            value={prevUser?.birth.slice(0, 10).replaceAll('-', '.')}
            className='birth'
          />
          <InputArea
            label='성별'
            id='gender'
            name='gender'
            type='text'
            onChange={handleChange}
            value={prevUser?.gender}
          />
          <InputArea
            label='휴대폰 번호'
            id='phone'
            name='phone'
            type='text'
            onChange={handleChange}
            value={prevUser?.phone}
            className='phone'
          />
          <InputArea
            label='이메일'
            id='email'
            name='email'
            type='email'
            onChange={handleChange}
            value={prevUser?.email}
            className='email'
          />
          <InputArea
            label='주소'
            id='address'
            name='address'
            type='text'
            onChange={handleChange}
            value={prevUser?.address}
            className='address'
          />
        </Info>
      </InfoCont>
      {modalOpen && (
        <ModalCrop
          croppedImage={croppedImage}
          setModalOpen={setModalOpen}
          setCroppedImage={setCroppedImage}
          information={information}
          setInformation={setInformation}
        />
      )}
    </>
  );
}

const Info = styled.div`
  width: 340px;
  height: 204px;
  display: grid;
  font-size: 1.2rem;
  gap: 12px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);

  .name {
    grid-area: 1/1/2/3;
  }
  .birth {
    grid-area: 1/3/2/5;
  }
  .gender {
    grid-area: 1/5/2/6;
  }
  .phone {
    grid-area: 2/1/3/4;
  }
  .email {
    grid-area: 2/4/3/6;
  }
  .address {
    grid-area: 3/1/4/6;
  }
`;

const InfoCont = styled.div`
  display: flex;
  padding-top: 20px;
  gap: 12px;
  box-sizing: border-box;
`;

const ProfileImgArea = styled.button`
  width: 153px;
  height: 204px;
  overflow: hidden;
  border-radius: 0.5rem;
  border: 1px solid #acacac;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.4rem;
  cursor: pointer;

  .defaultImg {
    width: 30px;
  }

  .profileImg {
    width: 153px;
  }
`;
