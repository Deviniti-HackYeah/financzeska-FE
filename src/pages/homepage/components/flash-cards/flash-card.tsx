import { FlashCardChart } from '@/pages/homepage/components/flash-cards/flash-card-content/flash-card-chart';
import { FlashCardMap } from '@/pages/homepage/components/flash-cards/flash-card-content/flash-card-map';
import { IFlashCard } from '@/shared/types/flash-card.type';
import { FlashCardType } from '@/shared/enums';
import { LatLngExpression } from 'leaflet';
import { cn } from '@/shared/utils';

export const FlashCard = (props: IFlashCard) => {
  const { text, type, latLang } = props;

  return (
    <div
      className={cn('rounded-md bg-white p-2 min-h-[200px]', {
        // 'bg-white': type === 'map',
        // 'bg-white': type === 'chart',
      })}
    >
      <p dangerouslySetInnerHTML={{ __html: text }}></p>

      {type === FlashCardType.MAP && (
        <FlashCardMap latLang={latLang as LatLngExpression} />
      )}
      {type === FlashCardType.CHART && <FlashCardChart />}
    </div>
  );
};
