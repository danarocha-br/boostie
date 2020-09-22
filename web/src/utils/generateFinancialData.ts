import generateInvestmentsGrowth, {
  IGenerateInvestmentGrowth,
} from './generateInvestmentsGrowth';
import generatePieChartData, {
  IGeneratePieChartData,
} from './generatePieChartData';

export interface IAccountData {
  user: { name: string };
  investments: Array<IGenerateInvestmentGrowth>;
  pieChart: Array<IGeneratePieChartData>;
}

export type IGenerateAccountData = (name: string) => IAccountData;

const generateAccountData: IGenerateAccountData = (name) => ({
  user: { name },
  investments: generateInvestmentsGrowth(),
  pieChart: generatePieChartData(),
});

export default generateAccountData;
