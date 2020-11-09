import { DashStyle } from './Styles';
import { TableColumnProperties } from './Properties';
import { SuggestedTableCellStyle, SuggestedTableRowStyle } from './suggested/Suggested';
import { StructuralElement, OptionalColor, Dimension, ContentAlignment } from './Document';

export interface EndOfSegmentLocation {
	segmentId: string;
}

export interface Location {
	index: number;
	segmentId: string;
}

export interface Table {
	columns: number;
	rows: number;
	suggestedDeletionIds: string[];
	suggestedInsertionIds: string[];
	tableRows: TableRow[];
	tableStyle: TableStyle;
}

export interface TableCell {
	content: StructuralElement[];
	endIndex: number;
	startIndex: number;
	suggestedDeletionIds: string[];
	suggestedInsertionIds: string[];
	suggestedTableCellStyleChanges: Record<string, SuggestedTableCellStyle>;
	tableCellStyle: TableCellStyle;
}

export interface TableCellBorder {
	color: OptionalColor;
	dashStyle: keyof typeof DashStyle;
	width: Dimension;
}

export interface TableCellLocation {
	columnIndex: number;
	rowIndex: number;
	tableStartLocation: Location;
}

export interface TableCellStyle {
	backgroundColor: OptionalColor;
	borderBottom: TableCellBorder;
	borderLeft: TableCellBorder;
	borderRight: TableCellBorder;
	borderTop: TableCellBorder;
	columnSpan: number;
	contentAlignment: keyof typeof ContentAlignment;
	paddingBottom: Dimension;
	paddingLeft: Dimension;
	paddingRight: Dimension;
	paddingTop: Dimension;
	rowSpan: number;
}

export interface TableRange {
	columnSpan: number;
	rowSpan: number;
	tableCellLocation: TableCellLocation;
}

export interface TableRow {
	endIndex: number;
	startIndex: number;
	suggestedDeletionIds: string[];
	suggestedInsertionIds: string[];
	suggestedTableRowStyleChanges: Record<string, SuggestedTableRowStyle>;
	tableCells: TableCell[];
	tableRowStyle: TableRowStyle;
}

export interface TableRowStyle {
	minRowHeight: Dimension;
}

export interface TableStyle {
	tableColumnProperties: TableColumnProperties[];
}
