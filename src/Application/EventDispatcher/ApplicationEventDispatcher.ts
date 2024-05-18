import { GlobalEvent$ } from '@juwel-development/react-observable-tools';
import { PageRedirectCommandEvent } from 'Domain/Application/Event/PageRedirectCommandEvent';
import { injectable } from 'tsyringe';

@injectable()
export class ApplicationEventDispatcher {
  public async redirectCommand(to: string) {
    await import('Domain/Application/ApplicationModule');

    const event = new PageRedirectCommandEvent();
    event.payload.to = to;

    GlobalEvent$.next(event);
  }
}
