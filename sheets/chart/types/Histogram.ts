import { BaseSpec } from '../Base';
import { ChartData } from '../Chart';
import { Color, ColorStyle } from '../../Format';

export interface HistogramSpec extends BaseSpec<HistogramSpec> {
	bucketSize: number;
	outlierPercentile: number;
	series: HistogramSeries[];
	showItemDividers: boolean;
}

export interface HistogramSeries {
	barColor: Color;
	barColorStyle: ColorStyle;
	data: ChartData;
}
