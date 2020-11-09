import { NamedRange } from '../Spreadsheet';
import { DimensionGroup } from '../Dimension';
import { EmbeddedChart } from '../chart/Chart';
import { DeveloperMetadata } from '../Developer';
import { DataSource, DataSourceObjectReference } from '../DataSource';
import {
	SheetProperties,
	FilterView,
	ConditionalFormatRule,
	ProtectedRange,
	BandedRange,
	Slicer
} from '../Sheet';
import {
	EmbeddedObjectPosition,
	DataExecutionStatus,
	ValueRange,
	MatchedValueRange,
	UpdateValuesResponse,
	DataFilter
} from '../util/Other';

export interface Response {
	addBanding?: AddBandingResponse;
	addChart?: AddChartResponse;
	addDataSource?: AddDataSourceResponse;
	addDimensionGroup?: AddDimensionGroupResponse;
	addFilterView?: AddFilterViewResponse;
	addNamedRange?: AddNamedRangeResponse;
	addProtectedRange?: AddProtectedRangeResponse;
	addSheet?: AddSheetResponse;
	addSlicer?: AddSlicerResponse;
	createDeveloperMetadata?: CreateDeveloperMetadataResponse;
	deleteConditionalFormatRule?: DeleteConditionalFormatRuleResponse;
	deleteDeveloperMetadata?: DeleteDeveloperMetadataResponse;
	deleteDimensionGroup?: DeleteDimensionGroupResponse;
	deleteDuplicates?: DeleteDuplicatesResponse;
	duplicateFilterView?: DuplicateFilterViewResponse;
	duplicateSheet?: DuplicateSheetResponse;
	findReplace?: FindReplaceResponse;
	refreshDataSource?: RefreshDataSourceResponse;
	trimWhitespace?: TrimWhitespaceResponse;
	updateConditionalFormatRule?: UpdateConditionalFormatRuleResponse;
	updateDataSource?: UpdateDataSourceResponse;
	updateDeveloperMetadata?: UpdateDeveloperMetadataResponse;
	updateEmbeddedObjectPosition?: UpdateEmbeddedObjectPositionResponse;
}

export interface AddBandingResponse {
	bandedRange: BandedRange;
}

export interface AddChartResponse {
	chart: EmbeddedChart;
}

export interface AddDataSourceResponse {
	dataExecutionStatus: DataExecutionStatus;
	dataSource: DataSource;
}

export interface AddDimensionGroupResponse {
	dimensionGroups: DimensionGroup[];
}

export interface AddFilterViewResponse {
	filter: FilterView;
}

export interface AddNamedRangeResponse {
	namedRange: NamedRange;
}

export interface AddProtectedRangeResponse {
	protectedRange: ProtectedRange;
}

export interface AddSheetResponse {
	properties: SheetProperties;
}

export interface AddSlicerResponse {
	slicer: Slicer;
}

export interface BatchClearValuesByDataFilterResponse {
	spreadsheetId: string;
	clearedRanges: string[];
}

export interface BatchClearValuesResponse {
	spreadsheetId: string;
	clearedRanges: string[];
}

export interface BatchGetValuesByDataFilterResponse {
	spreadsheetId: string;
	valueRanges: MatchedValueRange;
}

export interface BatchGetValuesResponse {
	spreadsheetId: string;
	valueRanges: ValueRange[];
}

export interface BatchUpdateValuesByFilterResponse {
	responses: UpdateValuesByDataFilterResponse[];
	spreadsheetId: string;
	totalUpdatedCells: number;
	totalUpdatedColumns: number;
	totalUpdatedRows: number;
	totalUpdatedSheets: number;
}

export interface BatchUpdateValuesResponse {
	responses: UpdateValuesResponse[];
	spreadsheetId: string;
	totalUpdatedCells: number;
	totalUpdatedColumns: number;
	totalUpdatedRows: number;
	totalUpdatedSheets: number;
}

export interface CreateDeveloperMetadataResponse {
	developerMetadata: DeveloperMetadata;
}

export interface DeleteConditionalFormatRuleResponse {
	rule: ConditionalFormatRule;
}

export interface DeleteDeveloperMetadataResponse {
	developerMetadata: DeveloperMetadata[];
}

export interface DeleteDimensionGroupResponse {
	dimensionGroups: DimensionGroup[];
}

export interface DeleteDuplicatesResponse {
	duplicatesRemovedCount: number;
}

export interface DuplicateFilterViewResponse {
	filter: FilterView;
}

export interface DuplicateSheetResponse {
	properties: SheetProperties;
}

export interface FindReplaceResponse {
	formulasChanged: number;
	occurrencesChanged: number;
	rowsChanged: number;
	sheetsChanged: number;
	valuesChanged: number;
}

export interface RefreshDataSourceObjectExecutionStatus {
	dataExecutionStatus: DataExecutionStatus;
	reference: DataSourceObjectReference;
}

export interface RefreshDataSourceResponse {
	statuses: RefreshDataSourceObjectExecutionStatus;
}

export interface TrimWhitespaceResponse {
	cellsChangedCount: number;
}

export interface UpdateConditionalFormatRuleResponse {
	newIndex: number;
	newRule: ConditionalFormatRule;
	oldIndex?: number;
	oldRule?: ConditionalFormatRule;
}

export interface UpdateDataSourceResponse {
	dataExecutionStatus: DataExecutionStatus;
	dataSource: DataSource;
}

export interface UpdateDeveloperMetadataResponse {
	developerMetadata: DeveloperMetadata[];
}

export interface UpdateEmbeddedObjectPositionResponse {
	position: EmbeddedObjectPosition;
}

export interface UpdateValuesByDataFilterResponse {
	dataFilter: DataFilter;
	updatedCells: number;
	updatedColumns: number;
	updatedData: ValueRange;
	updatedRange: string;
	updatedRows: number;
}
