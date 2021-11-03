import { initClientConfig } from './config/webpack/settings/initClientConfig';
import { initServerConfig } from './config/webpack/settings/initServerConfig';

const configs = [initServerConfig, initClientConfig];

export default configs;
