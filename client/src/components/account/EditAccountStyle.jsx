import styled from 'styled-components';

export const EditCont = styled.div`
  width: 77rem;
  min-height: 40rem;
  box-sizing: border-box;
  background-color: white;
  border-radius: 1rem;
  padding: 6rem 10rem;
  position: relative;
`;

export const UserInfoSet = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
`;

export const BtnCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`;

export const EmailLabel = styled.label`
  color: var(--mainColor);
  font-weight: 600;
  width: 10rem;
`;

export const InfoLabel = styled.label`
  color: var(--mainColor);
  font-weight: 600;
`;

export const PasswordLabel = styled.label`
  color: var(--mainColor);
  font-weight: 600;
  width: 17rem;
`;

export const InputBox = styled.input`
  width: 27rem;
  padding: 1.5rem;
  background-color: #f4f4f4;
  border: 1px solid #acacac;
  border-radius: 1rem;
`;

export const InfoBox = styled.div`
  width: 35rem;
  padding: 1.5rem;
  background-color: #f4f4f4;
  border: 1px solid #acacac;
  border-radius: 1rem;
`;

export const DeleteBtn = styled.button`
  margin-top: 8rem;
  font-size: 1.6rem;
  color: #e00000;
`;

export const DelComment = styled.p`
  margin-top: 0.5rem;
  font-size: 1.2rem;
`;

export const InputPassword = styled.input`
  width: 35rem;
  padding: 1.5rem;
  border: 1px solid #acacac;
  border-radius: 1rem;
`;

export const CheckBox = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CheckImg = styled.img`
  width: 2rem;
`;

export const CheckBoxText = styled.p`
  padding-left: 0.8rem;
`;

export const NoticeText = styled.p`
  color: #e00000;
  font-size: 1.2rem;
  padding-left: 12rem;
  margin-top: -2rem;
  margin-bottom: 3rem;
`;

export const PwAlertText = styled(NoticeText)`
  padding-left: 20rem;
`;

export const PwNoticeText = styled(NoticeText)`
  color: #000;
  padding-left: 20rem;
`;

export const ButtonCont = styled.div`
  text-align: center;
  padding-right: 0.8rem;
  margin-top: 5rem;
`;
