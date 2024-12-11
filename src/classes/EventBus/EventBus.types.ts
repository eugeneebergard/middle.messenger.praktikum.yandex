import { EVENTS } from '@/types';
export type TCallback = (...args: unknown[]) => void;
export type TListeners = Partial<Record<EVENTS, TCallback[]>>;
