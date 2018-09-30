import * as React from 'react';

import { Output } from '../../types';
import getRenderProp from '../getRenderProp/getRenderProp';
import isEmptyChildren from '../isEmptyChildren/isEmptyChildren';
import isFunction from '../isFunction/isFunction';

const getChildrenOrRender = (children?: unknown, render?: unknown): Output => {
  const result = getRenderProp(children, render);

  if (result) {
    if (isFunction(result)) {
      return result();
    }

    if (!isEmptyChildren(result) && React.isValidElement(result)) {
      return React.Children.only(result);
    }
  }

  return null;
};

export default getChildrenOrRender;