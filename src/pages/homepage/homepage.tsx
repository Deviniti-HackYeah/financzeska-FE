import { ChatWrapper, FlashCardsWrapper } from '@/pages/homepage/components';
import { useChatStore } from '@/shared/stores/chat-store';

export const Homepage = () => {
  const { chatBubbles, updateChatBubbles, flashCards } = useChatStore();

  return (
    <div className="h-full w-full bg-slate-200 p-4">
      <div className="grid h-full grid-cols-5 space-x-4">
        <ChatWrapper
          chatBubbles={chatBubbles}
          addChatBubble={updateChatBubbles}
        />
        <FlashCardsWrapper flashCards={flashCards} />
      </div>

      <div className="fixed bottom-4 right-6"></div>
    </div>
  );
};
