import faker from 'faker';

import generateMonthsInterval from './generateMonthsInterval';
import { formatCurrency } from '~/utils';

export type IGeneratePortfolioHistory = {
  id: string;
  value: number | string;
  result: string;
  month: string;
  year: number;
};

export type GeneratePortfoliosHistory = (
  visible?: boolean,
) => Array<IGeneratePortfolioHistory>;

const generatePortfolioHistory: GeneratePortfoliosHistory = (
  visible = true,
) => {
  const currentMonthsInterval = generateMonthsInterval();

  return currentMonthsInterval.reverse().map((month) => {
    const value = visible ? +faker.finance.amount(60000, 80000, 2) : 1;
    let random = Math.random() * (0.0005 - -0.0001) + -0.0001;
    const result = (value * random).toFixed(2);
    const year = 20;

    return {
      id: month,
      month,
      value: formatCurrency(value),
      result,
      year,
    };
  });
};

export default generatePortfolioHistory;
