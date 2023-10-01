import { ChatWrapper, FlashCardsWrapper } from '@/pages/homepage/components';
import { useChatStore } from '@/shared/stores/chat-store';
import { getChatData } from '@/api/chat';
import { useQuery } from 'react-query';
import { useEffect } from 'react';

export const Homepage = () => {
  const {
    chatBubbles,
    updateChatBubbles,
    flashCards,
    updateFlashCards,
    setUseTyper,
  } = useChatStore();
  const { data } = useQuery('chatDBDat', getChatData);

  useEffect(() => {
    if (data) {
      updateChatBubbles(data.chatBubbles);
      updateFlashCards(data.flashCards);
      setUseTyper(false);
    }
  }, [data]);

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
