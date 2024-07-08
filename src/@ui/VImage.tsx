import React from 'react';
import { TImages } from '../types';
import IMAGES from '../assets/IMAGES';
import { memo } from 'react';

interface IProps {
  name?: TImages;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

const VImage = ({ name, alt, className, width, height, onClick }: IProps) => {
  return (
    <img
      src={IMAGES[name as TImages]}
      alt={alt}
      className={className}
      width={width}
      height={height}
      onClick={onClick}
    />
  );
};

export default memo(VImage);
