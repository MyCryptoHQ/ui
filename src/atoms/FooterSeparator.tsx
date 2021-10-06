import type { FunctionComponent } from 'react';

import { Box } from '.';

export interface FooterSeparatorProps {
  order?: number;
}

export const FooterSeparator: FunctionComponent<FooterSeparatorProps> = ({ order }) => (
  <Box
    height={{ _: '2px', lg: '220px' }}
    width={{ _: '150px', lg: '2px' }}
    mx={{ _: 0, lg: '55px' }}
    my={{ _: '20px', lg: 0 }}
    backgroundColor="footer.separator"
    opacity={0.2}
    order={order}
  />
);
