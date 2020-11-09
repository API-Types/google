import { PivotTable } from './PivotTable';
import { ExtendedValue, BooleanCondition } from './util/Other';
import { DataSourceTable, DataSourceFormula } from './DataSource';
import { Color, ColorStyle, HorizontalAlign, VerticalAlign, TextFormat } from './Format';

export interface Border {
	color: Color;
	colorStyle: ColorStyle;
	style: keyof typeof Style;
}

export interface Borders {
	bottom: Border;
	left: Border;
	right: Border;
	top: Border;
}

export interface CellData {
	dataSourceFormula: DataSourceFormula;
	dataSourceTable: DataSourceTable;
	dataValidation: DataValidationRule;
	effectiveFormat: CellFormat;
	effectiveValue: ExtendedValue;
	formattedValue: string;
	hyperlink: string;
	note: string;
	pivotTable: PivotTable;
	textFormatRuns: TextFormatRun;
	userEnteredFormat: CellFormat;
	userEnteredValue: ExtendedValue;
}

export interface CellFormat {
	backgroundColor: Color;
	backgroundColorStyle: ColorStyle;
	borders: Borders;
	horizontalAlignment: HorizontalAlign;
	hyperlinkDisplayType: HyperlinkDisplayType;
	numberFormat: NumberFormat;
	padding: Padding;
	textDirection: keyof typeof TextDirection;
	textFormat: TextFormat;
	textRotation: TextRotation;
	verticalAlignment: VerticalAlign;
	wrapStrategy: keyof typeof WrapStrategy;
}

export interface DataValidationRule {
	condition: BooleanCondition;
	inputMessage: string;
	showCustomUi: boolean;
	strict: boolean;
}

export enum HyperlinkDisplayType {
	HYPERLINK_DISPLAY_TYPE_UNSPECIFIED,
	LINKED,
	PLAIN_TEXT
}

export interface NumberFormat {
	type: keyof typeof NumberFormatType;
	pattern: string;
}

export enum NumberFormatType {
	CURRENCY,
	DATE,
	DATE_TIME,
	NUMBER,
	NUMBER_FORMAT_TYPE_UNSPECIFIED,
	PERCENT,
	SCIENTIFIC,
	TEXT,
	TIME
}

export interface Padding {
	top: number;
	bottom: number;
	left: number;
	right: number;
}

export enum Style {
	DASHED,
	DOTTED,
	DOUBLE,
	NONE,
	SOLID,
	SOLID_MEDIUM,
	SOLID_THICK,
	STYLE_UNSPECIFIED
}

export enum TextDirection {
	LEFT_TO_RIGHT,
	RIGHT_TO_LEFT,
	TEXT_DIRECTION_UNSPECIFIED
}

export interface TextFormatRun {
	format: TextFormat;
	startIndex: number;
}

export interface TextRotation {
	angle?: number;
	vertical?: boolean;
}

export enum WrapStrategy {
	CLIP,
	LEGACY_WRAP,
	OVERFLOW_CELL,
	WRAP,
	WRAP_STRATEGY_UNSPECIFIED
}
