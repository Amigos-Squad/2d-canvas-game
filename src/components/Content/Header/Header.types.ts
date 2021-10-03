import { ChildrenProps } from '@/models';
import { ContentNavigationItem } from '../Navigation/Navigation.types';

export type Props = {
  navItems?: ContentNavigationItem[];
  parentPath?: string;
} & ChildrenProps;
