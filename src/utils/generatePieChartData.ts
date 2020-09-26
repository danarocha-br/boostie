import faker from 'faker';
import { complement, lighten, transparentize } from 'polished';
import colors from '../styles/colors';

export interface IGeneratePieChartData {
  [key: string]: string | number;
  id: string;
  label: string;
  value: number;
  color: string;
}

export type IGeneratePieChartsData = (
  visible?: boolean,
) => Array<IGeneratePieChartData>;

const generatePieChartData: IGeneratePieChartsData = (visible = true) => {
  const industries = [
    {
      id: 'pharmaceuticals',
      label: 'Pharmaceuticals',
      color: colors.green[900],
    },
    {
      id: 'insurance',
      label: 'Multi-line Insurance',
      color: complement(colors.purple[900]),
    },
    { id: 'banks', label: 'Diversidied Banks', color: colors.yellow[900] },
    {
      id: 'oil',
      label: 'Integrated Oil & Gas',
      color: lighten(0.12, colors.purple[900]),
    },
    { id: 'retail', label: 'Retail REITs', color: colors.red[900] },
    { id: 'eletronics', label: 'Eletronics', color: colors.gray[50] },
    { id: 'energy', label: 'Energy', color: complement(colors.red[900]) },
  ];

  return industries.map((industry) => {
    const value = visible ? +faker.finance.amount(200, 900, 0) : 0.1;
    const color = visible
      ? industry.color
      : transparentize(0.6, colors.gray[50]);

    return {
      id: industry.id,
      label: industry.label,
      value: Number(value),
      color,
    };
  });
};

export default generatePieChartData;
