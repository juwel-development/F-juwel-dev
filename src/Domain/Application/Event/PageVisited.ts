import type { TEvent } from '@juwel-development/react-observable-tools';

export const PageVisitedType = 'PageVisited';

export class PageVisited implements TEvent<Payload> {
  public readonly type = PageVisitedType;

  public payload: Payload = new Payload();
}

class Payload {
  public currentPage: string = '';
}
