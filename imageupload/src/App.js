import React, { PureComponent } from 'react';
import Upload from './Upload';

export default class PageUpload extends PureComponent {

  render () {
    return (
      <Upload multiple action={'/api/upload'} />
    );
  }
}
