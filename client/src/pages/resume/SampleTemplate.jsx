import React, { useState } from 'react';
import ChangeTemplate from '../../components/resumeTamplate/ChangeTemplate';
import ModalCrop from '../../components/Modal/ModalCrop';

export default function SampleTemplate() {
  const [modalOpen, setModalOpen] = useState(true);
  const [croppedImage, setCroppedImage] = useState(null);

  return (
    <div>
      <div>SampleTemplate</div>
      <ChangeTemplate />
      {/* {modalOpen && (
        <ModalCrop
          croppedImage={croppedImage}
          setModalOpen={setModalOpen}
          setCroppedImage={setCroppedImage}
        />
      )} */}
    </div>
  );
}
