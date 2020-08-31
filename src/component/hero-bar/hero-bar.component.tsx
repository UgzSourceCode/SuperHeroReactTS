import React, { ChangeEvent, MouseEvent } from 'react'
import { ButtonSend } from '../button-send/button-send.component'

interface HeroBarProps {
  onChangeValue: (evt: ChangeEvent<HTMLInputElement>) => void,
  value: number,
  onClickShow: (evt: MouseEvent) => void
}

const HeroBar = ({ onChangeValue, value, onClickShow } : HeroBarProps) => {
  return (
    <div>
      <input
        min="1"
        max="390"
        value={value}
        type="number"
        onChange={onChangeValue}
      />
      <ButtonSend
        onClickButton={onClickShow}
        text="Show me my hero"
      />
    </div>
  )
}

export default HeroBar
