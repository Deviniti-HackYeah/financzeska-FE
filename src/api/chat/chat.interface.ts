import { IChatBubble } from "@/shared/types";
import { IFlashCard } from "@/shared/types/flash-card.type";

export interface ChatDataResponse {
  flashCards: IFlashCard[];
  bubble: IChatBubble;
}