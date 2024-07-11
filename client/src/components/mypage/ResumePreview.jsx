import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import styled from 'styled-components';
import ResumeNormalA4 from '../../components/resumeTamplate/A4/ResumeNormalA4';
import ResumeSimpleA4 from '../../components/resumeTamplate/A4/ResumeSimpleA4';
import ResumeCasualA4 from '../../components/resumeTamplate/A4/ResumeCasualA4';
import ModalDelete from '../Modal/ModalDelete';

export default function ResumePreview({ resume, setSelectedResume }) {
  const componentRef = useRef(null);
  const resumeId = resume._id;
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate('');

  return (
    <>
      {resume && (
        <ResumeDetail>
          <div ref={componentRef}>
            {resume.structure.template_type === 'normal' && (
              <ResumeNormalA4 resumeDetail={resume} />
            )}
            {resume.structure.template_type === 'simple' && (
              <ResumeSimpleA4 resumeDetail={resume} />
            )}
            {resume.structure.template_type === 'casual' && (
              <ResumeCasualA4 resumeDetail={resume} />
            )}
          </div>
          <ButtonContainer>
            <LargeButton onClick={() => navigate(`/resume/edit/${resumeId}`)}>수정하기</LargeButton>
            <LargeButton onClick={() => setModalOpen(!modalOpen)}>삭제하기</LargeButton>
            <ReactToPrint
              trigger={() => <LargeButton type='button'>저장/인쇄하기</LargeButton>}
              content={() => componentRef.current}
              pageStyle='@page { size: A4; ratio:100%; }'
            />
            {modalOpen && (
              <ModalDelete
                resumeId={resumeId}
                setModalOpen={setModalOpen}
                setSelectedResume={setSelectedResume}
              />
            )}
          </ButtonContainer>
        </ResumeDetail>
      )}
    </>
  );
}

const ResumeDetail = styled.div`
  width: 800px;
  min-height: 1130px;
  background-color: #ffffff;
  position: relative;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 10rem;
`;

const LargeButton = styled.button`
  margin: 5px 0;
  background: var(--mainColor);
  color: #ffffff;
  border: none;
  padding: 20px;
  vertical-align: center;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
`;
