import React from 'react';
import { InfoList } from '../../style/CreateResumeStyle';

export function ResumeMenu({ profileInfo, scrollToItem }) {
  return (
    <InfoList>
      <ul>
        {profileInfo.map((info) => (
          <li key={info.id}>
            <button onClick={() => scrollToItem(info.id)}>{info.label}</button>
          </li>
        ))}
      </ul>
    </InfoList>
  );
}
