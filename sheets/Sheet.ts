import { DimensionGroup } from './Dimension';
import { CellData, CellFormat } from './Cell';
import { EmbeddedChart } from './chart/Chart';
import { DeveloperMetadata } from './Developer';
import { DataSourceSheetProperties } from './DataSource';
import { GridData, GridProperties, GridRange } from './Grid';
import { Color, ColorStyle, TextFormat, HorizontalAlign } from './Format';
import {
	BooleanCondition,
	SortSpec,
	FilterSpec,
	EmbeddedObjectPosition,
	FilterCriteria
} from './util/Other';

export interface BandedRange {
	bandedRangeId: number;
	columnProperties: BandingProperties;
	range: GridRange;
	rowProperties: BandingProperties;
}

export interface BandingProperties {
	firstBandColor: Color;
	firstBandColorStyle: ColorStyle;
	footerColor: Color;
	footerColorStyle: ColorStyle;
	headerColor: Color;
	headerColorStyle: ColorStyle;
	secondBandColor: Color;
	secondBandColorStyle: ColorStyle;
}

export interface BasicFilter {
	filterSpecs: FilterSpec[];
	range: GridRange;
	sortSpecs: SortSpec;
}

export interface BooleanRule {
	condition: BooleanCondition;
	format: CellFormat;
}

export interface ConditionalFormatRule {
	booleanRule?: BooleanRule;
	gradientRule?: GradientRule;
	ranges: GridRange[];
}

export interface Editors {
	domainUsersCanEdit: boolean;
	groups: string[];
	users: string[];
}

export interface FilterView {
	filterSpecs: FilterSpec[];
	filterViewId: number;
	namedRangeId: string;
	range: GridRange;
	sortSpecs: SortSpec[];
	title: string;
}

export interface GradientRule {
	maxpoint: InterpolationPoint;
	midpoint: InterpolationPoint;
	minpoint: InterpolationPoint;
}

export interface InterpolationPoint {
	color: Color;
	colorStyle: ColorStyle;
	type: InterpolationPointType;
	value: string;
}

export enum InterpolationPointType {
	INTERPOLATION_POINT_TYPE_UNSPECIFIED,
	MAX,
	MIN,
	NUMBER,
	PERCENT,
	PERCENTILE
}

export interface ProtectedRange {
	description: string;
	editors: Editors;
	namedRangeId: string;
	protectedRangeId: number;
	range: GridRange;
	requestingUserCanEdit: boolean;
	unprotectedRanges: GridRange[];
	warningOnly: boolean;
}

export interface RowData {
	values: CellData[];
}

export interface Sheet {
	bandedRanges: BandedRange[];
	basicFilter: BasicFilter;
	charts: EmbeddedChart[];
	columnGroups: DimensionGroup[];
	conditionalFormats: ConditionalFormatRule[];
	data: GridData[];
	developerMetadata: DeveloperMetadata[];
	filterViews: FilterView[];
	merges: GridRange[];
	properties: SheetProperties;
	protectedRanges: ProtectedRange[];
	rowGroups: DimensionGroup[];
	slicers: Slicer[];
}

export interface SheetProperties {
	dataSourceSheetProperties: DataSourceSheetProperties;
	gridProperties: GridProperties;
	hidden: boolean;
	index: number;
	rightToLeft: boolean;
	sheetId: string;
	sheetType: SheetType;
	tabColor: Color;
	tabColorStyle: ColorStyle;
	title: string;
}

export enum SheetType {
	DATA_SOURCE,
	GRID,
	OBJECT,
	SHEET_TYPE_UNSPECIFIED
}

export interface Slicer {
	position: EmbeddedObjectPosition;
	sliceId: number;
	spec: SliceSpec;
}

export interface SliceSpec {
	applyToPivotTables: boolean;
	backgroundColor: Color;
	backgroundColorStyle: ColorStyle;
	columnIndex: number;
	dataRange: GridRange;
	filterCriteria: FilterCriteria;
	horizontalAlignment: HorizontalAlign;
	textFormat: TextFormat;
	title: string;
}
