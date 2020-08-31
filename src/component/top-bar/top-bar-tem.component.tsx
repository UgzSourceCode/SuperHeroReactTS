import { Button } from '@material-ui/core'
import React, { MouseEvent } from 'react'
import { useHistory } from 'react-router-dom';
import ITopBarItem from '../../interface/ITopBarItem'

export const TopBarItem = ({ name, address } : ITopBarItem) => {
  const history = useHistory();

  const onClickButton = (evt: MouseEvent) => {
    history.push(address);
  }

  return (
    <Button
      onClick={onClickButton}
    >
      {name}
    </Button>
  )
}
