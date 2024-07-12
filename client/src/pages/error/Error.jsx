import React from 'react';
import { ErrorContainer, Image } from '../../style/ErroStyl';
import ErrorIcon from '../../asset/images/404Error.png';
export default function Error() {
  return (
    <div>
      <ErrorContainer></ErrorContainer>
      <Image src={ErrorIcon}></Image>
    </div>
  );
}
