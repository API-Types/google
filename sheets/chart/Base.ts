import { ChartData } from './Chart';
import { BasicSpec, BubbleSpec, HistogramSpec, PieSpec } from './types';

export interface BaseDomain {
	data: ChartData;
	reversed: boolean;
}

export interface BaseSpec<T> {
	legendPosition: LegendPosition<T>;
}

export enum Legend {
	TOP_LEGEND,
	BOTTOM_LEGEND,
	LEFT_LEGEND,
	RIGHT_LEGEND,
	NO_LEGEND
}

export type LegendPosition<T> =
	| (T extends BasicSpec
			? 'BASIC_CHART_LEGEND_POSITION_UNSPECIFIED'
			: T extends BubbleSpec
			? 'BUBBLE_CHART_LEGEND_POSITION_UNSPECFIED' | 'INSIDE_LEGEND'
			: T extends HistogramSpec
			? 'HISTOGRAM_CHART_LEGEND_POSITION_UNSPECIFIED' | 'INSIDE_LEGEND'
			: T extends PieSpec
			? 'PIE_CHART_LEGEND_POSITION_UNSPECIFIED' | 'LABELED_LEGEND'
			: null)
	| keyof typeof Legend;
