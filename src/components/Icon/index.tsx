import React from 'react';

import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  Zocial,
  SimpleLineIcons,
} from './icons';

const iconsInstance = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  Zocial,
  SimpleLineIcons,
};

function getIconInstance(source: string) {
  // @ts-ignore
  const Icon = iconsInstance[source];
  if (Icon.loadFont) Icon.loadFont();
  return Icon;
}

export interface IconItem {
  source:
    | 'AntDesign'
    | 'Entypo'
    | 'EvilIcons'
    | 'Feather'
    | 'FontAwesome'
    | 'FontAwesome5'
    | 'Fontisto'
    | 'Foundation'
    | 'Ionicons'
    | 'MaterialIcons'
    | 'MaterialCommunityIcons'
    | 'Octicons'
    | 'Zocial'
    | 'SimpleLineIcons';
  name: string;
  size: number;
  color?: string;
  solid?: boolean;
}

const Icon: React.FC<IconItem> = ({
  source,
  name,
  size,
  color,
  solid,
  ...rest
}) => {
  const IconComponent = getIconInstance(source);

  return (
    <IconComponent
      name={name}
      size={size}
      color={color}
      solid={solid}
      {...rest}
    />
  );
};

export default Icon;
