import { Sheet } from './Sheet';
import { GridRange } from './Grid';
import { CellFormat } from './Cell';
import { DeveloperMetadata } from './Developer';
import { ThemeColorType, ColorStyle } from './Format';
import { DataSource, DataSourceRefreshSchedule } from './DataSource';

export interface IterativeCalculationSettings {
	convergenceThreshold: number;
	maxIterations: number;
}

export interface NamedRange {
	namedRangeId: string;
	name: string;
	range: GridRange;
}

export enum RecalculationInterval {
	HOUR,
	MINUTE,
	ON_CHANGE,
	RECALCULATION_INTERVAL_UNSPECIFIED
}

export interface Spreadsheet {
	dataSourceSchedules: DataSourceRefreshSchedule[];
	dataSources: DataSource[];
	developerMetadata: DeveloperMetadata[];
	namedRanges: NamedRange[];
	properties: SpreadsheetProperties;
	sheets: Sheet[];
	spreadsheetId: string;
	spreadsheetUrl: string;
}

export interface SpreadsheetProperties {
	autoRecalc: keyof typeof RecalculationInterval;
	defaultFormat: CellFormat;
	iterativeCalculationSettings: IterativeCalculationSettings;
	locale: string;
	spreadsheetTheme: SpreadsheetTheme;
	timeZone: string;
	title: string;
}

export interface SpreadsheetTheme {
	primaryFontFamily: string;
	themeColors: ThemeColorPair[];
}

export interface ThemeColorPair {
	colorType: ThemeColorType;
	color: ColorStyle;
}
