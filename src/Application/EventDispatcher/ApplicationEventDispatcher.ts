import { GlobalEvent$, GlobalEventStreamToken } from '@juwel-development/react-observable-tools';
import { PageRedirectCommand } from 'Domain/Application/Event/PageRedirectCommand';
import { PageVisited } from 'Domain/Application/Event/PageVisited';
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

  public async pageVisited(currentPage: string) {
    await import('Domain/Application/ApplicationModule');

    const event = new PageVisited();
    event.payload.currentPage = currentPage;

    this.globalEvent$.next(event);
  }
}
