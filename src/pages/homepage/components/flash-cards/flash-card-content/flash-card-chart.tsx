import { ChartBar } from '@/pages/homepage/components/flash-cards/flash-card-content/flash-card-chart/chart-bar';
import { ChartPie } from '@/pages/homepage/components/flash-cards/flash-card-content/flash-card-chart/chart-pie';
import { ChartType } from '@/shared/enums';

interface InnerProps {
  chartType: ChartType;
  chartData: any[];
}

export const FlashCardChart = ({ chartData, chartType }: InnerProps) => {
  return (
    <div className="h-full max-h-[400px]">
      {chartType === ChartType.BAR ? (
        <ChartBar data={chartData} />
      ) : (
        <ChartPie data={chartData} />
      )}
    </div>
  );
};
