import { provideStore } from '@ngxs/store';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { withNgxsFormPlugin } from '@ngxs/form-plugin';
import { withNgxsLoggerPlugin } from '@ngxs/logger-plugin';
import { withNgxsStoragePlugin } from '@ngxs/storage-plugin';
import { withNgxsWebSocketPlugin } from '@ngxs/websocket-plugin';
import { withNgxsRouterPlugin } from '@ngxs/router-plugin';

import { UsersState } from './users/users.state';

declare const ngDevMode: boolean;

export function provideNgxs() {
  return provideStore(
    [UsersState],
    withNgxsReduxDevtoolsPlugin({
      disabled: typeof ngDevMode !== 'undefined' && !ngDevMode
    }),
    withNgxsFormPlugin(),
    withNgxsLoggerPlugin({
      disabled: typeof ngDevMode !== 'undefined' && !ngDevMode
    }),
    withNgxsStoragePlugin({ keys: '*' }),
    withNgxsWebSocketPlugin(),
    withNgxsRouterPlugin()
  );
}
