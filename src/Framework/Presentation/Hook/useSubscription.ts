import { useEffect, useState } from 'react';
import type { Observable } from 'rxjs';

export const useSubscription = <T>(observable: Observable<T>) => {
  const [value, setValue] = useState<T | undefined>();

  useEffect(() => {
    const subscription = observable.subscribe(setValue);
    return () => subscription.unsubscribe();
  }, []);

  return value;
};
