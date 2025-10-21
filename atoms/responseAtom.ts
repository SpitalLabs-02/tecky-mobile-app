import { atom } from "jotai";


export const responseAtom = atom<Record<string, any>>({})

export const multipleResponse = atom<{ [Key: number]: string[]}>({})