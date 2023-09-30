import { FlashCardChart } from '@/pages/homepage/components/flash-cards/flash-card-content/flash-card-chart';
import { FlashCardMap } from '@/pages/homepage/components/flash-cards/flash-card-content/flash-card-map';
import { IFlashCard } from '@/shared/types/flash-card.type';
import { FlashCardType } from '@/shared/enums';
import { LatLngExpression } from 'leaflet';
import { cn } from '@/shared/utils';

export const FlashCard = (props: IFlashCard) => {
  const { text, title, type, latLang, chartData, chartType } = props;

  return (
    <div
      className={cn('rounded-md bg-white p-6 min-h-[200px] overflow-auto shadow-sm', {
        // 'bg-white': type === 'map',
        // 'bg-white': type === 'chart',
      })}
    >
      <h4 className="mb-2 text-lg font-medium">{title}</h4>
      <p
        className="mb-2 text-sm"
        dangerouslySetInnerHTML={{ __html: text }}
      ></p>

      {type === FlashCardType.MAP && (
        <FlashCardMap latLang={latLang as LatLngExpression} />
      )}
      {type === FlashCardType.CHART && chartType && (
        <FlashCardChart chartData={chartData} chartType={chartType} />
      )}
    </div>
  );
};
