import { NamedStyleType } from '../Styles';

export interface BackgroundSuggestionState {
	backgroundColorSuggested: boolean;
}

export interface BulletSuggestionState {
	listIdSuggested: boolean;
	nestingLevelSuggested: boolean;
	textStyleSuggestionState: TextStyleSuggestionState;
}

export interface CropPropertiesSuggestionState {
	angleSuggested: boolean;
	offsetBottomSuggested: boolean;
	offsetLeftSuggested: boolean;
	offsetRightSuggested: boolean;
	offsetTopSuggested: boolean;
}

export interface DocumentStyleSuggestionState {
	backgroundSuggestionState: BackgroundSuggestionState;
	defaultFooterIdSuggested: boolean;
	defaultHeaderIdSuggested: boolean;
	evenPageFooterIdSuggested: boolean;
	evenPageHeaderIdSuggested: boolean;
	firstPageFooterIdSuggested: boolean;
	firstPageHeaderIdSuggested: boolean;
	marginBottomSuggested: boolean;
	marginFooterSuggested: boolean;
	marginHeaderSuggested: boolean;
	marginLeftSuggested: boolean;
	marginRightSuggested: boolean;
	marginTopSuggested: boolean;
	pageNumberStartSuggested: boolean;
	pageSizeSuggestionState: SizeSuggestionState;
	useCustomHeaderFooterMarginsSuggested: boolean;
	useEvenPageHeaderFooterSuggested: boolean;
	useFirstPageHeaderFooterSuggested: boolean;
}

export interface EmbeddedDrawingPropertiesSuggestionState {}

export interface EmbeddedObjectBorderSuggestionState {
	colorSuggested: boolean;
	dashStyleSuggested: boolean;
	propertyStateSuggested: boolean;
	widthSuggested: boolean;
}

export interface EmbeddedObjectSuggestionState {
	descriptionSuggested: boolean;
	embeddedDrawingPropertiesSuggestionState: EmbeddedDrawingPropertiesSuggestionState;
	embeddedObjectBorderSuggestionState: EmbeddedObjectBorderSuggestionState;
	imagePropertiesSuggestionState: ImagePropertiesSuggestionState;
	linkedContentReferenceSuggestionState: LinkedContentReferenceSuggestionState;
	marginBottomSuggested: boolean;
	marginLeftSuggested: boolean;
	marginRightSuggested: boolean;
	marginTopSuggested: boolean;
	sizeSuggestionState: SizeSuggestionState;
	titleSuggested: boolean;
}

export interface ImagePropertiesSuggestionState {
	angleSuggested: boolean;
	brightnessSuggested: boolean;
	contentUriSuggested: boolean;
	contrastSuggested: boolean;
	cropPropertiesSuggested: CropPropertiesSuggestionState;
	sourceUriSuggested: boolean;
	transparencySuggested: boolean;
}

export interface InlineObjectPropertiesSuggestionState {
	embeddedObjectSuggestionState: EmbeddedObjectSuggestionState;
}

export interface LinkedContentReferenceSuggestionState {
	sheetsChartReferenceSuggestionState: SheetsChartReferenceSuggestionState;
}

export interface ListPropertiesSuggestionState {
	nestingLevelsSuggestionStates: NestingLevelSuggestionState[];
}

export interface NamedStyleSuggestionState {
	namedStyleType: keyof typeof NamedStyleType;
	paragraphStyleSuggestionState: ParagraphStyleSuggestionState;
	textStyleSuggestionState: TextStyleSuggestionState;
}

export interface NamedStylesSuggestionState {
	stylesSuggestionStates: NamedStyleSuggestionState[];
}

export interface NestingLevelSuggestionState {
	bulletAlignmentSuggested: boolean;
	glyphFormatSuggested: boolean;
	glyphSymbolSuggested: boolean;
	glyphTypeSuggested: boolean;
	indentFirstLineSuggested: boolean;
	indentStartSuggested: boolean;
	startNumberSuggested: boolean;
	textStyleSuggestionState: TextStyleSuggestionState;
}

export interface ParagraphStyleSuggestionState {
	alignmentSuggested: boolean;
	avoidWidowAndOrphanSuggested: boolean;
	borderBetweenSuggested: boolean;
	borderBottomSuggested: boolean;
	borderLeftSuggested: boolean;
	borderRightSuggested: boolean;
	borderTopSuggested: boolean;
	directionSuggested: boolean;
	headingIdSuggested: boolean;
	indentEndSuggested: boolean;
	indentFirstLineSuggested: boolean;
	indentStartSuggested: boolean;
	keepLinesTogetherSuggested: boolean;
	keepWithNextSuggested: boolean;
	lineSpacingSuggested: boolean;
	namedStyleTypeSuggested: boolean;
	shadingSuggestionState: ShadingSuggestionState;
	spaceAboveSuggested: boolean;
	spaceBelowSuggested: boolean;
	spacingModeSuggested: boolean;
}

export interface PositionedObjectPositioningSuggestionState {
	layoutSuggested: boolean;
	leftOffsetSuggested: boolean;
	topOffsetSuggested: boolean;
}

export interface PositionedObjectPropertiesSuggestionState {
	embeddedObjectSuggestionState: EmbeddedObjectSuggestionState;
	positioningSuggestionState: PositionedObjectPositioningSuggestionState;
}

export interface ShadingSuggestionState {
	backgroundColorSuggested: boolean;
}

export interface SheetsChartReferenceSuggestionState {
	chartIdSuggested: boolean;
	spreadsheetIdSuggested: boolean;
}

export interface SizeSuggestionState {
	heightSuggested: boolean;
	widthSuggested: boolean;
}

export interface TableCellStyleSuggestionState {
	backgroundColorSuggested: boolean;
	borderBottomSuggested: boolean;
	borderLeftSuggested: boolean;
	borderRightSuggested: boolean;
	borderTopSuggested: boolean;
	columnSpanSuggested: boolean;
	contentAlignmentSuggested: boolean;
	paddingBottomSuggested: boolean;
	paddingLeftSuggested: boolean;
	paddingRightSuggested: boolean;
	paddingTopSuggested: boolean;
	rowSpanSuggested: boolean;
}

export interface TableRowStyleSuggestionState {
	minRowHeightSuggested: boolean;
}

export interface TextStyleSuggestionState {
	backgroundColorSuggested: boolean;
	baselineOffsetSuggested: boolean;
	boldSuggested: boolean;
	fontSizeSuggested: boolean;
	foregroundColorSuggested: boolean;
	italicSuggested: boolean;
	linkSuggested: boolean;
	smallCapsSuggested: boolean;
	strikethroughSuggested: boolean;
	underlineSuggested: boolean;
	weightedFontFamilySuggested: boolean;
}
