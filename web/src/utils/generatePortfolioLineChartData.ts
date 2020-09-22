import faker from 'faker';

import generateMonthsInterval from './generateMonthsInterval';
import colors from '../styles/colors';

export type IPortfolioTimeline = {
  x: string;
  y: number;
};

export type IGeneratedPortfolio = {
  id: string;
  color: string;
  data: Array<IPortfolioTimeline>;
};

export type IPortfolioChart = {
  timeline: Array<IGeneratedPortfolio>;
};

export type IGeneratedPortfolios = (visible?: boolean) => IPortfolioChart;

const generatePortfolioLineChartData: IGeneratedPortfolios = (
  visible = true,
) => {
  const currentMonthsInterval = generateMonthsInterval();

  const lineChartData = currentMonthsInterval.map((month) => ({
    x: month,
    y: visible ? +faker.finance.amount(1000, 80000) : 0,
  }));

  const timeline = [
    {
      id: 'investments',
      color: colors.green[900],
      data: lineChartData,
    },
  ];

  return {
    timeline,
  };
};

export default generatePortfolioLineChartData;
