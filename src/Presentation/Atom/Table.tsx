import type { FunctionComponent, PropsWithChildren } from 'react';

const TableRoot: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className="overflow-x-auto max-w-full">
      <table className="table-auto border-collapse">{children}</table>
    </div>
  );
};

const TableHead: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <thead>{children}</thead>;
};

const TableHeadCell: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <th className="text-left pr-6 py-6 align-text-top">{children}</th>;
};

const TableRow: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <tr>{children}</tr>;
};

const TableBody: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

const TableCell: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <td className="text-left pr-6 py-6 md:py-12 align-text-top">{children}</td>;
};

export const Table = {
  Root: TableRoot,
  Head: TableHead,
  HeadCell: TableHeadCell,
  Row: TableRow,
  Body: TableBody,
  Cell: TableCell,
};
