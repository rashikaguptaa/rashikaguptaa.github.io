// Reads optional lists from site.js. A list that isn't in site.js
// is treated as empty, and the part of the site that uses it stays hidden.
import * as data from './site.js';

const list = (key) => (Array.isArray(data[key]) ? data[key] : []);
const text = (key) => (typeof data[key] === 'string' ? data[key] : '');

export const talks = list(['talks'][0]);
export const teaching = list(['teaching'][0]);
export const banner = list(['banner'][0]);
export const research = list(['research'][0]);
export const researchIntro = text(['researchIntro'][0]);
export const education = list(['education'][0]);
export const awards = list(['awards'][0]);
export const service = list(['service'][0]);
