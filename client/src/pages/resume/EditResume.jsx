import React from 'react';
import { useParams } from 'react-router-dom';

export default function EditResume() {
  const { resumeId } = useParams();
  return <div>EditResume : {resumeId}</div>;
}
