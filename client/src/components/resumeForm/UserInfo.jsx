import React, { useState } from 'react';
import {
  InfoTitle,
  ResumeContainer,
  ResumeSection,
  ResumeWrap,
  UserProfile,
} from '../../style/CreateResumeStyle';
import { profileInfo as initialProfileInfo } from '../../data/profileInfoData';
import { useRef } from 'react';
import { ContentItem } from '../../components/resumeForm/ContentItem';
import styled from 'styled-components';
import addImg from '../../asset/images/icon-addCircle.svg';
import ModalCrop from '../Modal/ModalCrop';

export default function UserInfo() {
  // 상태 관리
  const [profileInfo] = useState(initialProfileInfo);
  const [selectedOptions, setSelectedOptions] = useState({});
  const info = profileInfo[0];
  const [modalOpen, setModalOpen] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);

  const handleOptionSelect = (sectionId, contentId, optionId) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [sectionId]: {
        ...prevOptions[sectionId],
        [contentId]: optionId,
      },
    }));
  };

  // 아이디 추가 함수
  const getUserProfileId = (info, contentId) => {
    if (info.id === 'qualification' && selectedOptions[info.id]?.[contentId]) {
      return `${info.id} ${selectedOptions[info.id][contentId]}`;
    }
    return info.id;
  };

  // 각 profileInfo 항목에 대한 ref를 생성
  const refs = useRef(
    profileInfo.reduce((acc, info) => {
      acc[info.id] = React.createRef();
      return acc;
    }, {}),
  );

  return (
    <ResumeWrap>
      <ResumeContainer>
        <ResumeSection key={info.id} ref={refs.current[info.id]}>
          <InfoTitle>{info.label}</InfoTitle>
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
            {info.content.map((contentItem) => (
              <div style={{ marginTop: '-20px' }} key={contentItem.id}>
                <ContentItem
                  key={contentItem.id}
                  info={info}
                  contentItem={contentItem}
                  getUserProfileId={getUserProfileId}
                  handleOptionSelect={handleOptionSelect}
                  selectedOptions={selectedOptions}
                />
              </div>
            ))}
          </InfoCont>
        </ResumeSection>
      </ResumeContainer>
      {modalOpen && (
        <ModalCrop
          croppedImage={croppedImage}
          setModalOpen={setModalOpen}
          setCroppedImage={setCroppedImage}
        />
      )}
    </ResumeWrap>
  );
}

const InfoCont = styled.div`
  display: flex;
  padding: 20px 0;
  gap: 1rem;
  box-sizing: border-box;
`;

const ProfileImgArea = styled.button`
  width: 150px;
  height: 200px;
  overflow: hidden;
  border-radius: 0.5rem;
  border: 1px solid #acacac;
  box-sizing: border-box;
  margin-left: 1rem;
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
    width: 150px;
  }
`;
