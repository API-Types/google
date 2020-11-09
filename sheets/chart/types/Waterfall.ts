import { BaseDomain } from '../Base';
import { LineStyle, ChartData } from '../Chart';
import { Color, ColorStyle } from '../../Format';

export interface WaterfallColumnStyle {
	color: Color;
	colorStyle: ColorStyle;
	label: string;
}

export interface WaterfallCustomSubtotal {
	dataIsSubtotal: boolean;
	label: string;
	subtotalIndex: number;
}

export interface WaterfallSeries {
	customSubtotals: WaterfallCustomSubtotal;
	data: ChartData;
	hideTrailingSubtotal: boolean;
	negativeColumnsStyle: WaterfallColumnStyle;
	positiveColumnsStyle: WaterfallColumnStyle;
	subtotalColumnsStyle: WaterfallColumnStyle;
}

export interface WaterfallSpec {
	connectorLineStyle: LineStyle;
	domain: BaseDomain;
	firstValueIsTotal: boolean;
	hideConnectorLines: boolean;
	series: WaterfallSeries[];
	stackedType: keyof typeof WaterfallStackedType;
}

export enum WaterfallStackedType {
	WATERFALL_STACKED_TYPE_UNSPECIFIED,
	STACKED,
	SEQUENTIAL
}
