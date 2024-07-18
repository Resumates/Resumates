import React, { useState } from 'react';
import {
  InfoTitle,
  ResumeContainer,
  ResumeSection,
  ResumeWrap,
} from '../../style/CreateResumeStyle';
import { profileInfo as initialProfileInfo } from '../../data/profileInfoData';
import { useRef } from 'react';
import { ContentItem } from '../../components/resumeForm/ContentItem';
import styled from 'styled-components';

export default function UserInfo() {
  // 상태 관리
  const [profileInfo] = useState(initialProfileInfo);
  const [selectedOptions, setSelectedOptions] = useState({});
  const info = profileInfo[0];
  console.log(profileInfo);
  console.log(profileInfo[0]);

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
            {info.content.map((contentItem) => (
              <ContentItem
                key={contentItem.id}
                info={info}
                contentItem={contentItem}
                getUserProfileId={getUserProfileId}
                handleOptionSelect={handleOptionSelect}
                selectedOptions={selectedOptions}
              />
            ))}
          </InfoCont>
        </ResumeSection>
      </ResumeContainer>
    </ResumeWrap>
  );
}

const InfoCont = styled.div`
  /* display: flex; */
  border: 1px solid #eee;
`;
