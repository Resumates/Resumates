import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import { createShouldForwardProp } from '@styled-system/should-forward-prop';

export default function MyResumeList({ resume, setSelectedResume }) {
  const handleClickResum = (item) => {
    setSelectedResume(item);
    window.scrollTo(0, 0);
  };
  return (
    <MyResumeListCont>
      <ReusumeList>
        <MyResume>내 이력서</MyResume>
        {resume?.map((item) => {
          const templateType = item.structure.template_type;
          const resumeTitle = item.structure.title;
          return (
            <li key={item._id}>
              <ResumeItem onClick={() => handleClickResum(item)} templateType={templateType}>
                <TemplateType>{templateType.toUpperCase()}</TemplateType>
                <ResumeTitle>{resumeTitle}</ResumeTitle>
                <ResumePriveiwBtn type='button'>이력서 미리보기</ResumePriveiwBtn>
              </ResumeItem>
            </li>
          );
        })}
      </ReusumeList>
    </MyResumeListCont>
  );
}

const shouldForwardProp = createShouldForwardProp(['color']);

const StyledResumeItem = styled('div').withConfig({
  shouldForwardProp,
})`
  background-color: ${(props) =>
    props.templateType === 'casual'
      ? '#637DCB'
      : props.templateType === 'normal'
        ? '#027BFF'
        : '#3582A9'};
  color: white;
  padding: 2.4rem 3.4rem;
  margin-bottom: 4rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ResumeItem = ({ templateType, children, onClick }) => {
  return (
    <StyledResumeItem templateType={templateType} onClick={onClick}>
      {children}
    </StyledResumeItem>
  );
};

ResumeItem.propTypes = {
  templateType: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

const MyResumeListCont = styled.div`
  max-width: 34rem;
  position: absolute;
  left: 0;
`;

const ReusumeList = styled.ul`
  background-color: white;
  padding: 3rem 2.5rem;
`;

const MyResume = styled.p`
  padding-left: 1rem;
  margin-bottom: 1.4rem;
  font-size: 1.6rem;
  font-weight: 500;
`;

const TemplateType = styled.p`
  letter-spacing: 0.3rem;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.3;
  color: white;
`;
const ResumeTitle = styled(TemplateType)`
  letter-spacing: 0.1rem;

  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ResumePriveiwBtn = styled.button`
  font-size: 1.6rem;
  padding: 1.2rem 6rem;
  background-color: white;
  border-radius: 2rem;
  font-weight: 500;
`;
