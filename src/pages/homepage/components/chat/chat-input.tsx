import { ChatBubbleType } from '@/shared/enums';
import { IChatBubble } from '@/shared/types';
import { Input } from '@/shared/components';
import { MicIcon } from 'lucide-react';
import { useState } from 'react';

interface InnerProps {
  onAddBubble: (bubble: IChatBubble) => void;
}

export const ChatInput = ({ onAddBubble }: InnerProps) => {
  const [question, setQuestion] = useState('');

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && !!question) {
      handleAskQuestion();
    }
  }

  const handleAskQuestion = () => {
    onAddBubble({
      text: question,
      type: ChatBubbleType.QUESTION,
    });
    setQuestion('');
  };

  return (
    <div className="mt-auto flex items-center justify-center">
      <Input
        placeholder="Wpisz swoje pytanie..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <MicIcon className="ml-2 cursor-pointer" />
    </div>
  );
};
