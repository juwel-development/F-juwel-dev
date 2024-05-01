export interface ICommandUseCase<Req> {
  execute(request: Req): void;
}
