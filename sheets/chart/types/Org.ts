import { ChartData } from '../Chart';
import { Color, ColorStyle } from '../../Format';

export enum OrgNodeSize {
	ORG_CHART_LABEL_SIZE_UNSPECIFIED,
	SMALL,
	MEDIUM,
	LARGE
}

export interface OrgSpec {
	labels: ChartData;
	nodeColor: Color;
	nodeColorStyle: ColorStyle;
	nodeSize: keyof typeof OrgNodeSize;
	parentLabels: ChartData;
	selectedNodeColor: Color;
	selectedNodeColorStyle: ColorStyle;
	tooltips: ChartData;
}
