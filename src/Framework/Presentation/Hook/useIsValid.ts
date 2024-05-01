import { useEffect, useState } from 'react';
import type { Observable } from 'rxjs';
import { combineLatest, distinctUntilChanged, map } from 'rxjs';

export const useIsValid = (validationStreams: Observable<boolean>[]) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const subscription = combineLatest(validationStreams)
      .pipe(
        map((input) => input.every((value) => value)),
        distinctUntilChanged(),
      )
      .subscribe((value) => setIsValid(value));

    return () => subscription.unsubscribe();
  }, []);

  return isValid;
};
