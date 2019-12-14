import { Polyfill } from 'es6-promise-polyfill';

// Support for IE 9 - 11 which does not include Promises
const windowGlobal = typeof window !== 'undefined' && window;

if (!windowGlobal.Promise)
{
    windowGlobal.Promise = Polyfill;
}
