import { ChatBubble } from '@/pages/homepage/components/chat/chat-bubble';
import { ChatInput } from '@/pages/homepage/components/chat/chat-input';
import { useChatStore } from '@/shared/stores';
import { ChatBubbleType, FlashCardType } from '@/shared/enums';
import { IChatBubble } from '@/shared/types';
import { useMutation } from 'react-query';
import { useEffect, useRef } from 'react';
import { askQuestion } from '@/api/chat';

interface InnerProps {
  chatBubbles: IChatBubble[];
  addChatBubble: (bubble: IChatBubble[]) => void;
}

export const ChatWrapper = ({ chatBubbles, addChatBubble }: InnerProps) => {
  const { updateFlashCards, useTyper, setUseTyper } = useChatStore();
  const bubblesRef = useRef<HTMLDivElement>(null);

  const questionMutation = useMutation({
    mutationFn: (data: string) => {
      console.log('aaaaa', data);
      return askQuestion({ question: data });
    },
    onSuccess: (data) => {
      addChatBubble([{
        text: data.chats[0].message,
        type: ChatBubbleType.ANSWER
      }])
      updateFlashCards([
        {
          text: 'hihihihi',
          type: FlashCardType.TEXT,
        },
      ]);
    },
  });

  const handleBubbleAdd = (bubble: IChatBubble) => {
    setUseTyper(true);
    addChatBubble([bubble]);
    questionMutation.mutate(bubble.text);
  };

  useEffect(() => {
    setTimeout(() => {
      if (!bubblesRef.current) return;
      bubblesRef.current.scrollTop = bubblesRef.current.scrollHeight;
    }, 1500);
  }, [chatBubbles.length]);

  return (
    <div className="col-span-2 flex h-full flex-row overflow-auto shadow-sm">
      <div className="flex h-full w-full flex-col rounded-md bg-white p-4">
        <div className="flex justify-center">
          <img className="block h-[100px] w-[200px]" src="/assets/logo.png" />
        </div>

        <div
          className="mb-4 flex scroll-p-[24px] flex-col space-y-4 overflow-auto"
          ref={bubblesRef}
        >
          {chatBubbles.map((bubble, index) => (
            <ChatBubble
              key={index}
              type={bubble.type}
              text={bubble.text}
              useTyper={useTyper}
            />
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
