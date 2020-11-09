export interface Color {
	alpha: number;
	blue: number;
	green: number;
	red: number;
}

export interface ColorStyle {
	rgbColor?: Color;
	themeColor?: keyof typeof ThemeColorType;
}

export enum HorizontalAlign {
	CENTER,
	HORIZONTAL_ALIGN_UNSPECIFIED,
	LEFT,
	RIGHT
}

export interface TextFormat {
	bold: boolean;
	fontFamily: string;
	fontSize: string;
	foregroundColor: Color;
	foregroundColorStyle: ColorStyle;
	italic: boolean;
	strikethrough: boolean;
	underline: boolean;
}

export enum ThemeColorType {
	ACCENT1,
	ACCENT2,
	ACCENT3,
	ACCENT4,
	ACCENT5,
	ACCENT6,
	BACKGROUND,
	LINK,
	TEXT,
	THEME_COLOR_TYPE_UNSPECIFIED
}

export enum VerticalAlign {
	BOTTOM,
	MIDDLE,
	TOP,
	VERTICAL_ALIGN_UNSPECIFIED
}
