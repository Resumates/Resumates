import axios from 'axios';
import { deleteResume, createResume, editResume } from './APIRoutes';

// 이력서 작성
export const createResumeAPI = async () => {
  try {
    const { data } = await axios.post(`${createResume}`, {
      // 요청할사항...
    });
    return data;
  } catch (error) {
    console.error('이력서 작성 오류', error);
  }
};

// 이력서 수정
export const editResumeAPI = async (resumeId) => {
  try {
    const { data } = await axios.patch(`${editResume}/${resumeId}`, {
      // 요청할사항...
    });
    return data;
  } catch (error) {
    console.error('이력서 수정 오류', error);
  }
};

// 이력서 삭제
export const deleteResumeAPI = async (resumeId) => {
  try {
    const { data } = await axios.delete(`${deleteResume}/${resumeId}`, {
      data: { resumeId },
    });
    return data;
  } catch (error) {
    console.error('이력서 삭제 오류', error);
  }
};
