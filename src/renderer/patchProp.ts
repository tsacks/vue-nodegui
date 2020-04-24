import { RendererOptions } from '@vue/runtime-core';
import { NodeWidget } from '@nodegui/nodegui';

export type Prop<T, key extends keyof T> = Required<T>[key];

export type PropSetters<T extends {}> = {
  [key in keyof Required<T>]: (
    widget: NodeWidget<any>,
    prevValue: Prop<T, key>,
    nextValue: Prop<T, key>
  ) => void
}

const patchProp: RendererOptions['patchProp'] = (
  el,
  key,
  nextValue,
  prevValue,
  // isSVG = false,
  // prevChildren,
  // parentComponent,
  // parentSuspense,
  // unmountChildren,
) => {
  el.patchProp(key, prevValue, nextValue);
};

export default patchProp;
