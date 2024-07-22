import axios from 'axios';
import { deleteResume, createResume, editResume, uploadImage } from './APIRoutes';

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
export const editResumeAPI = async (resumeId, formData) => {
  try {
    const { data } = await axios.post(`${editResume}/${resumeId}`, {
      resumeId,
      formData,
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

// 프로필 이미지 업로드
export const uploadImageAPI = async (formData) => {
  try {
    const { data } = await axios.post(`${uploadImage}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    console.error('프로필 이미지 등록 오류', error);
  }
};
