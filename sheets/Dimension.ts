import { Dimension } from './util/Constants';
import { DeveloperMetadata } from './Developer';
import { DataSourceColumnReference } from './DataSource';

export interface DimensionGroup {
	collapsed: boolean;
	depth: number;
	range: DimensionRange;
}

export interface DimensionRange {
	dimension: Dimension;
	endIndex: number;
	sheetId: number;
	startIndex: number;
}

export interface DimensionProperties {
	dataSourceColumnReference: DataSourceColumnReference;
	developerMetadata: DeveloperMetadata[];
	hiddenByFilter: boolean;
	hiddenByUser: boolean;
	pixelSize: number;
}
