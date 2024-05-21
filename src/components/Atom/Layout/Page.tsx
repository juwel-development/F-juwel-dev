import type { FunctionComponent, PropsWithChildren } from 'react';
import { InternalLink } from '../Typography/InternalLink.tsx';

export const Page: FunctionComponent<PropsWithChildren> = ({ children }) => {
  // const applicationEventDispatcher = container.resolve(ApplicationEventDispatcher);
  //
  // const ref = useRef<HTMLDivElement>(null);
  // useLayoutEffect(() => {
  //   if (!ref.current) return;
  //   const subscription = fromEvent(ref.current, 'scroll').subscribe((event) => {
  //     applicationEventDispatcher.scrollEvent(event);
  //   });
  //   return () => subscription?.unsubscribe();
  // }, [ref]);

  return (
    <>
      <div
        className="absolute top-0 bottom-0 right-0 left-0 bg-repeat -z-10 select-none overflow-auto px-3 md:px-6"
        style={{ backgroundImage: `url(/img/page/bg.png)` }}
      >
        {children}
      </div>
      <div className="absolute bottom-0 left-0 m-2">
        <InternalLink to="/imprint">Imprint</InternalLink>
      </div>
    </>
  );
};