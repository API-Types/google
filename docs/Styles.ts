import {
	Alignment,
	Background,
	BaselineOffset,
	ContentDirection,
	Dimension,
	OptionalColor,
	ParagraphBorder,
	SectionType,
	Shading,
	Size,
	SpacingMode,
	TabStop,
	WeightedFontFamily
} from './Document';
import { SectionColumnProperties } from './Properties';

export enum ColumnSeparatorStyle {
	BETWEEN_EACH_COLUMN,
	COLUMN_SEPARATOR_STYLE_UNSPECIFIED,
	NONE
}

export enum DashStyle {
	DASH,
	DASH_STYLE_UNSPECIFIED,
	DOT,
	SOLID
}

export interface DocumentStyle {
	background: Background;
	defaultFooterId: string;
	defaultHeaderId: string;
	evenPageFooterId: string;
	evenPageHeaderId: string;
	firstPageFooterId: string;
	firstPageHeaderId: string;
	marginBottom: Dimension;
	marginFooter: Dimension;
	marginHeader: Dimension;
	marginLeft: Dimension;
	marginRight: Dimension;
	marginTop: Dimension;
	pageNumberStart: number;
	pageSize: Size;
	useCustomHeaderFooterMargins: boolean;
	useEvenPageHeaderFooter: boolean;
	useFirstPageHeaderFooter: boolean;
}

export interface NamedStyle {
	namedStyleType: keyof typeof NamedStyleType;
	paragraphStyle: ParagraphStyle;
	textStyle: TextStyle;
}

export interface NamedStyles {
	styles: NamedStyle[];
}

export enum NamedStyleType {
	HEADING_1,
	HEADING_2,
	HEADING_3,
	HEADING_4,
	HEADING_5,
	HEADING_6,
	NAMED_STYLE_TYPE_UNSPECIFIED,
	NORMAL_TEXT,
	SUBTITLE,
	TITLE
}

export interface ParagraphStyle {
	alignment: keyof typeof Alignment;
	avoidWidowAndOrphan: boolean;
	borderBetween: ParagraphBorder;
	borderBottom: ParagraphBorder;
	borderLeft: ParagraphBorder;
	borderRight: ParagraphBorder;
	borderTop: ParagraphBorder;
	direction: keyof typeof ContentDirection;
	headingId: string;
	indentEnd: Dimension;
	indentFirstLine: Dimension;
	indentStart: Dimension;
	inlineSpacing: number;
	keepLinesTogether: boolean;
	keepWithNext: boolean;
	namedStyleType: keyof typeof NamedStyleType;
	shading: Shading;
	spaceAbove: Dimension;
	spaceBelow: Dimension;
	spacingMode: keyof typeof SpacingMode;
	tabStops: TabStop[];
}

export interface SectionStyle {
	columnProperties: SectionColumnProperties[];
	columnSeparatorStyle: keyof typeof ColumnSeparatorStyle;
	contentDirection: keyof typeof ContentDirection;
	defaultFooterId: string;
	defaultHeaderId: string;
	evenPageFooterId: string;
	evenPageHeaderId: string;
	firstPageFooterId: string;
	firstPageHeaderId: string;
	marginBottom: Dimension;
	marginFooter: Dimension;
	marginHeader: Dimension;
	marginLeft: Dimension;
	marginRight: Dimension;
	marginTop: Dimension;
	pageNumberStart: number;
	sectionType: keyof typeof SectionType;
	useFirstPageHeaderFooter: boolean;
}

export interface TextStyle {
	backgroundColor: OptionalColor;
	baselineOffset: keyof typeof BaselineOffset;
	bold: boolean;
	fontSize: Dimension;
	foregroundColor: OptionalColor;
	italic: boolean;
	smallCaps: boolean;
	strikethrough: boolean;
	underline: boolean;
	weightedFontFamily: WeightedFontFamily;
}
