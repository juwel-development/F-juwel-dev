import { bufferCount, map, Observable, Subject, throttleTime } from 'rxjs';
import { injectable, singleton } from 'tsyringe';

@injectable()
@singleton()
export class ScrollTopic {
  public readonly ScrollEvent$: Subject<Event> = new Subject<Event>();

  public readonly ScrollPositionY$: Observable<TScrollState> = this.ScrollEvent$.pipe(
    throttleTime(20),
    map((event) => ({ y: (event.target as HTMLElement).scrollTop, target: event.target })),
    bufferCount(2, 1),
    map(([prev, next]) => {
      const direction = prev.y < next.y ? 'down' : prev.y > next.y ? 'up' : undefined;
      return { y: next.y, direction, element: next.target as HTMLElement };
    }),
  );
}

export type TScrollState = {
  y: number;
  direction?: 'up' | 'down';
  element: HTMLElement;
};
