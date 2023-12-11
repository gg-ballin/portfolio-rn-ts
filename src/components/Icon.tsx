import React from 'react';
import IconRN from 'react-native-vector-icons/Feather';

type IconProps = {
  name: string;
  size: number;
};

const Icon = ({name, size}: IconProps) => {
  return <IconRN name={name} size={size} />;
};

export default Icon;
