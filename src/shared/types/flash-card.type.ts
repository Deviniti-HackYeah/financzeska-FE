import { ChartType, FlashCardType } from '@/shared/enums';

export interface IFlashCard {
  latLang?: [number, number];
  type: FlashCardType;
  chartData?: any;
  chartType?: ChartType;
  text: string;
  title?: string;
}
