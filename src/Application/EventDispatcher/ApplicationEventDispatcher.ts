import { GlobalEvent$, GlobalEventStreamToken } from '@juwel-development/react-observable-tools';
import { PageRedirectCommand } from 'Domain/Application/Event/PageRedirectCommand';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ApplicationEventDispatcher {
  public constructor(
    @inject(GlobalEventStreamToken)
    private readonly globalEvent$: typeof GlobalEvent$,
  ) {}

  public async redirectCommand(to: string) {
    await import('Domain/Application/ApplicationModule');

    const event = new PageRedirectCommand();
    event.payload.to = to;

    this.globalEvent$.next(event);
  }
}
