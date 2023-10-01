import { IFlashCard } from '@/shared/types/flash-card.type';
import { IChatBubble } from '@/shared/types';

export interface ChatDataResponse {
  flashCards: IFlashCard[];
  chatBubbles: IChatBubble[];
}
