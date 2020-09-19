import generateInvestmentsGrowth, {
  IGenerateInvestmentGrowth,
} from './generateInvestmentsGrowth';

export type IAccountData = {
  user: { name: string };
  investments: Array<IGenerateInvestmentGrowth>;
  // investments: Investments;
};

export type GenerateAccountData = (name: string) => IAccountData;

const generateAccountData: GenerateAccountData = (name) => ({
  user: { name },
  investments: generateInvestmentsGrowth(),
  // investments: generateInvestments(),
});

export default generateAccountData;
