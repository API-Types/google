import { GridCoordinate, GridRange } from './Grid';
import { DataExecutionStatus, FilterSpec, SortSpec } from './util/Other';

export interface BigQueryDataSourceSpec {
	projectId: string;
	querySpec?: BigQuerySpec;
	tableSpec?: BigQueryTableSpec;
}

export interface BigQuerySpec {
	rawQuery: string;
}

export interface BigQueryTableSpec {
	datasetId: string;
	tableId: string;
	tableProjectId: string;
}

export interface DailyRefreshSchedule {
	startTime: TimeOfDay;
}

export interface DataSource {
	calculatedColumns: DataSourceColumn[];
	dataSourceId: string;
	sheetId: number;
	spec: DataSourceSpec;
}

export interface DataSourceChartProperties {
	dataExecutionStatus: DataExecutionStatus;
	dataSourceId: string;
}

export interface DataSourceColumn {
	formula: string;
	reference: DataSourceColumnReference;
}

export interface DataSourceColumnReference {
	name: string;
}

export interface DataSourceFormula {
	dataExecutionStatus: DataExecutionStatus;
	dataSourceId: string;
}

export interface DataSourceObjectReference {
	chartId?: string;
	dataSourceFormulaCell?: GridCoordinate;
	dataSourcePivotTableAnchorCell?: GridCoordinate;
	dataSourceTableAnchorCell?: GridCoordinate;
	sheetId?: string;
}

export interface DataSourceObjectReferences {
	references: DataSourceObjectReference[];
}

export interface DataSourceParameter {
	name: string;
	namedRangeId?: string;
	range?: GridRange;
}

export interface DataSourceRefreshSchedule {
	dailySchedule?: DailyRefreshSchedule;
	enabled: boolean;
	monthlySchedule?: MonthlyRefreshSchedule;
	nextRun: Interval;
	refreshScope: keyof typeof RefreshScope;
	weeklySchedule?: WeeklyRefreshSchedule;
}

export interface DataSourceSheetDimensionRange {
	columnReferences: DataSourceColumnReference;
	sheetId: number;
}

export interface DataSourceSheetProperties {
	columns: DataSourceColumn[];
	dataExecutionStatus: DataExecutionStatus;
	dataSourceId: string;
}

export interface DataSourceSpec {
	bigQuery: BigQueryDataSourceSpec;
	parameters: DataSourceParameter[];
}

export interface DataSourceTable {
	columnSelectionType: keyof typeof DataSourceTableColumnSelectionType;
	columns: DataSourceColumnReference[];
	dataExecutionStatus: DataExecutionStatus;
	dataSourceId: string;
	filterSpecs: FilterSpec;
	rowLimit: number;
	sortSpecs: SortSpec;
}

export enum DataSourceTableColumnSelectionType {
	DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED,
	SELECTED,
	SYNC_ALL
}

export enum DayOfWeek {
	DAYS_OF_WEEK_UNSPECIFIED,
	FRIDAY,
	MONDAY,
	SATURDAY,
	SUNDAY,
	THURSDAY,
	TUESDAY,
	WEDNESDAY
}

export interface Interval {
	endTime: string;
	startTime: string;
}

export interface MonthlyRefreshSchedule {
	daysOfMonth: number[];
	startTime: TimeOfDay;
}

export enum RefreshScope {
	ALL_DATA_SOURCES,
	DATA_SOURCE_REFRESH_SCOPE_UNSPECIFIED
}

export interface TimeOfDay {
	hours: number;
	minutes: number;
	nanos: number;
	seconds: number;
}

export interface WeeklyRefreshSchedule {
	daysOfWeek: keyof typeof DayOfWeek[];
	startTime: TimeOfDay;
}
