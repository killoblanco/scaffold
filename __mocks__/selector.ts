import { atom } from "recoil";

export const mockActiveAtom = atom<string | null>({
  key: 'mockActiveAtom',
  default: null,
});

export const mockListAtom = atom<string[]>({
  key: 'mockListAtom',
  default: [],
});

export const mockItemsAtom = atom({
  key: 'mockItemsAtom',
  default: {},
});
