import { ChatBubbleType, FlashCardType } from '@/shared/enums';
import { IFlashCard } from '@/shared/types/flash-card.type';
import { IChatBubble } from '@/shared/types';
import { create } from 'zustand';

interface BearState {
  chatBubbles: IChatBubble[];
  flashCards: IFlashCard[];
  updateChatBubbles: (newChatBubbles: IChatBubble) => void;
  updateFlashCards: (newFlashCards: IFlashCard[]) => void;
}

export const useChatStore = create<BearState>()((set) => ({
  chatBubbles: [
    {
      text: 'Hello, I am a bear. I am here to help you learn about the fish in the Fraser River.',
      type: ChatBubbleType.QUESTION,
    },
    {
      text: 'What would you like to learn about?',
      type: ChatBubbleType.ANSWER,
    },
  ],
  flashCards: [
    {
      type: FlashCardType.MAP,
      latLang: [50.06785240422028, 19.991381368264097],
      text: 'Tutaj fajny tekst',
    },
    {
      type: FlashCardType.TEXT,
      text: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.  lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. <a href="/">click me</a>',
    },
    {
      type: FlashCardType.CHART,
      text: 'Wykres wynagrodzeń 2024',
      chartData: [
        {
          name: 'Page A',
          pv: 2400,
        },
        {
          name: 'Page B',
          pv: 1398,
        },
        {
          name: 'Page C',
          pv: 9800,
        },
        {
          name: 'Page D',
          pv: 3908,
        },
        {
          name: 'Page E',
          pv: 4800,
        },
        {
          name: 'Page F',
          pv: 3800,
        },
        {
          name: 'Page G',
          pv: 4300,
        },
      ],
    },
  ],
  updateChatBubbles: (newChatBubble: IChatBubble) => {
    set((state) => ({
      chatBubbles: [...state.chatBubbles, newChatBubble],
    }));
  },
  updateFlashCards: (newFlashCards: IFlashCard[]) => {
    set((state) => ({
      flashCards: [...state.flashCards, ...newFlashCards],
    }));
  },
}));
