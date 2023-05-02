export default interface gameMetaData {
    id: number;
    displayId?: number;
    iconLargeUrl?: string;
    name?: string;
    path?: string;
    docs?: string;
    compliance?: string;
    launcher?: number;
    games?: number[];
    mainVariant?: number;
    subVariants?: number[];
    variant?: string;
}