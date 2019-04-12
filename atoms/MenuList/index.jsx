import React from 'react';
import {
  arrayOf, bool, func, shape, string,
} from 'prop-types';

import { keyPrefixGenerator, keyMount } from '../../helpers/uniqueKey';

import {
  MenuListContainer,
  MenuListItem,
} from './styles';

const keyPrefix = keyPrefixGenerator();

function MenuList(props) {
  const { centered, items } = props;

  return (
    <MenuListContainer>
      {
        items.map(({ title, action }) => (
          <MenuListItem
            key={keyMount(keyPrefix, title)}
            onClick={action}
            centered={centered}
          >
            {title}
          </MenuListItem>
        ))
      }
    </MenuListContainer>
  );
}

MenuList.propTypes = {
  centered: bool,
  items: arrayOf(shape({
    title: string,
    action: func,
  })),
};

MenuList.defaultProps = {
  centered: false,
  items: [],
};

export default MenuList;
