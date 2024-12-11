import { EVENTS } from '@/classes/Block/Block.types';

export type TCallback = (...args: any[]) => void;
export type TListeners = Partial<Record<EVENTS, TCallback[]>>;
