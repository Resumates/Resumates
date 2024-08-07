export const profileInfo = [
  // {
  //   id: 'personalInfo',
  //   label: '인적사항',
  //   content: [
  //     {
  //       id: 1,
  //       fields: [
  //         // {
  //         //   label: '사진 추가',
  //         //   type: 'file',
  //         //   name: 'photo',
  //         //   placeholder: '',
  //         //   required: 'required',
  //         // },
  //         {
  //           label: '이름',
  //           type: 'text',
  //           name: 'name',
  //           placeholder: '',
  //           required: 'required',
  //         },
  //         {
  //           label: '생년월일',
  //           type: 'text',
  //           name: 'birth',
  //           placeholder: '',
  //           required: 'required',
  //         },
  //         {
  //           label: '성별',
  //           type: 'text',
  //           name: 'gender',
  //           placeholder: '남성/여성',
  //           required: 'required',
  //           data: [
  //             { id: '', name: '선택' },
  //             { id: 'M', name: '남성' },
  //             { id: 'F', name: '여성' },
  //           ],
  //         },
  //         {
  //           label: '휴대폰 번호',
  //           type: 'text',
  //           name: 'phone',
  //           placeholder: '',
  //           required: 'required',
  //         },
  //         {
  //           label: '이메일',
  //           type: 'email',
  //           name: 'email',
  //           placeholder: '',
  //           required: 'required',
  //         },
  //         {
  //           label: '주소',
  //           type: 'text',
  //           name: 'address',
  //           placeholder: '',
  //           required: 'required',
  //         },
  //       ],
  //     },
  //   ],
  // },

  // 경력
  // {
  //   id: 'career',
  //   label: '경력',
  //   content: [
  //     {
  //       id: 1,
  //       fields: [
  //         {
  //           label: '회사명',
  //           type: 'text',
  //           name: 'company',
  //           placeholder: '코스타회사',
  //           required: 'required',
  //         },
  //         {
  //           label: '부서명',
  //           type: 'text',
  //           name: 'department',
  //           placeholder: '온라인사업부',
  //           required: 'required',
  //         },
  //         {
  //           label: '직급/직책',
  //           type: 'text',
  //           name: 'position',
  //           placeholder: '주임',
  //           required: 'required',
  //         },
  //         {
  //           label: '연봉',
  //           type: 'text',
  //           name: 'salary',
  //           placeholder: '4000만원',
  //           required: 'required',
  //         },
  //         {
  //           label: '입사년월',
  //           type: 'text',
  //           name: 'employmentStartDate',
  //           placeholder: '2021.03',
  //           required: 'required',
  //         },
  //         {
  //           label: '퇴사년월',
  //           type: 'text',
  //           name: 'employmentEndDate',
  //           placeholder: '2023.08',
  //           required: 'required',
  //         },
  //         {
  //           label: '재직여부',
  //           type: 'text',
  //           name: 'workStatus',
  //           placeholder: '재직중',
  //           required: 'required',
  //         },

  //         {
  //           label: '담당업무',
  //           type: 'text',
  //           name: 'taskDescription',
  //           placeholder: '어쩌구 어쩌구 업무를 담당',
  //           required: 'required',
  //         },
  //       ],
  //     },
  //   ],
  // },

  // 스킬
  {
    id: 'skills',
    label: '스킬',
    content: [
      {
        id: 1,
        fields: [
          {
            label: 'skillsBox',
            type: 'text',
            name: 'skillsBox',
            placeholder: 'HTML, CSS, JavScript',
            required: 'required',
          },
          {
            label: '스킬',
            type: 'text',
            name: 'skill',
            placeholder: 'React',
            required: 'required',
          },
        ],
      },
    ],
  },

  // 경험

  {
    id: 'activity',
    label: '경험 / 활동 / 교육',
    content: [
      {
        id: 1,
        fields: [
          {
            label: '활동구분선택',
            type: 'text',
            name: 'category',
            placeholder: '교육',
            required: 'required',
            data: [
              { id: '', name: '구분' },
              { id: 'experience', name: '경험' },
              { id: 'activity', name: '활동' },
              { id: 'education', name: '교육' },
            ],
          },
          {
            label: '기관 / 장소명',
            type: 'text',
            name: 'desc',
            placeholder: '그린 컴퓨터 아카데미',
            required: 'required',
          },
          {
            label: '시작년월',
            type: 'text',
            name: 'startDate',
            placeholder: '2021.03',
            required: 'required',
          },
          {
            label: '종료년월',
            type: 'text',
            name: 'endDate',
            placeholder: '2023.08',
            required: 'required',
          },
          {
            label: '활동 설명',
            type: 'text',
            name: 'description',
            placeholder: '어쩌구 어쩌구 활동 활동',
            required: 'required',
          },
        ],
      },
    ],
  },

  //어학
  {
    id: 'qualification',
    label: '자격 / 어학 / 수상',
    content: [
      {
        id: 1,
        fields: [
          {
            label: '활동구분선택',
            type: 'text',
            name: 'category',
            placeholder: '자격증',
            required: 'required',
            data: [
              { id: '', name: '구분' },
              {
                id: 'certification',
                name: '자격증',
                detail: [
                  {
                    id: 1,
                    item: [
                      {
                        label: '자격증명',
                        type: 'text',
                        name: 'certificateName',
                        placeholder: '정보처리기사',
                        required: 'required',
                      },
                      {
                        label: '발행처 / 기관',
                        type: 'text',
                        name: 'organization',
                        placeholder: '한국산업인력공단',
                        required: 'required',
                      },
                      {
                        label: '취득년월',
                        type: 'text',
                        name: 'getDate',
                        placeholder: '2021.03',
                        required: 'required',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'languageTest',
                name: '어학시험',
                detail: [
                  {
                    id: 1,
                    item: [
                      {
                        label: '언어',
                        type: 'text',
                        name: 'language',
                        placeholder: '영어',
                        required: 'required',
                      },
                      {
                        label: '어학시험명',
                        type: 'text',
                        name: 'testName',
                        placeholder: '토익',
                        required: 'required',
                      },
                      {
                        label: '급수',
                        type: 'text',
                        name: 'level',
                        placeholder: '999',
                        required: 'required',
                      },
                      {
                        label: '점수 ',
                        type: 'text',
                        name: 'score',
                        placeholder: '999',
                        required: 'required',
                      },
                      {
                        label: '취득년월',
                        type: 'text',
                        name: 'getyear',
                        placeholder: '2021.03',
                        required: 'required',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'wards',
                name: '수상내역',
                detail: [
                  {
                    id: 1,
                    item: [
                      {
                        label: '수상 · 공모전명',
                        type: 'text',
                        name: 'awardName',
                        placeholder: '정보처리기사',
                        required: 'required',
                      },
                      {
                        label: '수여 / 주최기간',
                        type: 'text',
                        name: 'issuer',
                        placeholder: '한국산업 인력공단',
                        required: 'required',
                      },
                      {
                        label: '수상 · 공모일',
                        type: 'text',
                        name: 'awardDate',
                        placeholder: '2021.03',
                        required: 'required',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'portfolio',
    label: '포트폴리오',
    content: [
      {
        id: 1,
        fields: [
          {
            label: '포트폴리오 URL',
            type: 'text',
            name: 'portfolioURL',
            placeholder: '교육',
            required: 'required',
          },
        ],
      },
    ],
  },
];
