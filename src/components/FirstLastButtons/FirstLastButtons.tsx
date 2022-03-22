import React from 'react';
import {FirstLastButtonsProps} from '../../types/FirstLastButtonsProps.types';
import {Button} from '../Button/Button';

export const FirstLastButtons = ({onFirst, onLast, icon, children}: FirstLastButtonsProps) => {
  return (
    <>
      <Button onclick={onFirst} label={'First'} icon={icon} />
      {children}
      <Button onclick={onLast} label={'Last'} icon={icon} />
    </>
  );
};
