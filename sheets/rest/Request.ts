import { DeveloperMetadata } from '../Developer';
import { GridRange, GridCoordinate } from '../Grid';
import { EmbeddedChart, ChartSpec } from '../chart/Chart';
import { CellData, Border, DataValidationRule } from '../Cell';
import { SpreadsheetProperties, NamedRange } from '../Spreadsheet';
import { DimensionProperties, DimensionRange, DimensionGroup } from '../Dimension';
import {
	DataSourceSheetDimensionRange,
	DataSource,
	DataSourceObjectReferences
} from '../DataSource';
import {
	SourceAndDestination,
	EmbeddedObjectPosition,
	SortSpec,
	DataFilter,
	ValueRange,
	DataFilterValueRange
} from '../util/Other';
import {
	SheetProperties,
	RowData,
	FilterView,
	ConditionalFormatRule,
	BasicFilter,
	ProtectedRange,
	BandedRange,
	Slicer,
	SliceSpec
} from '../Sheet';
import {
	PasteType,
	PasteOrientation,
	MergeType,
	Dimension,
	DelimiterType,
	ValueRenderOption,
	DateTimeRenderOption,
	ValueInputOption
} from '../util/Constants';

export interface Request {
	addBanding?: AddBandingRequest;
	addChart?: AddChartRequest;
	addConditionalFormatRule?: AddConditionalFormatRuleRequest;
	addDataSource?: AddDataSourceRequest;
	addDimensionGroup?: AddDimensionGroupRequest;
	addFilterView?: AddFilterViewRequest;
	addNamedRange?: AddNamedRangeRequest;
	addProtectedRange?: AddProtectedRangeRequest;
	addSheet?: AddSheetRequest;
	addSlicer?: AddSlicerRequest;
	appendCells?: AppendCellsRequest;
	appendDimension?: AppendDimensionRequest;
	autoFill?: AutoFillRequest;
	autoResizeDimensions?: AutoResizeDimensionsRequest;
	clearBasicFilter?: ClearBasicFilterRequest;
	copyPaste?: CopyPasteRequest;
	createDeveloperMetadata?: CreateDeveloperMetadataRequest;
	cutPaste?: CutPasteRequest;
	deleteBanding?: DeleteBandingRequest;
	deleteConditionalFormatRule?: DeleteConditionalFormatRuleRequest;
	deleteDataSource?: DeleteDataSourceRequest;
	deleteDeveloperMetadata?: DeleteDeveloperMetadataRequest;
	deleteDimension?: DeleteDimensionRequest;
	deleteDimensionGroup?: DeleteDimensionGroupRequest;
	deleteDuplicates?: DeleteDuplicatesRequest;
	deleteEmbeddedObject?: DeleteEmbeddedObjectRequest;
	deleteFilterView?: DeleteFilterViewRequest;
	deleteNamedRange?: DeleteNamedRangeRequest;
	deleteProtectedRange?: DeleteProtectedRangeRequest;
	deleteRange?: DeleteRangeRequest;
	deleteSheet?: DeleteSheetRequest;
	duplicateFilterView?: DuplicateFilterViewRequest;
	duplicateSheet?: DuplicateSheetRequest;
	findReplace?: FindReplaceRequest;
	insertDimension?: InsertDimensionRequest;
	insertRange?: InsertRangeRequest;
	mergeCells?: MergeCellsRequest;
	moveDimension?: MoveDimensionRequest;
	pasteData?: PasteDataRequest;
	randomizeRange?: RandomizeRangeRequest;
	refreshDataSource?: RefreshDataSourceRequest;
	repeatCell?: RepeatCellRequest;
	setBasicFilter?: SetBasicFilterRequest;
	setDataValidation?: SetDataValidationRequest;
	sortRange?: SortRangeRequest;
	textToColumns?: TextToColumnsRequest;
	trimWhitespace?: TrimWhitespaceRequest;
	unmergeCells?: UnmergeCellsRequest;
	updateBanding?: UpdateBandingRequest;
	updateBorders?: UpdateBordersRequest;
	updateCells?: UpdateCellsRequest;
	updateChartSpec?: UpdateChartSpecRequest;
	updateConditionalFormatRule?: UpdateConditionalFormatRuleRequest;
	updateDataSource?: UpdateDataSourceRequest;
	updateDeveloperMetadata?: UpdateDeveloperMetadataRequest;
	updateDimensionGroup?: UpdateDimensionGroupRequest;
	updateDimensionProperties?: UpdateDimensionPropertiesRequest;
	updateEmbeddedObjectPosition?: UpdateEmbeddedObjectPositionRequest;
	updateFilterView?: UpdateFilterViewRequest;
	updateNamedRange?: UpdateNamedRangeRequest;
	updateProtectedRange?: UpdateProtectedRangeRequest;
	updateSheetProperties?: UpdateSheetPropertiesRequest;
	updateSlicerSpec?: UpdateSlicerSpecRequest;
	updateSpreadsheetProperties?: UpdateSpreadsheetPropertiesRequest;
}

export interface AddBandingRequest {
	bandedRange: BandedRange;
}

export interface AddChartRequest {
	chart: EmbeddedChart;
}

export interface AddConditionalFormatRuleRequest {
	index: number;
	rule: ConditionalFormatRule;
}

export interface AddDataSourceRequest {
	dataSource: DataSource;
}

export interface AddDimensionGroupRequest {
	range: DimensionRange;
}

export interface AddFilterViewRequest {
	filter: FilterView;
}

export interface AddNamedRangeRequest {
	namedRange: NamedRange;
}

export interface AddProtectedRangeRequest {
	protectedRange: ProtectedRange;
}

export interface AddSheetRequest {
	properties: SheetProperties;
}

export interface AddSlicerRequest {
	slicer: Slicer;
}

export interface AppendCellsRequest {
	fields: string;
	rows: RowData[];
	sheetId: number;
}

export interface AppendDimensionRequest {
	dimension: Dimension;
	length: number;
	sheetId: number;
}

export interface AutoFillRequest {
	range: GridRange;
	sourceAndDestination: SourceAndDestination;
	useAlternateSeries: boolean;
}

export interface AutoResizeDimensionsRequest {
	dataSourceSheetDimensions: DataSourceSheetDimensionRange;
	dimensions?: DimensionRange;
}

export interface BatchClearValuesByDataFilterRequest {
	dataFilters: DataFilter[];
}

export interface BatchClearValuesRequest {
	ranges: string[];
}

export interface BatchGetValuesByDataFilterRequest {
	dataFilters: DataFilter[];
	dateTimeRenderOption: DateTimeRenderOption;
	majorDimension: Dimension;
	valueRenderOption: ValueRenderOption;
}

export interface BatchUpdateSpreadsheetRequest {
	includeSpreadsheetInResponse: boolean;
	requests: Request[];
	responseIncludeGridData: boolean;
	responseRanges: string[];
}

export interface BatchUpdateValuesByFilterRequest {
	data: DataFilterValueRange;
	includeValuesInResponse: boolean;
	responseDateTimeRenderOption: DateTimeRenderOption;
	responseValueRenderOption: ValueRenderOption;
	valueInputOption: ValueInputOption;
}

export interface BatchUpdateValuesRequest {
	data: ValueRange;
	includeValuesInResponse: boolean;
	responseDateTimeRenderOption: DateTimeRenderOption;
	responseValueRenderOption: ValueRenderOption;
	valueInputOption: ValueInputOption;
}

export interface ClearBasicFilterRequest {
	sheetId: string;
}

export interface ClearValuesResponse {
	clearedRange: string;
	spreadsheetId: string;
}

export interface CopyPasteRequest {
	destination: GridCoordinate;
	pasteOrientation: PasteOrientation;
	pasteType: PasteType;
	source: GridRange;
}

export interface CopySheetToAnotherSpreadsheetRequest {
	destinationSpreadsheetId: string;
}

export interface CreateDeveloperMetadataRequest {
	developerMetadata: DeveloperMetadata;
}

export interface CutPasteRequest {
	destination: GridCoordinate;
	pasteType: PasteType;
	source: GridRange;
}

export interface DeleteBandingRequest {
	bandedRangeId: number;
}

export interface DeleteConditionalFormatRuleRequest {
	index: number;
	sheetId: number;
}

export interface DeleteDataSourceRequest {
	dataSourceId: string;
}

export interface DeleteDeveloperMetadataRequest {
	dataFilter: DataFilter;
}

export interface DeleteDimensionRequest {
	range: DimensionRange;
}

export interface DeleteDimensionGroupRequest {
	range: DimensionRange;
}

export interface DeleteDuplicatesRequest {
	comparisonColumns: DimensionRange[];
	range: GridRange;
}

export interface DeleteEmbeddedObjectRequest {
	objectId: number;
}

export interface DeleteFilterViewRequest {
	filterId: number;
}

export interface DeleteNamedRangeRequest {
	namedRangedId: string;
}

export interface DeleteProtectedRangeRequest {
	protectedRangeId: string;
}

export interface DeleteRangeRequest {
	range: GridRange;
	shiftDimension: Dimension;
}

export interface DeleteSheetRequest {
	sheetId: number;
}

export interface DuplicateFilterViewRequest {
	filterId: number;
}

export interface DuplicateSheetRequest {
	insertSheetIndex: number;
	newSheetId: number;
	newSheetName: string;
	sourceSheetId: number;
}

export interface FindReplaceRequest {
	allSheets?: boolean;
	find: string;
	includeFormulas: boolean;
	matchCase: boolean;
	matchEntireCell: boolean;
	range?: GridRange;
	replacement: string;
	searchByRegex: boolean;
	sheetId?: number;
}

export interface InsertDimensionRequest {
	inheritFromBefore?: boolean;
	range: DimensionRange;
}

export interface InsertRangeRequest {
	range: GridRange;
	shiftDimension: Dimension;
}

export interface MergeCellsRequest {
	mergeType: MergeType;
	range: GridRange;
}

export interface MoveDimensionRequest {
	destinationIndex: number;
	source: DimensionRange;
}

export interface PasteDataRequest {
	coordinate: GridCoordinate;
	data: string;
	delimiter?: string;
	html?: boolean;
	type: PasteType;
}

export interface RandomizeRangeRequest {
	range: GridRange;
}

export interface RefreshDataSourceRequest {
	dataSourceId: string;
	force: boolean;
	isAll: boolean;
	references?: DataSourceObjectReferences;
}

export interface RepeatCellRequest {
	cell: CellData;
	fields: string;
	range: GridRange;
}

export interface SetBasicFilterRequest {
	filter: BasicFilter;
}

export interface SetDataValidationRequest {
	range: GridRange;
	rule: DataValidationRule;
}

export interface SortRangeRequest {
	range: GridRange;
	sourceSpec: SortSpec[];
}

export interface TextToColumnsRequest {
	delimiter: string;
	delimiterType: DelimiterType;
	source: GridRange;
}

export interface TrimWhitespaceRequest {
	range: GridRange;
}

export interface UnmergeCellsRequest {
	range: GridRange;
}

export interface UpdateBandingRequest {
	bandedRange: BandedRange;
}

export interface UpdateBordersRequest {
	bottom: Border;
	innerHorizontal: Border;
	innerVertical: Border;
	left: Border;
	range: GridRange;
	right: Border;
	top: Border;
}

export interface UpdateCellsRequest {
	fields: string;
	range?: GridRange;
	rows: RowData[];
	start?: GridCoordinate;
}

export interface UpdateChartSpecRequest {
	chartId: number;
	spect: ChartSpec;
}

export interface UpdateConditionalFormatRuleRequest {
	index: number;
	newIndex?: number;
	rule?: ConditionalFormatRule;
	sheetId: number;
}

export interface UpdateDataSourceRequest {
	dataSource: DataSource;
	fields: string;
}

export interface UpdateDimensionGroupRequest {
	dimensionGroup: DimensionGroup;
	fields: string;
}

export interface UpdateDimensionPropertiesRequest {
	dataSourceSheetRange?: DataSourceSheetDimensionRange;
	fields: string;
	properties: DimensionProperties;
	range?: DimensionRange;
}

export interface UpdateDeveloperMetadataRequest {
	dataFilters: DataFilter[];
	devloperMetadata: DeveloperMetadata;
	fields: string;
}

export interface UpdateEmbeddedObjectPositionRequest {
	fields: string;
	newPosition: EmbeddedObjectPosition;
	objectId: number;
}

export interface UpdateFilterViewRequest {
	fields: string;
	filter: FilterView;
}

export interface UpdateNamedRangeRequest {
	fields: string;
	namedRange: NamedRange;
}

export interface UpdateProtectedRangeRequest {
	fields: string;
	protectedRange: ProtectedRange;
}

export interface UpdateSheetPropertiesRequest {
	fields: string;
	properties: SheetProperties;
}

export interface UpdateSlicerSpecRequest {
	fields: string;
	slicerId: number;
	spec: SliceSpec;
}

export interface UpdateSpreadsheetPropertiesRequest {
	fields: string;
	properties: SpreadsheetProperties;
}
