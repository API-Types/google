import { DashStyle, TextStyle } from './Styles';
import { Size, Dimension, OptionalColor, WidthType } from './Document';
import { BulletAlignment, GlyphType, PositionedObjectLayout, PropertyState } from './Constants';

export interface CropProperties {
	angle: number;
	offsetBottom: number;
	offsetLeft: number;
	offsetRight: number;
	offsetTop: number;
}

export interface EmbeddedDrawingProperties {}

export interface EmbeddedObject {
	description: string;
	embeddedDrawingProperties?: EmbeddedDrawingProperties;
	embeddedObjectBorder: EmbeddedObjectBorder;
	imageProperties?: ImageProperties;
	linkedContentReference: LinkedContentReference;
	marginBottom: Dimension;
	marginLeft: Dimension;
	marginRight: Dimension;
	marginTop: Dimension;
	size: Size;
	title: string;
}

export interface EmbeddedObjectBorder {
	color: OptionalColor;
	dashStyle: keyof typeof DashStyle;
	propertyState: keyof typeof PropertyState;
	width: Dimension;
}

export interface ImageProperties {
	angle: number;
	brightness: number;
	contentUri: string;
	contrast: number;
	cropProperties: CropProperties;
	sourceUri: string;
	transparency: number;
}

export interface InlineObjectProperties {
	embeddedObject: EmbeddedObject;
}

export interface LinkedContentReference {
	sheetsChartReference: SheetsChartReference;
}

export interface ListProperties {
	nestingLevels: NestingLevel[];
}

export interface NestingLevel {
	bulletAlignment: BulletAlignment;
	glyphFormat: string;
	glyphSymbol?: string;
	glyphType?: GlyphType;
	indentFirstLine: Dimension;
	indentStart: Dimension;
	startNumber: number;
	textStyle: TextStyle;
}

export interface PositionedObjectPositioning {
	layout: keyof typeof PositionedObjectLayout;
	leftOffset: Dimension;
	topOffset: Dimension;
}

export interface PositionedObjectProperties {
	embeddedObject: EmbeddedObject;
	positioning: PositionedObjectPositioning;
}

export interface SheetsChartReference {
	chartId: number;
	spreadsheetId: string;
}

export interface SectionColumnProperties {
	paddingEnd: Dimension;
	width: Dimension;
}

export interface TableColumnProperties {
	width: Dimension;
	widthType: keyof typeof WidthType;
}
