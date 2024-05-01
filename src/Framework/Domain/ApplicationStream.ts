import 'reflect-metadata';

import { filter, Subject } from 'rxjs';
import { container } from 'tsyringe';

export const applicationStreamToken = Symbol('applicationStream$');

export const applicationStream$ = new Subject<TEvent | TEvent<unknown>>();
container.register(applicationStreamToken, { useValue: applicationStream$ });

export type TEvent<P = void> = P extends void ? Pick<IEvent<P>, 'type'> : IEvent<P>;

export interface IEvent<P> {
  readonly type: string;
  readonly payload: P;
}

/** subscribe to global event stream */
export function subscribe(eventType: string | RegExp) {
  return function (target: { new (...arg: never[]): { handle(event: never): void } }) {
    applicationStream$
      .pipe(
        filter((event) => {
          if (typeof eventType === 'string') {
            return event.type === eventType;
          }
          return eventType.test(event.type);
        }),
      )
      .subscribe((event) => {
        // @ts-expect-error - This is a hack to get around the fact that the event type is not known at compile time
        const callable = container.resolve(target);
        callable.handle(event as never);
      });
  };
}
