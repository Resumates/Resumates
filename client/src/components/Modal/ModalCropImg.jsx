import React from 'react';
import styled from 'styled-components';

export default function ModalCropImg() {
  return (
    <ImgCropModal>
      <H2>사진 올리기</H2>
      <CropNoticeText>
        1. [파일 선택]을 클릭, 등록할 사진을 선택한 후, 이력서 및 회원정보에 첨부할 영역을 마우스로
        드래그하여 선택해 주십시오.
      </CropNoticeText>
      <CropNoticeText>
        2. 이력서용 사진칸에 원하는 사진 영역 선택이 완료디면 [등록]을 클릭해주십시오.
      </CropNoticeText>
      <CropNoticeText>
        3. 사진을 새로 등록 또는 변경하려면 작성한 이력서에도 사진이 변경됩니다.
      </CropNoticeText>
      <ImgCont>사진영역</ImgCont>
      <FileCont>
        <BtnSelectImg type='button'>파일선택</BtnSelectImg>
        <FileName>파일명 출력 공간</FileName>
      </FileCont>
      <CropNoticeText>
        * 사진 파일은 10MB 미만의 JPG, JPEG,PNG, GIF 파일만 업로드 가능합니다.
      </CropNoticeText>
      <Btncont>
        <BtnCancle type='button'>취소</BtnCancle>
        <BtnSave type='button'>등록</BtnSave>
      </Btncont>
    </ImgCropModal>
  );
}

const ImgCropModal = styled.div`
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  z-index: 100;
  margin: 5rem auto;
  width: 650px;
  padding: 3rem;
  background-color: white;
  border: 1px solid #eee;
  border-radius: 1rem;
  box-sizing: border-box;
  box-shadow: 5px 5px 14px -7px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 5px 5px 14px -7px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 5px 5px 14px -7px rgba(0, 0, 0, 0.35);
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 16px;
  margin: 2rem 0 3rem;
  color: #000;
`;

const CropNoticeText = styled.p`
  line-height: 1.5;
  font-size: 1.4rem;
  color: #51586e;
  margin-top: 0.4rem;
  text-align: left;
`;

const ImgCont = styled.div`
  background-color: var(--bgColor);
  min-height: 300px;
  margin: 1rem 0;
`;

const FileCont = styled.div`
  display: flex;
  gap: 1rem;
`;

const BtnSelectImg = styled.button`
  width: 10rem;
  padding: 1rem;
  font-size: 1.4rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
`;

const FileName = styled.div`
  width: 100%;
  background-color: var(--bgColor);
`;

const Btncont = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

const BtnCancle = styled(BtnSelectImg)`
  width: 12rem;
  border: 1px solid var(--mainColor);
  box-sizing: border-box;
`;

const BtnSave = styled(BtnCancle)`
  background-color: var(--mainColor);
  box-sizing: border-box;
  color: white;
`;
