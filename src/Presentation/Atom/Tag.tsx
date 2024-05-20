import type { FunctionComponent, PropsWithChildren } from 'react';

const TagRoot: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className="flex flex-wrap gap-x-5 gap-y-3">{children}</div>;
};

const TagItem: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <span className="bg-primary-500 text-primary-900 px-2 py-1 text-sm rounded-lg">{children}</span>;
};

export const Tag = {
  Root: TagRoot,
  Item: TagItem,
};
