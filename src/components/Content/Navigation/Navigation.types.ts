export type Props = {
  items: ContentNavigationItem[];
};

export type ContentNavigationItem = {
  path: string;
  exact: boolean;
  title: string;
  key: string;
};
