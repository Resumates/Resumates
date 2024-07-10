import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import styled from 'styled-components';
import ResumeNormal from '../../components/resumeTamplate/ResumeNormal';
import ResumeSimple from '../../components/resumeTamplate/ResumeSimple';
import ResumeCasual from '../../components/resumeTamplate/ResumeCasual';
import { deleteResumeAPI } from '../../api/resumeAPI';

export default function ResumePreview({ resume, setSelectedResume }) {
  const componentRef = useRef(null);
  const resumeId = resume._id;

  const handleDelete = async () => {
    const deleteResume = await deleteResumeAPI(resumeId);
    if (deleteResume) {
      alert('이력서가 삭제되었습니다.');
      setSelectedResume(null);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {resume && (
        <ResumeDetail>
          <div ref={componentRef}>
            {resume.structure.template_type === 'normal' && <ResumeNormal resumeDetail={resume} />}
            {resume.structure.template_type === 'simple' && <ResumeSimple resumeDetail={resume} />}
            {resume.structure.template_type === 'casual' && <ResumeCasual resumeDetail={resume} />}
          </div>
          <ButtonContainer>
            <LargeButton>수정하기</LargeButton>
            <LargeButton onClick={handleDelete}>삭제하기</LargeButton>
            <ReactToPrint
              trigger={() => <LargeButton type='button'>인쇄하기</LargeButton>}
              content={() => componentRef.current}
              pageStyle='@page { size: A4; ratio:100%; }'
            />
          </ButtonContainer>
        </ResumeDetail>
      )}
    </>
  );
}

const ResumeDetail = styled.div`
  width: 800px;
  min-height: 1130px;
  background-color: #ab8888;
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
