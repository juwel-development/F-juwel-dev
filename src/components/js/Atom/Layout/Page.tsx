import type { FunctionComponent, PropsWithChildren } from 'react';
import { InternalLink } from '../Typography';

interface IProps {
  closeUrl: string | undefined;
}
export const Page: FunctionComponent<PropsWithChildren<IProps>> = ({
  children,
  closeUrl,
}) => {
  return (
    <>
      {closeUrl && (
        <nav className="absolute top-4 right-4 md:top-6 md:right-12">
          <InternalLink to={closeUrl}>
            <button
              type={'button'}
              className="w-10 h-10 md:w-14 md:h-14 focus:outline-none rounded-md group bg-background-box bg-opacity-60 hover:outline hover:outline-primary-500"
            >
              <div className="block w-5 md:w-7 absolute transform -translate-x-5 md:-translate-x-3.5 -translate-y-0 md:-translate-y-0.5">
                <span className="block absolute h-0.5 w-6 md:w-7 text-contrast-500 bg-current transform transition duration-500 ease-in-out rotate-45 translate-x-7" />
                <span className="block absolute h-0.5 w-6 md:w-7 text-contrast-500 bg-current transform transition duration-500 ease-in-out -rotate-45 translate-y-0 translate-x-7" />
              </div>
            </button>
          </InternalLink>
        </nav>
      )}
      <main
        className="absolute top-0 bottom-0 right-0 left-0 bg-repeat -z-10 select-none overflow-auto px-4 py-12 md:py-0"
        style={{ backgroundImage: 'url(/img/page/bg.png)' }}
      >
        {children}
      </main>
      <footer className="absolute bottom-0 left-0 m-2">
        <InternalLink to="/imprint">Imprint</InternalLink>
      </footer>
    </>
  );
};
