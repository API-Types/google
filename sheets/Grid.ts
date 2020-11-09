import { RowData } from './Sheet';
import { DimensionProperties } from './Dimension';

export interface GridCoordinate {
	columnIndex: number;
	rowIndex: number;
	sheetId: number;
}

export interface GridData {
	columnMetadata: DimensionProperties;
	rowData: RowData[];
	rowMetadata: DimensionProperties;
	startColumn: number;
	startRow: number;
}

export interface GridProperties {
	columnCount: number;
	columnGroupControlAfter: boolean;
	frozenColumnCount: number;
	frozenRowCount: number;
	hideGridlines: boolean;
	rowCount: number;
	rowGroupControlAfter: boolean;
}

export interface GridRange {
	endColumnIndex: number;
	endRowIndex: number;
	sheetId: number;
	startColumnIndex: number;
	startRowIndex: number;
}
