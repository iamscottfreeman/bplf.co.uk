import { Roboto } from 'next/font/google';
import { Roboto_Condensed } from 'next/font/google';

const body = Roboto({ weight: '400', subsets: ['latin'], variable: '--font-roboto' });
const header = Roboto_Condensed({ weight: '700', subsets: ['latin'] });

export const fonts = {
  body,
  header
};
