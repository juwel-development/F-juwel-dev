import { Logger } from '@juwel-development/beautiful-logger';
import { EventHandler, IEventHandler } from '@juwel-development/react-observable-tools';
import { injectable } from 'tsyringe';

@EventHandler(/.*/)
@injectable()
export class LogAllEventHandler implements IEventHandler<Event> {
  private readonly logger = Logger.getLogger('LogAllEventHandler');

  public handle(event: Event): void {
    this.logger.debug(`${event.type}`, event);
  }
}
