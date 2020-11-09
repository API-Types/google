import { TableColumnProperties } from '../Properties';
import { SuggestedDocumentStyle, SuggestedNamedStyles } from '../suggested/Suggested';
import { HeaderFooterType, BulletGlyphPreset, ImageReplaceMethod } from '../Constants';
import { DocumentStyle, NamedStyles, ParagraphStyle, SectionStyle, TextStyle } from '../Styles';
import {
	EndOfSegmentLocation,
	Location,
	TableCellLocation,
	TableCellStyle,
	TableRange,
	TableRowStyle
} from '../Table';
import {
	Body,
	Footer,
	Footnote,
	Header,
	InlineObject,
	List,
	NamedRanges,
	PositionedObject,
	Range,
	SectionType,
	Size,
	SubstringMatchCriteria,
	SuggestionsViewMode,
	WriteControl
} from '../Document';

export interface Request {
	createFooter?: CreateFooterRequest;
	createFootnote?: CreateFootnoteRequest;
	createHeader?: CreateHeaderRequest;
	createNamedRange?: CreateNamedRangeRequest;
	createParagraphBullets?: CreateParagraphBulletsRequest;
	deleteContentRange?: DeleteContentRangeRequest;
	deleteFooter?: DeleteFooterRequest;
	deleteHeader?: DeleteHeaderRequest;
	deleteNamedRange?: DeleteNamedRangeRequest;
	deleteParagraphBullets?: DeleteParagraphBulletsRequest;
	deletePositionedObject?: DeletePositionedObjectRequest;
	deleteTableColumn?: DeleteTableColumnRequest;
	deleteTableRow?: DeleteTableRowRequest;
	insertInlineImage?: InsertInlineImageRequest;
	insertPageBreak?: InsertPageBreakRequest;
	insertSectionBreak?: InsertSectionBreakRequest;
	insertTable?: InsertTableRequest;
	insertTableColumn?: InsertTableColumnRequest;
	insertTableRow?: InsertTableRowRequest;
	insertText?: InsertTextRequest;
	mergeTableCells?: MergeTableCellsRequest;
	replaceAllText?: ReplaceAllTextRequest;
	replaceImage?: ReplaceImageRequest;
	replaceNamedRangeContent?: ReplaceNamedRangeContentRequest;
	unmergeTableCells?: UnmergeTableCellsRequest;
	updateDocumentStyle?: UpdateDocumentStyleRequest;
	updateParagraphStyle?: UpdateParagraphStyleRequest;
	updateSectionStyle?: UpdateSectionStyleRequest;
	updateTableCellStyle?: UpdateTableCellStyleRequest;
	updateTableColumnProperties?: UpdateTableColumnPropertiesRequest;
	updateTableRowStyle?: UpdateTableRowStyleRequest;
	updateTextStyle?: UpdateTextStyleRequest;
}

export interface BatchUpdateDocumentRequest {
	requests: Request[];
	writeControl: WriteControl;
}

export interface CreateDocumentRequest {
	body: Body;
	documentId: string;
	documentStyle: DocumentStyle;
	footers: Record<string, Footer>;
	footnotes: Record<string, Footnote>;
	headers: Record<string, Header>;
	inlineObjects: Record<string, InlineObject>;
	lists: Record<string, List>;
	namedRanges: Record<string, NamedRanges>;
	namedStyles: NamedStyles;
	positionedObjects: Record<string, PositionedObject>;
	revisionId: string;
	suggestedDocumentStyleChanges: Record<string, SuggestedDocumentStyle>;
	suggestedNamedStylesChanges: Record<string, SuggestedNamedStyles>;
	suggestionsViewMode: keyof typeof SuggestionsViewMode;
	title: string;
}

export interface CreateFooterRequest {
	sectionBreakLocation: Location;
	type: keyof typeof HeaderFooterType;
}

export interface CreateFootnoteRequest {
	endOfSegmentLocation?: EndOfSegmentLocation;
	location?: Location;
}

export interface CreateHeaderRequest {
	sectionBreakLocation: Location;
	type: keyof typeof HeaderFooterType;
}

export interface CreateNamedRangeRequest {
	name: string;
	range: Range;
}

export interface CreateParagraphBulletsRequest {
	bulletPreset: keyof typeof BulletGlyphPreset;
	range: Range;
}

export interface DeleteContentRangeRequest {
	range: Range;
}

export interface DeleteFooterRequest {
	footerId: string;
}

export interface DeleteHeaderRequest {
	headerId: string;
}

export interface DeleteNamedRangeRequest {
	name?: string;
	namedRangeId?: string;
}

export interface DeleteParagraphBulletsRequest {
	range: Range;
}

export interface DeletePositionedObjectRequest {
	objectId: string;
}

export interface DeleteTableColumnRequest {
	tableCellLocation: TableCellLocation;
}

export interface DeleteTableRowRequest {
	tableCellLocation: TableCellLocation;
}

export interface InsertInlineImageRequest {
	endOfSegmentLocation?: EndOfSegmentLocation;
	location?: Location;
	objectSize: Size;
	uri: string;
}

export interface InsertPageBreakRequest {
	endOfSegmentLocation?: EndOfSegmentLocation;
	location?: Location;
}

export interface InsertSectionBreakRequest {
	endOfSegmentLocation?: EndOfSegmentLocation;
	location?: Location;
	sectionType: keyof typeof SectionType;
}

export interface InsertTableRequest {
	columns: number;
	endOfSegmentLocation?: EndOfSegmentLocation;
	location?: Location;
	rows: number;
}

export interface InsertTableColumnRequest {
	insertRight: boolean;
	tableCellLocation: TableCellLocation;
}

export interface InsertTableRowRequest {
	insertBelow: boolean;
	tableCellLocation: TableCellLocation;
}

export interface InsertTextRequest {
	endOfSegmentLocation?: EndOfSegmentLocation;
	location?: Location;
	text: string;
}

export interface MergeTableCellsRequest {
	tableRange: TableRange;
}

export interface ReplaceAllTextRequest {
	containsText: SubstringMatchCriteria;
	replaceText: string;
}

export interface ReplaceImageRequest {
	imageObjectId: string;
	imageReplaceMethod: keyof typeof ImageReplaceMethod;
	uri: string;
}

export interface ReplaceNamedRangeContentRequest {
	namedRangeId?: string;
	namedRangeName: string;
	text: string;
}

export interface UnmergeTableCellsRequest {
	tableRange: TableRange;
}

export interface UpdateDocumentStyleRequest {
	documentStyle: DocumentStyle;
	fields: string;
}

export interface UpdateParagraphStyleRequest {
	fields: string;
	paragraphStyle: ParagraphStyle;
	range: Range;
}

export interface UpdateSectionStyleRequest {
	fields: string;
	range: Range;
	sectionStyle: SectionStyle;
}

export interface UpdateTableCellStyleRequest {
	fields: string;
	tableCellStyle: TableCellStyle;
	tableRange?: TableRange;
	tableStartLocation?: Location;
}

export interface UpdateTableColumnPropertiesRequest {
	columnIndices: number[];
	fields: string;
	tableColumnProperties: TableColumnProperties;
	tableStartLocation?: Location;
}

export interface UpdateTableRowStyleRequest {
	fields: string;
	rowIndices: number[];
	tableRowStyle: TableRowStyle;
	tableStartLocation?: Location;
}

export interface UpdateTextStyleRequest {
	fields: string;
	range: Range;
	textStyle: TextStyle;
}
