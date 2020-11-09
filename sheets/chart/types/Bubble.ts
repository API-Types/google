import { BaseSpec } from '../Base';
import { ChartData } from '../Chart';
import { Color, ColorStyle, TextFormat } from '../../Format';

export interface BubbleSpec extends BaseSpec<BubbleSpec> {
	bubbleBorderColor: Color;
	bubbleBorderColorStyle: ColorStyle;
	bubbleLabels: ChartData;
	bubbleMaxRadiusSize: number;
	bubbleMinRadiusSize: number;
	bubbleOpacity: number;
	bubbleSizes: ChartData;
	bubbleTextStyle: TextFormat;
	domain: ChartData;
	groupIds: ChartData;
	series: ChartData;
}
