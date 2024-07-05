import React, { useEffect, useState } from 'react';
import { getResumeDetail } from '../../api/commonAPI';
import { useParams } from 'react-router-dom';
//import ResumeSimple from './ResumeSimple';
//import ResumeSimple from '../../components/resumeTamplate/ResumeSimple';
//import ResumeNormal from './ResumeNormal';

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
      ResumeDetail
      {resumeDetail && <ResumeSimple   resumeDetail={resumeDetail} />}
    </div>
  );
}
