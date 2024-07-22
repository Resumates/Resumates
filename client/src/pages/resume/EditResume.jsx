import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getResumeDetail } from '../../api/commonAPI';
import {
  InfoContainer,
  ResumeContainer,
  ResumeSection,
  ResumeWrap,
  TemplateContainer,
  Template,
  TemplateBtn,
} from '../../style/CreateResumeStyle';
import Button from '../../components/common/Button';

import { profileInfo as initialProfileInfo } from '../../data/profileInfoData';
import { ResumeMenu } from '../../components/resumeForm/ResumeMenu';
import ResumeNormal from '../../components/resumeTamplate/default/ResumeNormal';
import ResumeSimple from '../../components/resumeTamplate/default/ResumeSimple';
import ResumeCasual from '../../components/resumeTamplate/default/ResumeCasual';
import UserInfo from '../../components/resumeForm/UserInfo';
import WorkExperience from '../../components/resumeForm/WorkExperience';
import PortfolioSection from '../../components/resumeForm/PortfolioSection';
import SkillsSection from '../../components/resumeForm/SkillsSection';
import ResumeTitle from '../../components/resumeForm/ResumeTitle';
import Activity from '../../components/resumeForm/Activity';
import Qualification from '../../components/resumeForm/Qualification';
import { editResumeAPI } from '../../api/resumeAPI';

export default function EditResume() {
  const { resumeId } = useParams();
  const [resume, setResume] = useState(null);
  const type = resume?.structure.template_type;
  const [resumeDetail, setResumeDetail] = useState(null);
  const [formData, setFormData] = useState({
    structure: {
      title: '',
      template_type: '',
      content: {
        workExperience: [],
        skills: [],
        portfolio: [],
        qualification: [],
      },
    },
  });
  const [prevTitle, setPrevTitle] = useState('');
  const [prevUser, setPrevUser] = useState(null);
  const [prevWork, setPrevWork] = useState(null);
  const [prevSkills, setPrevSkills] = useState(null);
  const [prevActivity, setPrevActivity] = useState(null);
  const [prevQualification, setPrevQualification] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const resumeData = await getResumeDetail(resumeId);
      console.log(resumeData);
      setResume(resumeData);
      setFormData(resumeData);
      setPrevTitle(resumeData.structure.title);
      setPrevUser(resumeData);
      setPrevWork(resumeData.structure.content.workExperience);
      setPrevSkills(resumeData.structure.content.skills);
      setPrevActivity(resumeData.structure.content.activity);
      setPrevQualification(resumeData.structure.content.qualification);
    };
    fetchData();
  }, [resumeId]);

  const [profileInfo, setProfileInfo] = useState(initialProfileInfo);
  const [openTemplateList, setOpenTemplateList] = useState(false);

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

  const handleEdit = async () => {
    console.log('클릭');
    console.log(formData);
    const { valid } = await editResumeAPI(resumeId, formData);
    console.log(valid);
    if (valid) {
      alert('이력서 수정이 완료되었습니다.');
      navigate(`/mypage/${formData.userId}`);
    }
  };

  return (
    <ResumeWrap>
      <InfoContainer>
        <Button type='button' color='#3D79BF' padding='9px 0px' fontSize='16px'>
          작성 내용 불러오기
        </Button>
        <ResumeMenu profileInfo={profileInfo} scrollToItem={scrollToItem} />
      </InfoContainer>
      <ResumeContainer>
        <ResumeSection>
          <ResumeTitle
            prevTitle={prevTitle}
            formData={formData}
            setFormData={setFormData}
            setPrevTitle={setPrevTitle}
            setResumeDetail={setResumeDetail}
          />
        </ResumeSection>
        <ResumeSection>
          <UserInfo
            prevUser={prevUser}
            formData={formData}
            setFormData={setFormData}
            setResumeDetail={setResumeDetail}
            setPrevUser={setPrevUser}
          />
        </ResumeSection>
        <ResumeSection>
          <WorkExperience
            formData={formData}
            setFormData={setFormData}
            setResumeDetail={setResumeDetail}
            prevWork={prevWork}
          />
        </ResumeSection>

        <ResumeSection>
          <SkillsSection
            setFormData={setFormData}
            formData={formData}
            setResumeDetail={setResumeDetail}
            prevSkills={prevSkills}
          />
        </ResumeSection>

        <ResumeSection>
          <Activity
            prevActivity={prevActivity}
            formData={formData}
            setFormData={setFormData}
            setResumeDetail={setResumeDetail}
          />
        </ResumeSection>

        <ResumeSection>
          <Qualification
            prevQualification={prevQualification}
            formData={formData}
            setFormData={setFormData}
            setResumeDetail={setResumeDetail}
          />
        </ResumeSection>

        <ResumeSection>
          <PortfolioSection
            formData={formData}
            setFormData={setFormData}
            setResumeDetail={setResumeDetail}
          />
        </ResumeSection>
      </ResumeContainer>

      <TemplateContainer>
        {type && (
          <Template>
            {type === 'normal' && resumeDetail && <ResumeNormal resumeDetail={formData} />}
            {type === 'simple' && resumeDetail && <ResumeSimple resumeDetail={formData} />}
            {type === 'casual' && resumeDetail && <ResumeCasual resumeDetail={formData} />}
          </Template>
        )}
        <TemplateBtn>
          <Button marginLeft='12px' padding='12px 30px' onClick={handleEdit}>
            수정
          </Button>
        </TemplateBtn>
      </TemplateContainer>
    </ResumeWrap>
  );
}
