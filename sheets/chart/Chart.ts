import { GridRange } from '../Grid';
import { EmbeddedObjectPosition, FilterSpec, SortSpec } from '../util/Other';
import { TextFormat, Color, ColorStyle, HorizontalAlign } from '../Format';
import { DataSourceChartProperties, DataSourceColumnReference } from '../DataSource';
import {
	BasicSpec,
	BubbleSpec,
	CandlestickSpec,
	HistogramSpec,
	OrgSpec,
	PieSpec,
	ScorecardSpec,
	TreemapSpec,
	WaterfallSpec
} from './types';

export interface BaselineValueFormat {
	comparison: keyof typeof ComparisonType;
	textFormat: TextFormat;
	position: TextPosition;
	description: string;
	positiveColor: Color;
	positiveColorStyle: ColorStyle;
	negativeColor: Color;
	negativeColorStyle: ColorStyle;
}

export enum ChartAggregateType {
	CHART_AGGREGATE_TYPE_UNSPECIFIED,
	AVERAGE,
	COUNT,
	MAX,
	MEDIAN,
	MIN,
	SUM
}

export interface ChartAxisViewWindowOptions {
	viewWindowMin: number;
	viewWindowMax: number;
	viewWindowMode: ViewWindowMode;
}

export interface ChartCustomNumberFormatOptions {
	prefix: string;
	suffix: string;
}

export interface ChartData {
	groupRule: ChartGroupRule;
	aggregateType: keyof typeof ChartAggregateType;
	sourceRange?: ChartSourceRange;
	columnReference?: DataSourceColumnReference;
}

export interface ChartDateTimeRule {
	type: keyof typeof ChartDateTimeRuleType;
}

export enum ChartDateTimeRuleType {
	CHART_DATE_TIME_RULE_TYPE_UNSPECIFIED,
	SECOND,
	MINUTE,
	HOUR,
	HOUR_MINUTE,
	HOUR_MINUTE_AMPM,
	DAY_OF_WEEK,
	DAY_OF_YEAR,
	DAY_OF_MONTH,
	DAY_MONTH,
	MONTH,
	QUARTER,
	YEAR,
	YEAR_MONTH,
	YEAR_QUARTER,
	YEAR_MONTH_DAY
}

export interface ChartGroupRule {
	dateTimeRule?: ChartDateTimeRule;
	histogramRule?: ChartHistogramRule;
}

export enum ChartHiddenDimensionStrategy {
	CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED,
	SKIP_HIDDEN_ROWS_AND_COLUMNS,
	SKIP_HIDDEN_ROWS,
	SKIP_HIDDEN_COLUMNS,
	SHOW_ALL
}

export interface ChartHistogramRule {
	minValue: number;
	maxValue: number;
	intervalSize: number;
}

export enum ChartNumberFormatSource {
	CHART_NUMBER_FORMAT_SOURCE_UNSPECIFIED,
	FROM_DATA,
	CUSTOM
}

export interface ChartSourceRange {
	sources: GridRange[];
}

export interface ChartSpec {
	title: string;
	altText: string;
	titleTextFormat: TextFormat;
	titleTextPosition: TextPosition;
	subtitle: string;
	subtitleTextFormat: TextFormat;
	subtitleTextPosition: TextPosition;
	fontName: string;
	maximized: boolean;
	backgroundColor: Color;
	backgroundColorStyle: ColorStyle;
	dataSourceChartProperties: DataSourceChartProperties;
	filterSpecs: FilterSpec[];
	sortSpecs: SortSpec[];
	hiddenDimensionStrategy: keyof typeof ChartHiddenDimensionStrategy;
	basicChart?: BasicSpec;
	pieChart?: PieSpec;
	bubbleChart?: BubbleSpec;
	candlestickChart?: CandlestickSpec;
	orgChart?: OrgSpec;
	histogramChart?: HistogramSpec;
	waterfallChart?: WaterfallSpec;
	treemapChart?: TreemapSpec;
	scorecardChart?: ScorecardSpec;
}

export enum ComparisonType {
	COMPARISON_TYPE_UNSPECIFIED,
	ABSOLUTE_DIFFERENCE,
	PERCENTAGE_DIFFERENCE
}

export interface EmbeddedChart {
	chartId: number;
	spec: ChartSpec;
	position: EmbeddedObjectPosition;
}

export interface KeyValueFormat {
	textFormat: TextFormat;
	position: TextPosition;
}

export enum LineDashType {
	LINE_DASH_TYPE_UNSPECIFIED,
	INVISIBLE,
	CUSTOM,
	SOLID,
	DOTTED,
	MEDIUM_DOTTED,
	MEDIUM_DASHED_DOTTED,
	LONG_DASHED,
	LONG_DASHED_DOTTED
}

export interface LineStyle {
	width: number;
	type: keyof typeof LineDashType;
}

export interface TextPosition {
	horizontalAlignment: HorizontalAlign;
}

export enum ViewWindowMode {
	DEFAULT_VIEW_WINDOW_MODE,
	EXPLICIT,
	PRETTY,
	VIEW_WINDOW_MODE_UNSUPPORTED
}
