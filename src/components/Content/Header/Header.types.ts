import { ChildrenProps } from '@/models';
import { ContentNavigationItem } from '../Navigation/Navigation.types';

export type Props = {
  navItems?: ContentNavigationItem[];
  className?: string;
  parentPath?: string;
} & ChildrenProps;
