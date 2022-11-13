import { atom, selector } from "recoil";

export const mockListAtom = atom<string[]>({
  key: 'mockListAtom',
  default: [],
});

export const mockItemsAtom = atom({
  key: 'mockItemsAtom',
  default: {},
});
