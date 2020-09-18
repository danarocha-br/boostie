export default interface IStat {
  type?: 'decrease' | 'increase';
  value: number | string;
  currency: string;
  result: string;
  year?: number;
  month?: string;
  loading?: boolean;
  isVisible?: boolean;
}
