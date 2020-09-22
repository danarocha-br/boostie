import generateInvestmentsGrowth, {
  IGenerateInvestmentGrowth,
} from './generateInvestmentsGrowth';
import generatePieChartData, {
  IGeneratePieChartData,
} from './generatePieChartData';
import generatePortfolioLineChartData, {
  IPortfolioChart,
} from './generatePortfolioLineChartData';

export interface IAccountData {
  user: { name: string };
  barChart: Array<IGenerateInvestmentGrowth>;
  pieChart: Array<IGeneratePieChartData>;
  lineChart: IPortfolioChart;
}

export type IGenerateAccountData = (name: string) => IAccountData;

const generateAccountData: IGenerateAccountData = (name) => ({
  user: { name },
  barChart: generateInvestmentsGrowth(),
  pieChart: generatePieChartData(),
  lineChart: generatePortfolioLineChartData(),
});

export default generateAccountData;
