import React, { useCallback, useState } from 'react';
import Cropper from 'react-easy-crop';
import styled from 'styled-components';

const ImageCropper = ({
  croppedImage, // crop할 이미지
  setCroppedAreaPixels, // 이미지 {width: , height: , x: , y: } setstate, 잘린 이미지 값
  width = '150', // 이미지 비율
  height = '200', // 이미지 비율
  cropShape = 'none', // 이미지 모양 round 설정 시 원으로 바뀜
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = useCallback(
    async (croppedArea, croppedAreaPixels) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    [setCroppedAreaPixels],
  );

  return (
    <Container>
      <Cropper
        image={croppedImage}
        crop={crop}
        zoom={zoom}
        aspect={153 / 204}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
        cropShape={cropShape}
      />
      <ZoomBox>
        <ZoomInput
          type='range'
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          aria-labelledby='Zoom'
          onChange={(e) => {
            setZoom(e.target.value);
          }}
          className='zoom-range'
        />
      </ZoomBox>
    </Container>
  );
};

export default ImageCropper;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background-color: var(--bgColor);
  justify-content: center;
  align-items: center;
`;

const ZoomBox = styled.div`
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  width: 80%;
  display: flex;
  justify-content: center;

  .zoom-range {
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 6px;
    background: var(--mainColor);
    width: 100%;
    border-radius: 10rem;
  }

  .zoom-range::-moz-range-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    background: var(--mainColor);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  .zoom-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    background: var(--mainColor);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;

const ZoomInput = styled.input`
  width: 100%;
`;
