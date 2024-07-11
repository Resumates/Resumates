import axios from 'axios';
import { deleteResume } from './APIRoutes';

// 이력서 삭제
export const deleteResumeAPI = async (resumeId) => {
  try {
    const { data } = await axios.delete(`${deleteResume}/${resumeId}`, {
      data: { resumeId },
    });
    console.log('이력서 삭제', data);
    return data;
  } catch (error) {
    console.error('이력서 삭제 오류', error);
  }
};
