import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import ImageCropper from '../../utils/ImageCropper';
import getCroppedImg from '../../utils/getCrop';
import { uploadImageAPI } from '../../api/resumeAPI';

export default function ModalCrop({ croppedImage, setModalOpen, setCroppedImage }) {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImageUrl, setCroppedImageUrl] = useState(null);

  const handleFileSelect = (e) => {
    e.preventDefault();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      reader.readAsDataURL(file);
      reader.onload = () => {
        setCroppedImage(reader.result);
      };
    } else {
      setFileName('');
      setCroppedImage(null);
    }
  };

  const dataURLtoFile = (dataurl, filename) => {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  const handleCropImage = async (e) => {
    e.preventDefault();
    if (!croppedImage) return;
    const cropped = await getCroppedImg(croppedImage, croppedAreaPixels);
    setCroppedImageUrl(cropped);
    const formData = new FormData();
    formData.append('image', dataURLtoFile(cropped, 'profileImg.png'));
    await uploadImageAPI(formData);
  };

  const handleCancel = () => {
    setCroppedImageUrl(null);
    setCroppedImage(null);
    setFileName('');
    setModalOpen(false);
  };

  const handleSave = () => {
    console.log(croppedImageUrl);
    setCroppedImage(croppedImageUrl);
    setModalOpen(false);
  };
  return (
    <ImgCropModal>
      <Scroll>
        <H2>사진 올리기</H2>
        <CropNoticeText>
          1. [파일 선택]을 클릭, 등록할 사진을 선택한 후, 이력서 및 회원정보에 첨부할 영역을
          마우스로 드래그하여 선택해 주십시오.
        </CropNoticeText>
        <CropNoticeText>
          2. 이력서용 사진칸에 원하는 사진 영역 선택이 완료디면 [등록]을 클릭해주십시오.
        </CropNoticeText>
        <CropNoticeText>
          3. 사진을 새로 등록 또는 변경하려면 작성한 이력서에도 사진이 변경됩니다.
        </CropNoticeText>
        <FileCont>
          <BtnSelectFile onClick={handleFileSelect}>파일선택</BtnSelectFile>
          <input
            type='file'
            name='file'
            accept='image/*'
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <FileName>{fileName || '이미지 파일을 선택해주세요.'}</FileName>
        </FileCont>
        <CropNoticeText>
          * 사진 파일은 10MB 미만의 JPG, JPEG,PNG, GIF 파일만 업로드 가능합니다.
        </CropNoticeText>
        <ImgCont>
          <Cropper>
            <ImageCropper croppedImage={croppedImage} setCroppedAreaPixels={setCroppedAreaPixels} />
            <button onClick={handleCropImage}>자르기</button>
          </Cropper>

          {croppedImageUrl ? (
            <PriviewImg>
              <img src={croppedImageUrl} alt='미리보기' />
            </PriviewImg>
          ) : (
            <PriviewArea>
              <div>미리보기</div>
            </PriviewArea>
          )}
        </ImgCont>
        <Btncont>
          <BtnCancle type='button' onClick={handleCancel}>
            취소
          </BtnCancle>
          <BtnSave type='button' onClick={handleSave}>
            등록
          </BtnSave>
        </Btncont>
      </Scroll>
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

const Scroll = styled.div`
  overflow-y: auto;
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
  height: 300px;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

const Cropper = styled.div`
  margin-top: 10px;
  width: 300px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  img {
    padding: 10px 0;
    height: 260px;
    object-fit: contain;
  }

  button {
    width: 300px;
    font-size: 1.4rem;
    padding: 10px;
    background-color: var(--mainColor);
    color: white;
  }
`;

const PriviewArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    box-sizing: border-box;
    background-color: white;
    width: 200px;
    height: 280px;
    object-fit: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
  }
`;

const PriviewImg = styled(PriviewArea)`
  img {
    box-sizing: border-box;
    background-color: white;
    width: 200px;
    height: 280px;
    object-fit: contain;
  }
`;

const FileCont = styled.form`
  display: flex;
  margin-top: 1rem;
  gap: 1rem;
  input {
    display: none;
  }
`;

const BtnSelectFile = styled.label`
  width: 8rem;
  padding: 1rem;
  font-size: 1.4rem;
  border: 1.2px solid #ddd;
  border-radius: 0.5rem;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

const FileName = styled.div`
  width: 100%;
  background-color: var(--bgColor);
  font-size: 1.2rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
`;

const Btncont = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

const BtnCancle = styled.button`
  padding: 1rem;
  font-size: 1.4rem;
  border-radius: 0.5rem;
  width: 12rem;
  border: 1px solid var(--mainColor);
  box-sizing: border-box;
`;

const BtnSave = styled(BtnCancle)`
  background-color: var(--mainColor);
  box-sizing: border-box;
  color: white;
`;
