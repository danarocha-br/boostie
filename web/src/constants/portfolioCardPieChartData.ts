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
    label: 'Diversidied Banks',
    value: 71,
    color: colors.yellow[900],
  },
  {
    id: 'oil',
    label: 'Integrated Oil & Gas',
    value: 45,
    color: lighten(0.12, colors.purple[900]),
  },
  {
    id: 'retail',
    label: 'Retail REITs',
    value: 62,
    color: colors.red[900],
  },
  {
    id: 'eletronics',
    label: 'Eletronics',
    value: 23,
    color: colors.gray[50],
  },
  {
    id: 'energy',
    label: 'Energy',
    value: 72,
    color: complement(colors.red[900]),
  },
];
