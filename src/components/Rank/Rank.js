import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='white f4'>
        <p className='pt5'>{`${name}, welcome to my facerecognizer application!`}</p>
        <p>By providing an image url in the textbox below, this app can recognize and highlight all the faces in that image.</p>
        <p>Each search request will increase your score.</p>
        <p>Your current entry count is...</p>
      </div>
      <div className='white f1'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;
