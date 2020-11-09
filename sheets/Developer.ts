import { DimensionRange } from './Dimension';

export interface DeveloperMetadata {
	location: DeveloperMetadataLocation;
	metadataId: number;
	metadataKet: string;
	metadataValue: string;
	visibility: keyof typeof DeveloperMetadataVisibility;
}

export interface DeveloperMetadataLocation {
	dimensionRange?: DimensionRange;
	locationType: keyof typeof LocationType;
	sheetId?: number;
	spreedsheet?: boolean;
}

export interface DeveloperMetadataLookup {
	locationMatchingStrategy: keyof typeof LocationMatchingStrategy;
	locationType: keyof typeof LocationType;
	metadataId: number;
	metadataKey: string;
	metadataLocation: DeveloperMetadataLocation;
	metadataValue: string;
	visibility: keyof typeof DeveloperMetadataVisibility;
}

export enum DeveloperMetadataVisibility {
	DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED,
	DOCUMENT,
	PROJECT
}

export enum LocationMatchingStrategy {
	DEVELOPER_METADATA_LOCATION_MATCHING_STRATEGY_UNSPECIFIED,
	EXACT_LOCATION,
	INTERSECTING_LOCATION
}

export enum LocationType {
	DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED,
	ROW,
	COLUMN,
	SHEET,
	SPREADSHEET
}
