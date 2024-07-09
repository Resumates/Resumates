import React, { useEffect, useState } from 'react';
import { getResumeDetail } from '../../api/commonAPI';
import { useParams } from 'react-router-dom';
import ResumeNormal from '../../components/resumeTamplate/ResumeNormal';
import ResumeSimple from '../../components/resumeTamplate/ResumeSimple';
import ResumeCasual from '../../components/resumeTamplate/ResumeCasual';
import { ButtonContainer, TemplateSection, LargeButton } from '../../style/MyPageStyle';
export default function ResumeDetail() {
  const { id } = useParams();
  const [resumeDetail, setResumeDetail] = useState(null);

  useEffect(() => {
    const fetchResumeDetail = async (id) => {
      try {
        const data = await getResumeDetail(id);
        setResumeDetail(data);
      } catch (error) {
        console.error('이력서 상세 페이지를 불러오지 못했습니다.', error);
      }
    };

    fetchResumeDetail(id);
  }, [id]);

  console.log(resumeDetail);

  return (
    <div>
      <div>
        <TemplateSection>
          {resumeDetail && (
            <div>
              {resumeDetail.structure.template_type === 'normal' && (
                <ResumeNormal resumeDetail={resumeDetail} />
              )}
              {resumeDetail.structure.template_type === 'simple' && (
                <ResumeSimple resumeDetail={resumeDetail} />
              )}
              {resumeDetail.structure.template_type === 'casual' && (
                <ResumeCasual resumeDetail={resumeDetail} />
              )}
            </div>
          )}
          <ButtonContainer>
            <LargeButton>수정하기</LargeButton>
            <LargeButton>삭제하기</LargeButton>
            <LargeButton>인쇄하기</LargeButton>
          </ButtonContainer>
        </TemplateSection>
      </div>
    </div>
  );
}
