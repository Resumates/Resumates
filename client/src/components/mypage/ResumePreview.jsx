import React from 'react';
import styled from 'styled-components';
import ResumeNormal from '../../components/resumeTamplate/ResumeNormal';
import ResumeSimple from '../../components/resumeTamplate/ResumeSimple';
import ResumeCasual from '../../components/resumeTamplate/ResumeCasual';
import { deleteResumeAPI } from '../../api/resumeAPI';

export default function ResumePreview({ resume, setSelectedResume }) {
  const resumeId = resume._id;
  console.log(resumeId);

  const handleDelete = async () => {
    console.log('실행');
    const deleteResume = await deleteResumeAPI(resumeId);
    if (deleteResume) {
      alert('이력서가 삭제되었습니다.');
      setSelectedResume(null);
      window.scrollTo(0, 0);
    }
    console.log(deleteResume);
  };

  return (
    <>
      {resume && (
        <ResumeDetail>
          {resume.structure.template_type === 'normal' && <ResumeNormal resumeDetail={resume} />}
          {resume.structure.template_type === 'simple' && <ResumeSimple resumeDetail={resume} />}
          {resume.structure.template_type === 'casual' && <ResumeCasual resumeDetail={resume} />}
          <ButtonContainer>
            <LargeButton>수정하기</LargeButton>
            <LargeButton onClick={handleDelete}>삭제하기</LargeButton>
            <LargeButton>인쇄하기</LargeButton>
          </ButtonContainer>
        </ResumeDetail>
      )}
    </>
  );
}

const ResumeDetail = styled.div`
  width: 566px;
  min-height: 752px;
  background-color: white;
  position: relative;
`;

const ButtonContainer = styled.div`
  position: absolute;
  width: 300px;
  right: 0;
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 10rem;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #04438b;
  cursor: pointer;
  font-size: 16px;
  line-height: 19px;
  color: #04438b;
  margin: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 0;
`;

const LargeButton = styled(Button)`
  background: #04438b;
  color: #ffffff;
  border: none;
  padding: 20px 0;
  margin: 0;
`;
