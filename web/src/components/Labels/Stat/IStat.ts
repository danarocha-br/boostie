export default interface IStat {
  type?: 'decrease' | 'increase';
  value: number;
  currency: string;
  result: string;
  year?: number;
  month?: string;
}
