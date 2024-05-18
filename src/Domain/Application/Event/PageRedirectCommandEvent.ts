import type { TEvent } from '@juwel-development/react-observable-tools';

export const PageRedirectCommandEventType = 'PageRedirectCommandEvent';

export class PageRedirectCommandEvent implements TEvent<Payload> {
  public readonly type = PageRedirectCommandEventType;

  public payload: Payload = new Payload();
}

class Payload {
  public to: string = '';
}
