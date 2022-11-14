import { RecoilState } from 'recoil';
import { StateItem, UseBuildStateReturn } from '../types';
export declare const useBuildState: <T, P = any>(activeAtom: RecoilState<string | null>, listAtom: RecoilState<string[]>, itemsAtom: RecoilState<any>) => UseBuildStateReturn<T, P>;
