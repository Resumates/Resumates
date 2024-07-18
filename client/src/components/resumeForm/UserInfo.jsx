import React, { useState, useRef, useEffect } from 'react';
import addImg from '../../asset/images/icon-addCircle.svg';
import ModalCrop from '../Modal/ModalCrop';
import { InfoTitle, ResumeSection } from '../../style/CreateResumeStyle';
import styled from 'styled-components';

export default function UserInfo({ setFormData, formData, setResumeDetail }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);
  const [information, setInfomation] = useState({
    name: '',
    image: croppedImage,
    birth: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
  });
  console.log(information);

  const handleChange = (e) => {
    setInfomation({ ...information, [e.target.name]: e.target.value });
    setFormData((prevData) => ({ ...prevData, ...information }));
    setResumeDetail(formData);
  };

  useEffect(() => {
    setInfomation({ ...information, ['image']: croppedImage });
    setFormData((prevData) => ({ ...prevData, ...information }));
    setResumeDetail(formData);
  }, [croppedImage]);

  return (
    <>
      <ResumeSection>
        <InfoTitle>인적사항</InfoTitle>
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
            <InputArea className='name'>
              <UserLabel htmlFor='name'>이름</UserLabel>
              <UserInput type='text' id='name' name='name' onChange={handleChange} />
            </InputArea>
            <InputArea className='birth'>
              <UserLabel htmlFor='birth'>생년월일</UserLabel>
              <UserInput type='text' id='birth' name='birth' onChange={handleChange} />
            </InputArea>
            <InputArea className='gender'>
              <UserLabel htmlFor='gender'>성별</UserLabel>
              <UserInput type='text' id='gender' name='gender' onChange={handleChange} />
            </InputArea>
            <InputArea className='phone'>
              <UserLabel htmlFor='phone'>휴대폰 번호</UserLabel>
              <UserInput type='text' id='phone' name='phone' onChange={handleChange} />
            </InputArea>
            <InputArea className='email'>
              <UserLabel htmlFor='email'>이메일</UserLabel>
              <UserInput type='email' id='email' name='email' onChange={handleChange} />
            </InputArea>
            <InputArea className='address'>
              <UserLabel htmlFor='address'>주소</UserLabel>
              <UserInput type='text' id='address' name='address' onChange={handleChange} />
            </InputArea>
          </Info>
        </InfoCont>
      </ResumeSection>
      {modalOpen && (
        <ModalCrop
          croppedImage={croppedImage}
          setModalOpen={setModalOpen}
          setCroppedImage={setCroppedImage}
          information={information}
          setInfomation={setInfomation}
        />
      )}
    </>
  );
}

const InputArea = styled.div`
  border: 1px solid #acacac;
  padding: 10px 8px;
  border-radius: 0.5rem;
  height: 60px;
  box-sizing: border-box;
  font-size: 1.2rem;
  box-sizing: border-box;
  overflow: hidden;
`;

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
