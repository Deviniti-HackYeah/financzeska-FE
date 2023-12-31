import { FlashCard } from '@/pages/homepage/components/flash-cards/flash-card';
import { IFlashCard } from '@/shared/types/flash-card.type';

interface InnerProps {
  flashCards: IFlashCard[];
}

export const FlashCardsWrapper = ({ flashCards }: InnerProps) => {
  return (
    <div className="col-span-3 grid h-full auto-rows-max grid-cols-2 gap-6 overflow-auto">
      {flashCards.map((flashCard, idx) => (
        <FlashCard key={idx} {...flashCard} />
      ))}
    </div>
  );
};
