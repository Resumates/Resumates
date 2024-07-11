import React, { useEffect, useState } from 'react';
import { getMyResumeList } from '../../api/commonAPI';
import { Container } from '../../style/Container';
import { H2 } from '../../style/CommonStyle';
import { ResumeCont, TemplateSection } from '../../style/MyPageStyle';
import MyResumeList from '../../components/mypage/MyResumeList';
import ResumePreview from '../../components/mypage/ResumePreview';

export default function Mypage() {
  const userId = window.localStorage.getItem('userId');
  const [resume, setResume] = useState(null);
  const [selectedResume, setSelectedResume] = useState('');

  useEffect(() => {
    const fetchResume = async () => {
      const myResumeList = await getMyResumeList(userId);
      setResume(myResumeList);
    };
    fetchResume();
  }, [userId, resume]);

  return (
    <Container>
      <ResumeCont>
        <H2>마이페이지</H2>
        <MyResumeList resume={resume} setSelectedResume={setSelectedResume} />
        <TemplateSection>
          {selectedResume && (
            <ResumePreview resume={selectedResume} setSelectedResume={setSelectedResume} />
          )}
        </TemplateSection>
      </ResumeCont>
    </Container>
  );
}
