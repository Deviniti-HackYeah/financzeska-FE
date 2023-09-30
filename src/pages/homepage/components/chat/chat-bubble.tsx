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
      className={cn('rounded-lg px-4 py-4 text-white font-medium w-fit', {
        'bg-red-400 rounded-tl-none': type === ChatBubbleType.ANSWER,
        'bg-slate-200 rounded-br-none text-slate-600 ml-auto': type === ChatBubbleType.QUESTION,
      })}
    >
      <TypeAnimation cursor={false} sequence={[text]} wrapper="p" speed={60} />
    </div>
  );
};
