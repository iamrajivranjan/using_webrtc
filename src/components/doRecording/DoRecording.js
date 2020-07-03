import React from 'react';

import { Button } from '@material-ui/core';
import StartRecord from '@material-ui/icons/FiberManualRecord';
import StopIcon from '@material-ui/icons/Stop';

function DoRecording() {
  return (
    <React.Fragment>
      <div className='playButtons'>
        <Button
          variant='contained'
          color='secondary'
          className='startRecordButton'
          startIcon={<StartRecord />}
        >
          Start Recording
        </Button>
        <Button
          variant='contained'
          color='primary'
          className='startRecordButton'
          startIcon={<StopIcon />}
        >
          Stop Recording
        </Button>
      </div>
    </React.Fragment>
  );
}

export default DoRecording;