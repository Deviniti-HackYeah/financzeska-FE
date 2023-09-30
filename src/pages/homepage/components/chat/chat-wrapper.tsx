import { ChatBubble } from '@/pages/homepage/components/chat/chat-bubble';
import { ChatInput } from '@/pages/homepage/components/chat/chat-input';
import { useChatStore } from '@/shared/stores';
import { FlashCardType } from '@/shared/enums';
import { askQuestion } from '@/api/documents';
import { IChatBubble } from '@/shared/types';
import { useMutation } from 'react-query';
import { useEffect, useRef } from 'react';

interface InnerProps {
  chatBubbles: IChatBubble[];
  addChatBubble: (bubble: IChatBubble) => void;
}

export const ChatWrapper = ({ chatBubbles, addChatBubble }: InnerProps) => {
  const { updateFlashCards } = useChatStore();
  const bubblesRef = useRef<HTMLDivElement>(null);

  const questionMutation = useMutation({
    mutationFn: (data: string) => {
      console.log('aaaaa', data);
      return askQuestion({ question: data });
    },
    onSuccess: (data) => {
      console.log('data', data);
      updateFlashCards([
        {
          text: 'hihihihi',
          type: FlashCardType.TEXT,
        },
      ]);
    },
  });

  const handleBubbleAdd = (bubble: IChatBubble) => {
    addChatBubble(bubble);
    questionMutation.mutate(bubble.text);
  };

  useEffect(() => {
    setTimeout(() => {
      if (!bubblesRef.current) return;
      bubblesRef.current.scrollTop = bubblesRef.current.scrollHeight;
    }, 0);
  }, [chatBubbles.length]);

  return (
    <div className="col-span-2 flex h-full flex-row overflow-auto">
      <div className="flex h-full w-full flex-col rounded-md bg-white p-4">
        <h1 className="mb-4 text-center text-xl font-semibold">
          Cześć! Tu Financeska!<br></br> Jak moge ci pomoc
        </h1>

        <div
          className="mb-4 flex scroll-p-[24px] flex-col space-y-2 overflow-auto"
          ref={bubblesRef}
        >
          {chatBubbles.map((bubble, index) => (
            <ChatBubble key={index} type={bubble.type} text={bubble.text} />
          ))}
        </div>

        <ChatInput onAddBubble={(bubble) => handleBubbleAdd(bubble)} />
        <small className="mt-1 text-gray-400">
          Naciśniej ENTER aby zapytać
        </small>
      </div>
    </div>
  );
};
