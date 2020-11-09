import { Bullet } from '../Document';
import { InlineObjectProperties, ListProperties, PositionedObjectProperties } from '../Properties';
import { DocumentStyle, NamedStyles, ParagraphStyle, TextStyle } from '../Styles';
import { TableCellStyle, TableRowStyle } from '../Table';
import {
	BulletSuggestionState,
	DocumentStyleSuggestionState,
	InlineObjectPropertiesSuggestionState,
	ListPropertiesSuggestionState,
	NamedStylesSuggestionState,
	ParagraphStyleSuggestionState,
	PositionedObjectPropertiesSuggestionState,
	TableCellStyleSuggestionState,
	TableRowStyleSuggestionState,
	TextStyleSuggestionState
} from './State';

export interface SuggestedBullet {
	bullet: Bullet;
	bulletSuggestionState: BulletSuggestionState;
}

export interface SuggestedDocumentStyle {
	documentStyle: DocumentStyle;
	documentStyleSuggestionState: DocumentStyleSuggestionState;
}

export interface SuggestedInlineObjectProperties {
	inlineObjectProperties: InlineObjectProperties;
	inlineObjectPropertiesSuggestionState: InlineObjectPropertiesSuggestionState;
}

export interface SuggestedListProperties {
	listProperties: ListProperties;
	listPropertiesSuggestionState: ListPropertiesSuggestionState;
}

export interface SuggestedNamedStyles {
	namedStyles: NamedStyles;
	namedStylesSuggestionState: NamedStylesSuggestionState;
}

export interface SuggestedParagraphStyle {
	paragraphStyle: ParagraphStyle;
	paragraphStyleSuggestionState: ParagraphStyleSuggestionState;
}

export interface SuggestedPositionedObjectProperties {
	positionedObjectProperties: PositionedObjectProperties;
	positionedObjectPropertiesSuggestionState: PositionedObjectPropertiesSuggestionState;
}

export interface SuggestedTableCellStyle {
	tableCellStyle: TableCellStyle;
	tableCellStyleSuggestionState: TableCellStyleSuggestionState;
}

export interface SuggestedTableRowStyle {
	tableRowStyle: TableRowStyle;
	tableRowStyleSuggestionState: TableRowStyleSuggestionState;
}

export interface SuggestedTextStyle {
	textStyle: TextStyle;
	textStyleSuggestionState: TextStyleSuggestionState;
}
