import { ChartType, ChatBubbleType, FlashCardType } from '@/shared/enums';
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
      text: 'Cześć tutaj Financzeszka lalalalalala.',
      type: ChatBubbleType.ANSWER,
    },
  ],
  flashCards: [
    {
      type: FlashCardType.MAP,
      latLang: [50.06785240422028, 19.991381368264097],
      text: 'Twoj urzad znajduje sie na ulicy: ul. Karmelicka 46 31-128 Kraków',
      title: 'Miejsce urzedu'
    },
    {
      type: FlashCardType.TEXT,
      text: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.  lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. <a href="/">click me</a>',
      title: 'Jak dostać odszkodowanie?'
    },
    {
      type: FlashCardType.CHART,
      text: 'Wykres przedstawia wynagrodzenia polaków w 2024 roku',
      title: 'Wykres zarobkow polakow',
      chartType: ChartType.BAR,
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
    {
      type: FlashCardType.CHART,
      text: 'Na wykresie znajduje sie zuzycie wody w 2020 roku w Polsce',
      title: 'Wykres zuzycia wody',
      chartType: ChartType.PIE,
      chartData: [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 100 },
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
