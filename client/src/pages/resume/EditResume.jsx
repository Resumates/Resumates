import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getResumeDetail } from '../../api/commonAPI';

export default function EditResume() {
  const { resumeId } = useParams();
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const resumeData = await getResumeDetail(resumeId);
      console.log(resumeData);
      setResume(resumeData);
    };
    fetchData();
  }, [resumeId]);

  return <div>EditResume : {resumeId}</div>;
}
