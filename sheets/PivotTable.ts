import { GridRange } from './Grid';
import { SortOrder } from './util/Constants';
import { DataSourceColumnReference } from './DataSource';
import { DataExecutionStatus, ExtendedValue } from './util/Other';

export enum CalculatedDisplayType {
	PERCENT_OF_COLUMN_TOTAL,
	PERCENT_OF_GRAND_TOTAL,
	PERCENT_OF_ROW_TOTAL,
	PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED
}

export interface DateTimeRule {
	type: keyof typeof DateTimeRuleType;
}

export enum DateTimeRuleType {
	DATE_TIME_RULE_TYPE_UNSPECIFIED,
	DAY_MONTH,
	DAY_OF_MONTH,
	DAY_OF_WEEK,
	DAY_OF_YEAR,
	HOUR,
	HOUR_MINUTE,
	HOUR_MINUTE_AMPM,
	MINUTE,
	MONTH,
	QUARTER,
	SECOND,
	YEAR,
	YEAR_MONTH,
	YEAR_MONTH_DAY,
	YEAR_QUARTER
}

export interface HistogramRule {
	end: number;
	interval: number;
	start: number;
}

export interface ManualRule {
	groups: ManualRuleGroup[];
}

export interface ManualRuleGroup {
	groupName: ExtendedValue;
	items: ExtendedValue;
}

export interface PivotFilterCriteria {
	visibleValues: string[];
}

export interface PivotFilterSpec {
	columnOffsetIndex?: number;
	dataSourceColumnReference?: DataSourceColumnReference;
	filterCriteria: PivotFilterCriteria;
}

export interface PivotGroup {
	dataSourceColumnReference?: DataSourceColumnReference;
	groupLimit: PivotGroupLimit;
	groupRule: PivotGroupRule;
	label: string;
	repeatHeading: boolean;
	showTotals: boolean;
	sortOrder: SortOrder;
	sourceColumnOffset?: number;
	valueBucket: PivotGroupSortValueBucket;
	valueMetadata: PivotGroupValueMetadata[];
}

export interface PivotGroupLimit {
	countLimit: number;
	applyOrder: number;
}

export interface PivotGroupRule {
	dateTimeRule: DateTimeRule;
	histogramRule: HistogramRule;
	manualRule: ManualRule;
}

export interface PivotGroupSortValueBucket {
	buckets: ExtendedValue[];
	valuesIndex: number;
}

export interface PivotGroupValueMetadata {
	collapsed: boolean;
	value: ExtendedValue;
}

export interface PivotTable {
	columns: PivotGroup[];
	dataExecutionStatus: DataExecutionStatus;
	dataSourceId?: string;
	filterSpecs: PivotFilterSpec[];
	rows: PivotGroup[];
	source?: GridRange;
	valueLayout: keyof typeof PivotValueLayout;
	values: PivotValue;
}

export interface PivotValue {
	calculatedDisplayType: CalculatedDisplayType;
	dataSourceColumnReference?: DataSourceColumnReference;
	formula?: string;
	name: string;
	sourceColumnOffset?: number;
	summarizeFunction: keyof typeof SummarizeFunction;
}

export enum PivotValueLayout {
	HORIZONTAL,
	VERTICAL
}

export enum SummarizeFunction {
	AVERAGE,
	COUNT,
	COUNTA,
	COUNTUNIQUE,
	CUSTOM,
	MAX,
	MEDIAN,
	MIN,
	PIVOT_STANDARD_VALUE_FUNCTION_UNSPECIFIED,
	PRODUCT,
	STDEV,
	STDEVP,
	SUM,
	VAR,
	VARP
}
