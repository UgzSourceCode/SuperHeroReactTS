import { Button, Icon } from '@material-ui/core';
import React from 'react'

interface ButtonSendProps {
   text: string,
   onClickButton: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const ButtonSend = ({ text, onClickButton }: ButtonSendProps) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClickButton}
      endIcon={<Icon>send</Icon>}
    >
      {text}
    </Button>
  )
}
