import type { TEvent } from '@juwel-development/react-observable-tools';

export const PageRedirectCommandType = 'PageRedirectCommand';

export class PageRedirectCommand implements TEvent<Payload> {
  public readonly type = PageRedirectCommandType;

  public payload: Payload = new Payload();
}

class Payload {
  public to: string = '';
}
