import faker from 'faker';

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
  const currentDaysInterval = [
    '1st',
    '4th',
    '7th',
    '12th',
    '16th',
    '20th',
    '23rd',
    '25th',
    '27th',
    '30th',
  ];

  const lineChartData = currentDaysInterval.map((day) => ({
    x: day,
    y: visible ? +faker.finance.amount(1000, 2000) : 0,
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
