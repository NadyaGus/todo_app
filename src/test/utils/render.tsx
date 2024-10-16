import { MantineProvider } from '@mantine/core';
import { render as testingLibraryRender } from '@testing-library/react';

import { theme } from '../../utils/mantine/theme';

export function render(ui: React.ReactNode): ReturnType<typeof testingLibraryRender> {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider theme={theme}>{children}</MantineProvider>
    ),
  });
}
