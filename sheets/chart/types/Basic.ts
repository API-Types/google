import { BaseDomain, BaseSpec } from '../Base';
import { TextFormat, Color, ColorStyle } from '../../Format';
import { TextPosition, ChartAxisViewWindowOptions, ChartData, LineStyle } from '../Chart';

export interface BasicAxis {
	position: BasicAxisPosition;
	title: string;
	format: TextFormat;
	titleTextPosition: TextPosition;
	viewWindowOptions: ChartAxisViewWindowOptions;
}

export enum BasicAxisPosition {
	BASIC_CHART_AXIS_POSITION_UNSPECIFIED,
	BOTTOM_AXIS,
	LEFT_AXIS,
	RIGHT_AXIS
}

export enum BasicCompareMode {
	BASIC_CHART_COMPARE_MODE_UNSPECIFIED,
	DATUM,
	CATEGORY
}

export interface BasicSeries {
	series: ChartData;
	targetAxis: BasicAxisPosition;
	type: BasicType;
	lineStyle: LineStyle;
	color: Color;
	colorStyle: ColorStyle;
}

export interface BasicSpec extends BaseSpec<BasicSpec> {
	chartType: keyof typeof BasicType;
	axis: BasicAxis[];
	domains: BaseDomain[];
	series: BasicSeries[];
	headerCount: number;
	threeDimensional: boolean;
	interpolateNulls: boolean;
	stackedType: BasicStackedType;
	lineSmoothing: boolean;
	compareMode: BasicCompareMode;
}

export enum BasicStackedType {
	BASIC_CHART_STACKED_TYPE_UNSPECIFIED,
	NOT_STACKED,
	STACKED,
	PERCENT_STACKED
}

export enum BasicType {
	BASIC_CHART_TYPE_UNSPECIFIED,
	BAR,
	LINE,
	AREA,
	COLUMN,
	SCATTER,
	COMBO,
	STEPPED_AREA
}
