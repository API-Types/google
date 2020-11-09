import { ChartData } from '../Chart';
import { BaseDomain } from '../Base';

export interface CandlestickData {
	closeSeries: CandlestickSeries;
	hightSeries: CandlestickSeries;
	lowSeries: CandlestickSeries;
	openSeries: CandlestickSeries;
}

export interface CandlestickSeries {
	data: ChartData;
}

export interface CandlestickSpec {
	domain: BaseDomain;
	data: CandlestickData[];
}
