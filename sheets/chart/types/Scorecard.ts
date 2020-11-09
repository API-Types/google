import {
	ChartAggregateType,
	ChartCustomNumberFormatOptions,
	ChartData,
	ChartNumberFormatSource,
	KeyValueFormat,
	BaselineValueFormat
} from '../Chart';

export interface ScorecardSpec {
	aggregateType: keyof typeof ChartAggregateType;
	baselineValueData: ChartData;
	baselineValueFormat: BaselineValueFormat;
	customFormatOptions: ChartCustomNumberFormatOptions;
	keyValueData: ChartData;
	keyValueFormat: KeyValueFormat;
	numberFormatSource: keyof typeof ChartNumberFormatSource;
	scaleFactor: number;
}
