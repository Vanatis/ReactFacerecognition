import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <div className='center'>
        <div className='form center pa4'>
          <input className='pa2 input-reset ba bg-transparent hover-bg-black white w-100' type='tex' onChange={onInputChange}/>
          <button
            className='w-30 b ph3 pv2 input-reset ba b--white white bg-transparent pointer f6 dib'
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
