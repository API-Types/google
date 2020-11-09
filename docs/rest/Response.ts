import { WriteControl } from '../Document';

export interface Response {
	createFooter?: CreateFooterResponse;
	createFootnote?: CreateFootnoteResponse;
	createHeader?: CreateHeaderResponse;
	createdNamedRange?: CreatedNamedRangeResponse;
	insertInlineImage?: InsertInlineImageResponse;
	insertInlineSheetsChart?: InsertInlineSheetsChartResponse;
	replaceAllText?: ReplaceAllTextResponse;
}

export interface BatchUpdateDocumentResponse {
	documentId: string;
	replies: Response[];
	writeControl: WriteControl;
}

export interface CreateFooterResponse {
	footerId: string;
}

export interface CreateFootnoteResponse {
	footnoteId: string;
}

export interface CreateHeaderResponse {
	headerId: string;
}

export interface CreatedNamedRangeResponse {
	namedRangeId: string;
}

export interface InsertInlineImageResponse {
	objectId: string;
}

export interface InsertInlineSheetsChartResponse {
	objectId: string;
}

export interface ReplaceAllTextResponse {
	occurrencesChanged: number;
}
