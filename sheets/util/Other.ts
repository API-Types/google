import { Color, ColorStyle } from '../Format';
import { GridCoordinate, GridRange } from '../Grid';
import { DeveloperMetadataLookup } from '../Developer';
import { DataSourceColumnReference } from '../DataSource';
import { DataExecutionErrorCode, ErrorValue } from './Error';
import { ConditionType, RelativeDate, DataExecutionState, Dimension, SortOrder } from './Constants';

export interface BooleanCondition {
	type: ConditionType;
	values: ConditionValue[];
}

export interface ConditionValue {
	relativeDate?: RelativeDate;
	userEnteredValue?: string;
}

export interface DataExecutionStatus {
	state: DataExecutionState;
	errorCode: DataExecutionErrorCode;
	errorMessage: string;
	lastRefreshTime: string;
}

export interface DataFilter {
	developerMetadataLookup?: DeveloperMetadataLookup;
	a1Range?: string;
	gridRange: GridRange;
}

export interface DataFilterValueRange {
	dataFilter: DataFilter;
	majorDimension: Dimension;
	values: string[];
}

export interface EmbeddedObjectPosition {
	sheetId?: number;
	overlayPosition?: OverlayPosition;
	newSheet?: boolean;
}

export interface ExtendedValue {
	numberValue?: number;
	stringValue?: string;
	boolValue?: boolean;
	formulaValue?: string;
	errorValue?: ErrorValue;
}

export interface FilterCriteria {
	hiddenValues: string[];
	condition: BooleanCondition;
	visibileBackgroundColor: Color;
	visibileBackgroundColorStyle: ColorStyle;
	visibileForegroundColor: Color;
	visibileForegroundColorStyle: ColorStyle;
}

export interface FilterSpec {
	filterCriteria: FilterCriteria;
	columnIndex?: number;
	dataSourceColumnReference?: DataSourceColumnReference;
}

export interface MatchedValueRange {
	valueRange: ValueRange;
	dataFilters: DataFilter;
}

export interface OverlayPosition {
	anchorCell: GridCoordinate;
	offsetXPixels: number;
	offsetYPixels: number;
	widthPixels: number;
	heightPixels: number;
}

export interface SortSpec {
	sortOrder: SortOrder;
	foregroundColor: Color;
	foregroundColorStyle: ColorStyle;
	backgroundColor: Color;
	backgroundColorStyle: ColorStyle;
	dimensionIndex: number;
	dataSourceColumnReference: DataSourceColumnReference;
}

export interface SourceAndDestination {
	source: GridRange;
	dimension: Dimension;
	fillLength: number;
}

export interface UpdateValuesResponse {
	spreadsheetId: string;
	updatedRange: string;
	updatedRows: number;
	updatedColumns: number;
	updatedCells: number;
	updatedData: ValueRange;
}

export interface ValueRange {
	range: string;
	majorDimension: Dimension;
	values: any[];
}
