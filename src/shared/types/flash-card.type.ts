import { FlashCardType } from '@/shared/enums';

export interface IFlashCard {
  latLang?: [number, number];
  type: FlashCardType;
  chartData?: any;
  text: string;
}
