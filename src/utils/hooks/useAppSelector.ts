import { useSelector } from 'react-redux';
import { Store } from '@/redux/store.type';

export function useAppSelector(storeField?: keyof Store | keyof Store[]) {
  const store = useSelector((state: Store) => state);

  if (!storeField) {
    return store;
  }
  if (Array.isArray(storeField)) {
    return storeField.reduce((acc, key) => {
      acc[key] = store[key as keyof Store];
      return acc;
    }, {});
  }

  return store[storeField as keyof Store];
}
