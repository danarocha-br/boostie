import faker from 'faker';

import colors from '../styles/colors';
import generateMonthsInterval from './generateMonthsInterval';

export type IGenerateInvestmentGrowth = {
  month: string;
  capitalGain: number;
  capitalGainColor: string;
  dividends: number;
  dividendsColor: string;
  currency: number;
  currencyColor: string;
};

export type IGenerateInvestmentsGrowth = (
  visible?: boolean,
) => Array<IGenerateInvestmentGrowth>;

const generateInvestmentGrowth: IGenerateInvestmentsGrowth = (
  visible = true,
) => {
  const currentMonthsInterval = generateMonthsInterval();

  return currentMonthsInterval.map((month) => {
    const capitalGain = visible ? +faker.finance.amount(2750, 8000, 2) : 1;
    const dividends = visible ? +faker.finance.amount(320, 2470, 2) : 1;
    const currency = visible ? +faker.finance.amount(100, 500, 2) : 1;

    return {
      month,
      capitalGain,
      capitalGainColor: colors.purple[900],
      dividends,
      dividendsColor: colors.red[900],
      currency,
      currencyColor: colors.blue[50],
    };
  });
};

export default generateInvestmentGrowth;
