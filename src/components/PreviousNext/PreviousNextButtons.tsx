import React from 'react';
import {PreviousNextButtonsProps} from '../../types/PreviousNextButtonsProps.types';
import {Button} from '../Button/Button';

export const PreviousNextButtons = ({
  onPrevious,
  onNext,
  icon,
  children,
}: PreviousNextButtonsProps) => {
  return (
    <>
      <Button onclick={onPrevious} label={'Previous'} icon={icon} />
      {children}
      <Button onclick={onNext} label={'Next'} icon={icon} />
    </>
  );
};
