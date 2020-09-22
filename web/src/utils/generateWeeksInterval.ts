import {
  eachMonthOfInterval,
  eachWeekOfInterval,
  subMonths,
  format,
} from 'date-fns';
import { enUS } from 'date-fns/locale';

export type GenerateDaysInterval = () => Array<string>;

const generateDaysInterval: GenerateDaysInterval = () => {
  const currentMonthsInterval = eachMonthOfInterval({
    start: subMonths(new Date(), 11),
    end: new Date(),
  });

  const weeksOfTheMonth = eachWeekOfInterval({
    start: currentMonthsInterval[0],
    end: currentMonthsInterval[currentMonthsInterval.length - 1],
  });

  return weeksOfTheMonth.map((week) => format(week, 'do', { locale: enUS }));
};

export default generateDaysInterval;
