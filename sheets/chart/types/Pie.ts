import { BaseSpec } from '../Base';
import { ChartData } from '../Chart';

export interface PieSpec extends BaseSpec<PieSpec> {
	domain: ChartData;
	pieHole: number;
	series: ChartData;
	threeDimensional: boolean;
}
