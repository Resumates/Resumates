import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container } from '../../style/Container';
import simple from '../../asset/images/simple.png';
import casual from '../../asset/images/casual.png';
import normal from '../../asset/images/normal.png';
import {
  ResumeCont,
  MyTitle,
  ResumeSection,
  Title,
  ImageContainer,
  ImgContanierSection,
  Button,
  ButtonContainer,
  TemplateSection,
  LargeButton,
  List,
  ListItem,
} from '../../style/MyPageStyle';
import ModalUser from '../../components/Modal/ModalUser';

// import ResumeNormal from '../../components/resumeTamplate/ResumeNormal';

export default function Mypage() {
  const [resume, setResume] = useState(null);
  const navigate = useNavigate();

  const userId = window.localStorage.getItem('userId');
  console.log(userId);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/user/resume/${userId}`);
        console.log('Resume data:', response.data);
        setResume(response.data);
      } catch (error) {
        console.error('Error fetching resume:', error);
      }
    };

    if (userId) {
      fetchResume();
    } else {
      console.error('UserID를 찾을 수 없습니다');
    }
  }, [userId]);

  // // delete 버튼
  // const handleDelete = async () => {
  //   try {
  //     if (!resume || !resume._id) {
  //       return console.error('삭제할 이력서를 찾을 수 없습니다');
  //     }

  //     const response = await axios.delete(`http://localhost:5000/user/resume/${resume._id}`);
  //     console.log('Delete response:', response.data);
  //     setResume(null); // 이력서 삭제 후 상태 초기화
  //   } catch (error) {
  //     console.error('Error deleting resume:', error);
  //   }
  // };

  // //edit 버튼

  // console.log(resume);

  return (
    <Container>
      <MyTitle path='/mypage'>마이페이지</MyTitle>
      <ResumeCont>
       
        <ImgContanierSection>
          <List>
            {resume?.map((item) => {
              const resumeType = item.structure.template_type;
              console.log(item); //item.structure
              if (resumeType === 'simple') {
                return (
                  <ListItem key={item._id}>
                    <ImageContainer
                      onClick={(e) => {
                        navigate(`/resume/${e.target.id}`);
                      }}
                      src={simple}
                      id={item._id}
          
                    />
                  </ListItem>
                );
              }
              if (resumeType === 'casual') {
                return (
                  <ListItem key={item._id}>
                    <ImageContainer
                      onClick={(e) => navigate(`/resume/${e.target.id}`)}
                      src={casual}
                      id={item._id}
                    />
                  </ListItem>
                );
              }
              if (resumeType === 'normal') {
                return (
                  <ListItem key={item._id}>
                    <ImageContainer
                      onClick={(e) => navigate(`/resume/${e.target.id}`)}
                      src={normal}
                      id={item._id}
                    />
                  </ListItem>
                );
              }
              return null;
            })}
          </List>
        </ImgContanierSection>
      </ResumeCont>
    </Container>
  );
}
