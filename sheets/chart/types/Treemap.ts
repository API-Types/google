import { ChartData } from '../Chart';
import { TextFormat, Color, ColorStyle } from '../../Format';

export interface TreemapColorScale {
	maxValueColor: Color;
	maxValueColorStyle: ColorStyle;
	midValueColor: Color;
	midValueColorStyle: ColorStyle;
	minValueColor: Color;
	minValueColorStyle: ColorStyle;
	noDataColor: Color;
	noDataColorStyle: ColorStyle;
}

export interface TreemapSpec {
	colorData: ChartData;
	colorScale: TreemapColorScale;
	headerColor: Color;
	headerColorStyle: ColorStyle;
	hideTooltips: boolean;
	hintedLevels: number;
	labels: ChartData;
	levels: number;
	maxValue: number;
	minValue: number;
	parentLabels: ChartData;
	sizeData: ChartData;
	textFormat: TextFormat;
}
