import { IFlashCard } from '@/shared/types/flash-card.type';
import { ChatBubbleType } from '@/shared/enums';
import { IChatBubble } from '@/shared/types';
import { create } from 'zustand';

interface BearState {
  chatBubbles: IChatBubble[];
  flashCards: IFlashCard[];
  useTyper: boolean;
  setUseTyper: (useTyper: boolean) => void;
  updateChatBubbles: (newChatBubbles: IChatBubble[]) => void;
  updateFlashCards: (newFlashCards: IFlashCard[]) => void;
}

export const useChatStore = create<BearState>()((set) => ({
  chatBubbles: [
    {
      text: 'Cześć, Jan! Tu Financzeska, Twoja prywatna przewodnika po świecie regulacji finansowych, ekonomicznych i podatkowych. W czym mogę Ci dzisiaj pomóc?',
      type: ChatBubbleType.ANSWER,
    },
  ],
  flashCards: [],
  useTyper: false,
  setUseTyper: (useTyper: boolean) => {
    set(() => ({
      useTyper: useTyper,
    }));
  },
  updateChatBubbles: (newChatBubble: IChatBubble[]) => {
    set((state) => ({
      chatBubbles: [...state.chatBubbles, ...newChatBubble],
    }));
  },
  updateFlashCards: (newFlashCards: IFlashCard[]) => {
    set((state) => ({
      flashCards: [...state.flashCards, ...newFlashCards],
    }));
  },
}));
