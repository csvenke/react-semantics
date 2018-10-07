import * as PropTypes from 'prop-types';
import * as React from 'react';

import { TMap, TOutput } from '../../types';
import { getRenderProp, isFunction } from '../../utils';

interface IListProps {
  /** Array to map. */
  items: any[];

  /** Shorthand for primary content. */
  render?: TMap;

  /** Primary content. */
  children?: TMap;
}

/**
 * Renders content from specified callback function from either `render` or `children` on each element of `items`.
 */
const List = (props: IListProps): TOutput => {
  const { items, children, render } = props;
  const renderProp = getRenderProp(children, render);

  if (!!renderProp && isFunction<TMap>(renderProp)) {
    return <React.Fragment>{items.map(renderProp)}</React.Fragment>;
  }

  return null;
};

List.propTypes = {
  children: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  render: PropTypes.func,
};

export default List;
