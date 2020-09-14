import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import React from 'react';

export default function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}