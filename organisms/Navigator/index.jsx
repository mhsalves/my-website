import React, { useState } from 'react';

import Avatar from '../../atoms/Avatar';
import Dropdown from '../../atoms/Dropdown';
import Icon from '../../atoms/Icon';
import MenuList from '../../atoms/MenuList';

import {
  NavigatorContainer,
  NavigatorGroupMobile,
  NavigatorGroupMobileHandler,
  NavigatorName,
  NavigatorButton,
  NavigatorContentList,
  NavigatorGroupDesktop,
  NavigatorGroupSpace,
} from './styles';

import data from './data';

function Navigator() {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavigatorContainer>
      <NavigatorGroupMobile>
        <Dropdown
          handler={(
            <NavigatorGroupMobileHandler>
              <NavigatorName>{data.title}</NavigatorName>
              <NavigatorButton onClick={() => setOpen(!isOpen)}>
                <Icon glyph="menu" color="silver light" />
              </NavigatorButton>
            </NavigatorGroupMobileHandler>
          )}
          content={contentProps => (
            <NavigatorContentList {...contentProps}>
              <MenuList items={data.items} />
            </NavigatorContentList>
          )}
          isOpen={isOpen}
        />
      </NavigatorGroupMobile>
      <NavigatorGroupDesktop>
        <NavigatorGroupSpace>
          <Avatar src="/static/img/profile.jpg" alt={data.title} rounded />
        </NavigatorGroupSpace>
        <MenuList centered items={data.items} />
      </NavigatorGroupDesktop>
    </NavigatorContainer>
  );
}

export default Navigator;
