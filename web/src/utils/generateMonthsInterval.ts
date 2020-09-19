import { eachMonthOfInterval, subMonths, format } from 'date-fns';
import { enUS } from 'date-fns/locale';

export type GenerateMonthsInterval = () => Array<string>;

const generateMonthsInterval: GenerateMonthsInterval = () => {
  const currentMonthsInterval = eachMonthOfInterval({
    start: subMonths(new Date(), 11),
    end: new Date(),
  });

  return currentMonthsInterval.map((month) =>
    format(month, 'LLL', { locale: enUS }).toLowerCase(),
  );
};

export default generateMonthsInterval;
