import { EVENTS } from '@/core/Block/Block.types';

export type TCallback = (...args: any[]) => void;
export type TListeners = Partial<Record<EVENTS, TCallback[]>>;
