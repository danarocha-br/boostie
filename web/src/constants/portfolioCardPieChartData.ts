import { complement, lighten } from 'polished';
import colors from '../styles/colors';

export default [
  {
    id: 'pharmaceuticals',
    label: 'Pharmaceuticals',
    value: 107,
    color: colors.green[900],
  },
  {
    id: 'insurance',
    label: 'Multi-line Insurance',
    value: 98,
    color: complement(colors.purple[900]),
  },
  {
    id: 'banks',
    value: 71,
    label: 'Diversidied Banks',
    color: colors.yellow[900],
  },
  {
    id: 'oil',
    value: 45,
    label: 'Integrated Oil & Gas',
    color: lighten(0.12, colors.purple[900]),
  },
  {
    id: 'retail',
    value: 62,
    label: 'Retail REITs',
    color: colors.red[900],
  },
  {
    id: 'eletronics',
    value: 23,
    label: 'Eletronics',
    color: colors.gray[50],
  },
  {
    id: 'energy',
    value: 72,
    label: 'Energy',
    color: complement(colors.red[900]),
  },
];
