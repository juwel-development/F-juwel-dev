import { type FunctionComponent, type PropsWithChildren } from 'react';
import { Box } from '../Atom/Layout/Box';
import { Flex } from '../Atom/Layout/Flex.tsx';

const LinkBoxStyle: FunctionComponent<PropsWithChildren<{ to?: string }>> = ({ children, to }) => {
    return (
        <Box outline={to ? 'hover' : undefined}>
            <Flex.Root direction="column" justify="center" items="center">
                <Flex.Item>{children}</Flex.Item>
            </Flex.Root>
        </Box>
    );
};
export const LinkBox: FunctionComponent<PropsWithChildren<{ to?: string }>> = ({ children, to }) => {
    if (to) {
        return <a href={to} data-astro-prefetch="viewport"><LinkBoxStyle to={to}>{children}</LinkBoxStyle></a>;
    }
    return <LinkBoxStyle>{children}</LinkBoxStyle>;
};
