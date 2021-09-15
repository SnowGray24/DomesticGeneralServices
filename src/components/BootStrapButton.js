import React from 'react';
import { Button } from 'reactstrap';

const BootStrapButton = (props) => {
  return (
    <div>
      <Button className="btButton">{props.texto}</Button>{' '}
    </div>
  );
}




export default BootStrapButton;
