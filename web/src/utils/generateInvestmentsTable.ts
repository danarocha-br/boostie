import faker from 'faker';

import { formatCurrency } from '~/utils';

const ticker = [
  { label: 'APPL', companyURL: 'apple.com', market: 'nasdaq' },
  { label: 'BKNG', companyURL: 'booking.com', market: 'nasdaq' },
  { label: 'FB', companyURL: 'facebook.com', market: 'nasdaq' },
  { label: 'DIS', companyURL: 'disney.com', market: 'nyse' },
  { label: 'TSLA', companyURL: 'tesla.com', market: 'nyse' },
  { label: 'GOGGL', companyURL: 'google.com', market: 'nasdaq' },
  { label: 'AMZN', companyURL: 'amazon.com', market: 'nyse' },
];

export type IGenerateInvestmentTable = {
  ticker: string;
  companyUrl: string;
  market: string;
  shares: number | string;
  avg_price: number | string;
  price: number | string;
  return_pct: number;
  net_cost: number | string;
  market_value: number | string;
  total_gain: number;
  daily_gain: number;
  portfolio_pct: number;
};

export type GeneratePortfoliosHistory = (
  visible?: boolean,
) => Array<IGenerateInvestmentTable>;

const generateInvestmentsTable: GeneratePortfoliosHistory = () => {
  return ticker.map((item) => {
    const value = +faker.finance.amount(60000, 80000, 2);
    const avgPrice = +faker.finance.amount(30, 1300, 2);
    const price = avgPrice * Math.random();
    let random = Math.random() * (0.0005 - -0.0001) + -0.0001;
    const net = value - price;
    const result = (value * random).toFixed(2);
    const return_price = (50000 * random).toFixed(2);
    const shares = Math.random() * 600;
    const daily = (Math.random() * 10).toFixed(2);
    const portfolio = (Math.random() * 25).toFixed(2);

    return {
      ticker: item.label,
      companyUrl: item.companyURL,
      market: item.market,
      shares: shares.toFixed(0),
      avg_price: formatCurrency(avgPrice),
      price: formatCurrency(price),
      return_pct: parseFloat(return_price),
      net_cost: formatCurrency(net),
      market_value: formatCurrency(value),
      total_gain: parseFloat(result),
      daily_gain: parseFloat(daily),
      portfolio_pct: parseFloat(portfolio),
    };
  });
};

export default generateInvestmentsTable;
