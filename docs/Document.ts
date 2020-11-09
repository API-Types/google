import { InlineObjectProperties, ListProperties, PositionedObjectProperties } from './Properties';
import {
	DashStyle,
	DocumentStyle,
	NamedStyles,
	ParagraphStyle,
	SectionStyle,
	TextStyle
} from './Styles';
import {
	SuggestedBullet,
	SuggestedDocumentStyle,
	SuggestedInlineObjectProperties,
	SuggestedListProperties,
	SuggestedNamedStyles,
	SuggestedParagraphStyle,
	SuggestedPositionedObjectProperties,
	SuggestedTextStyle
} from './suggested/Suggested';
import { Table } from './Table';

export enum Alignment {
	ALIGNMENT_UNSPECIFIED,
	CENTER,
	END,
	JUSTIFIED,
	START
}

export interface AutoText {
	suggestedDeletionIds: string[];
	suggestedInsertionIds: string[];
	suggestedTextStyleChanges: Record<string, SuggestedTextStyle>;
	textStyle: TextStyle;
	type: keyof typeof Type;
}

export interface Background {
	color: OptionalColor;
}

export enum BaselineOffset {
	BASELINE_OFFSET_UNSPECIFIED,
	NONE,
	SUBSCRIPT,
	SUPERSCRIPT
}

export interface Body {
	content: StructuralElement[];
}

export interface Bullet {
	listId: string;
	nestingLevel: number;
	textStyle: TextStyle;
}

export interface Color {
	rgbColor: RgbColor;
}

export interface ColumnBreak {
	suggestedDeletionIds: string[];
	suggestedInsertionIds: string[];
	suggestedTextStyleChanges: Record<string, SuggestedTextStyle>;
	textStyle: TextStyle;
}

export enum ContentAlignment {
	BOTTOM,
	CONTENT_ALIGNMENT_UNSPECIFIED,
	CONTENT_ALIGNMENT_UNSUPPORTED,
	MIDDLE,
	TOP
}

export enum ContentDirection {
	CONTENT_DIRECTION_UNSPECIFIED,
	LEFT_TO_RIGHT,
	RIGHT_TO_LEFT
}

export interface Dimension {
	magnitude: number;
	unit: keyof typeof Unit;
}

export interface Document {
	body: Body;
	documentId: string;
	documentStyle: DocumentStyle;
	footers: Record<string, Footer>;
	footnotes: Record<string, Footnote>;
	headers: Record<string, Header>;
	inlineObjects: Record<string, InlineObject>;
	lists: Record<string, List>;
	namedRanges: Record<string, NamedRanges>;
	namedStyles: NamedStyles;
	positionedObjects: Record<string, PositionedObject>;
	revisionId: string;
	suggestedDocumentStyleChanges: Record<string, SuggestedDocumentStyle>;
	suggestedNamedStylesChanges: Record<string, SuggestedNamedStyles>;
	suggestionsViewMode: keyof typeof SuggestionsViewMode;
	title: string;
}

export interface Equation {
	suggestedDeletionIds: string[];
	suggestedInsertionIds: string[];
}

export interface Footer {
	content: StructuralElement[];
	footerId: string;
}

export interface Footnote {
	content: StructuralElement[];
	footernoteId: string;
}

export interface FootnoteReference {
	footnoteId: string;
	footnoteNumber: string;
	suggestedDeletionIds: string[];
	suggestedInsertionIds: string[];
	suggestedTextStyleChanges: Record<string, SuggestedTextStyle>;
	textStyle: TextStyle;
}

export interface Header {
	content: StructuralElement[];
	headerId: string;
}

export interface HorizontalRule {
	suggestedDeletionIds: string[];
	suggestedInsertionIds: string[];
	suggestedTextStyleChanges: Record<string, SuggestedTextStyle>;
	textStyle: TextStyle;
}

export interface InlineObject {
	inlineObjectProperties: InlineObjectProperties;
	objectId: string;
	suggestedDeletionIds: string[];
	suggestedInlineObjectPropertiesChanges: Record<string, SuggestedInlineObjectProperties>;
	suggestedInsertionId: string;
}

export interface InlineObjectElement {
	inlineObjectId: string;
	suggestedDeletionIds: string[];
	suggestedInsertionIds: string[];
	suggestedTextStyleChanges: Record<string, SuggestedTextStyle>;
	textStyle: TextStyle;
}

export interface Link {
	bookmarkId?: string;
	headingId?: string;
	url?: string;
}

export interface List {
	listProperties: ListProperties;
	suggestedDeletionId: string[];
	suggestedInsertionId: string;
	suggestedListPropertiesChanges: Record<string, SuggestedListProperties>;
}

export interface NamedRange {
	name: string;
	namedRangeId: string;
	ranges: Range[];
}

export interface NamedRanges {
	name: string;
	namedRanges: NamedRange[];
}

export interface ObjectReferences {
	objectIds: string[];
}

export interface OptionalColor {
	color: Color;
}

export interface PageBreak {
	suggestedDeletionIds: string[];
	suggestedInsertionIds: string[];
	suggestedTextStyleChanges: Record<string, SuggestedTextStyle>;
	textStyle: TextStyle;
}

export interface Paragraph {
	bullet: Bullet;
	elements: ParagraphElement[];
	paragraphStyle: ParagraphStyle;
	positionedObjectIds: string[];
	suggestedBulletChanges: Record<string, SuggestedBullet>;
	suggestedParagraphStyleChanges: Record<string, SuggestedParagraphStyle>;
	suggestedPositionedObjectIds: Record<string, ObjectReferences>;
}

export interface ParagraphBorder {
	color: OptionalColor;
	dashStyle: keyof typeof DashStyle;
	padding: Dimension;
	width: Dimension;
}

export interface ParagraphElement {
	autoText?: AutoText;
	columnBreak?: ColumnBreak;
	endIndex: number;
	equation?: Equation;
	footnoteReference?: FootnoteReference;
	horizontalRule?: HorizontalRule;
	inlineObjectElement?: InlineObjectElement;
	pageBreak?: PageBreak;
	startIndex: number;
	textRun?: TextRun;
}

export interface PositionedObject {
	objectId: string;
	positionedObjectProperties: PositionedObjectProperties;
	suggestedPositionedObjectPropertiesChanges: SuggestedPositionedObjectProperties;
	suggestionDeletionIds: string[];
	suggestionInsertionId: string;
}

export interface Range {
	endIndex: number;
	segmentId: string;
	startIndex: number;
}

export interface RgbColor {
	blue: number;
	green: number;
	red: number;
}

export interface SectionBreak {
	sectionStyle: SectionStyle[];
	suggestedDeletionIds: string[];
	suggestedInsertionIds: string[];
}

export enum SectionType {
	CONTINUOUS,
	NEXT_PAGE,
	SECTION_TYPE_UNSPECIFIED
}

export interface Shading {
	backgroundColor: OptionalColor;
}

export interface Size {
	height: Dimension;
	width: Dimension;
}

export enum SpacingMode {
	COLLAPSE_LISTS,
	NEVER_COLLAPSE,
	SPACING_MODE_UNSPECIFIED
}

export interface StructuralElement {
	endIndex: number;
	paragraph?: Paragraph;
	sectionBreak?: SectionBreak;
	startIndex: number;
	table?: Table;
	tableOfContents?: TableOfContents;
}

export interface SubstringMatchCriteria {
	text: string;
	matchCase: boolean;
}

export enum SuggestionsViewMode {
	DEFAULT_FOR_CURRENT_ACCESS,
	PREVIEW_SUGGESTIONS_ACCEPTED,
	PREVIEW_WITHOUT_SUGGESTIONS,
	SUGGESTIONS_INLINE
}

export interface TableOfContents {
	content: StructuralElement[];
	suggestedDeletionIds: string[];
	suggestedInsertionIds: string[];
}

export interface TabStop {
	alignment: keyof typeof TabStopAlignment;
	offset: Dimension;
}

export enum TabStopAlignment {
	CENTER,
	END,
	START,
	TAB_STOP_ALIGNMENT_UNSPECIFIED
}

export interface TextRun {
	content: string;
	suggestedTextStyleChanges: Record<string, SuggestedTextStyle>;
	suggestionDeletionIds: string[];
	suggestionInsertionIds: string[];
	textStyle: TextStyle;
}

export enum Type {
	PAGE_COUNT,
	PAGE_NUMBER,
	TYPE_UNSPECIFIED
}

export enum Unit {
	PT,
	UNIT_UNSPECIFIED
}

export interface WeightedFontFamily {
	fontFamily: string;
	weight: number;
}

export enum WidthType {
	EVENLY_DISTRIBUTED,
	FIXED_WIDTH,
	WIDTH_TYPE_UNSPECIFIED
}

export interface WriteControl {
	requiredRevisionId?: string;
	targetRevisionId?: string;
}
