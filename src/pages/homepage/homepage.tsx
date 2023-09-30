import { ChatWrapper, FlashCardsWrapper } from '@/pages/homepage/components';
import { useChatStore } from '@/shared/stores/chat-store';

export const Homepage = () => {
  const { chatBubbles, updateChatBubbles, flashCards } = useChatStore();

  return (
    <div className="h-full w-full bg-slate-200 p-6">
      <div className="grid h-full grid-cols-5 space-x-6">
        <ChatWrapper
          chatBubbles={chatBubbles}
          addChatBubble={updateChatBubbles}
        />
        {!flashCards.length ? (
          <div className="col-span-3 flex items-center justify-center">
            <img
              className="h-[400px]"
              src="/assets/financzeska.svg"
              alt="flashcards"
            />
          </div>
        ) : (
          <FlashCardsWrapper flashCards={flashCards} />
        )}
      </div>

      <div className="fixed bottom-4 right-6"></div>
    </div>
  );
};
