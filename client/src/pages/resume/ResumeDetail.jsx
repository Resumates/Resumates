import React, { useEffect, useState } from 'react';
import { getResumeDetail } from '../../api/commonAPI';
import { useParams } from 'react-router-dom';

export default function ResumeDetail() {
  const { id } = useParams();
  const [resumeDetail, setResumeDetail] = useState(null);

  useEffect(() => {
    const fetchResumeDetail = async (id) => {
      try {
        const data = await getResumeDetail(id);
        setResumeDetail(data);
      } catch (error) {
        console.error('Resume detail fetch failed', error);
      }
    };

    fetchResumeDetail(id);
  }, [id]);

  console.log(resumeDetail);
  return <div>ResumeDetail</div>;
}
