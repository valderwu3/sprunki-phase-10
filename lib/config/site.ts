import { SiteConfig } from '../types';
import siteConfigJSON from './site.json';
import defaultConfigJSON from './default.json';

let config = {...siteConfigJSON} as SiteConfig;

if (process.env.NODE_ENV === 'development') {
    config = {
        ...defaultConfigJSON,
        ...siteConfigJSON
    }
}

export const siteConfig: SiteConfig = config;
