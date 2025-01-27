import { ColorThemeKind, PetSize } from '../../common/types';

export interface Effect {
    name: string;
    description: string;
    init(
        canvas: HTMLCanvasElement,
        scale: PetSize,
        floor: number,
        themeKind: ColorThemeKind,
    ): void;
    enable(): void;
    disable(): void;
}
