import { TypeAnimation } from 'react-type-animation';
import { ChatBubbleType } from '@/shared/enums';
import { cn } from '@/shared/utils';

interface InnerProps {
  text: string;
  type: ChatBubbleType;
}

export const ChatBubble = ({ text, type }: InnerProps) => {
  return (
    <div
      className={cn('rounded-full  px-4 py-2 text-white', {
        'bg-indigo-400': type === ChatBubbleType.ANSWER,
        'bg-blue-400': type === ChatBubbleType.QUESTION,
      })}
    >
      <TypeAnimation cursor={false} sequence={[text]} wrapper="p" speed={50} />
    </div>
  );
};
