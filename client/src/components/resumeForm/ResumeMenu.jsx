import React from 'react';
import { InfoList } from '../../style/CreateResumeStyle';

export function ResumeMenu() {
  const handleScroll = (id) => {
    if (id === 'titleArea') {
      window.scrollTo(0, 0);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <InfoList>
      <ul>
        <li>
          <button onClick={() => handleScroll('titleArea')}>제목</button>
        </li>
        <li>
          <button onClick={() => handleScroll('infoArea')}>인적사항</button>
        </li>
        <li>
          <button onClick={() => handleScroll('workArea')}>경력</button>
        </li>
        <li>
          <button onClick={() => handleScroll('skillArea')}>스킬</button>
        </li>
        <li>
          <button onClick={() => handleScroll('activityArea')}>경험 / 활동 / 교육</button>
        </li>
        <li>
          <button onClick={() => handleScroll('qualificationArea')}>자격 / 어학 / 수상</button>
        </li>
        <li>
          <button onClick={() => handleScroll('portfolioArea')}>포트폴리오</button>
        </li>
      </ul>
    </InfoList>
  );
}
