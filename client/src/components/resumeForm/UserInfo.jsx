import React, { useState, useRef } from 'react';
import { profileInfo as initialProfileInfo } from '../../data/profileInfoData';
import { ContentItem } from '../../components/resumeForm/ContentItem';
import addImg from '../../asset/images/icon-addCircle.svg';
import ModalCrop from '../Modal/ModalCrop';
import { InfoTitle, ResumeSection, InfoCont, ProfileImgArea } from '../../style/CreateResumeStyle';

export default function UserInfo() {
  // 상태 관리
  const [profileInfo] = useState(initialProfileInfo);
  const [selectedOptions, setSelectedOptions] = useState({});
  const info = profileInfo[0];
  const [modalOpen, setModalOpen] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);
  console.log(croppedImage);

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

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
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
                handleChange={handleChange}
              />
            </div>
          ))}
        </InfoCont>
      </ResumeSection>
      {modalOpen && (
        <ModalCrop
          croppedImage={croppedImage}
          setModalOpen={setModalOpen}
          setCroppedImage={setCroppedImage}
        />
      )}
    </>
  );
}
