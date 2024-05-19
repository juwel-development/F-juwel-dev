import { EventHandler, IEventHandler } from '@juwel-development/react-observable-tools';
import { PageRedirectCommand, PageRedirectCommandType } from 'Domain/Application/Event/PageRedirectCommand';
import { router } from 'Presentation/Routing/RouteDefinition';

@EventHandler(PageRedirectCommandType)
export class RedirectCommandHandler implements IEventHandler<PageRedirectCommand> {
  public handle(event: PageRedirectCommand): void {
    void router.navigate({ to: event.payload.to });
  }
}
