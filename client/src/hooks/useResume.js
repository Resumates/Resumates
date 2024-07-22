import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

export const useResume = (initialProfileInfo, type) => {
  const userId = localStorage.getItem('userId');
  const [profileInfo, setProfileInfo] = useState(initialProfileInfo);
  const [openTemplateList, setOpenTemplateList] = useState(false);
  //   const { type } = useParams();
  const [resumeDetail, setResumeDetail] = useState(null);
  const [formData, setFormData] = useState({
    userId: userId,
    structure: {
      title: '',
      template_type: type,
      content: {
        workExperience: [],
        skills: [],
        activity: [],
        qualification: [],
        portfolio: [],
      },
    },
  });

  const modalRef = useRef(null);

  useEffect(() => {
    setResumeDetail(formData);
  }, [formData]);

  // 각 profileInfo 항목에 대한 ref를 생성
  const refs = useRef(
    profileInfo.reduce((acc, info) => {
      acc[info.id] = React.createRef();
      return acc;
    }, {}),
  );

  // 특정 스크롤로 이동
  const scrollToItem = (id) => {
    if (refs.current[id] && refs.current[id].current) {
      refs.current[id].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenTemplateList(false);
      }
    };

    if (openTemplateList) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openTemplateList]);

  const saveResume = async () => {
    try {
      const response = await axios.post('http://localhost:5000/resume', formData);
      console.log('Resume saved:', response.data);
    } catch (error) {
      console.error('Error saving resume:', error);
    }
  };

  return {
    profileInfo,
    openTemplateList,
    resumeDetail,
    formData,
    modalRef,
    refs,
    setProfileInfo,
    setOpenTemplateList,
    setResumeDetail,
    setFormData,
    scrollToItem,
    saveResume,
  };
};
