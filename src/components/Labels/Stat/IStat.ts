export default interface IStat {
  type?: 'decrease' | 'increase' | boolean | null;
  value: number | string;
  currency?: string;
  result?: string | null;
  year?: number;
  month?: string;
  loading?: boolean;
  isVisible?: boolean;
  divider?: boolean;
  title?: string;
}
