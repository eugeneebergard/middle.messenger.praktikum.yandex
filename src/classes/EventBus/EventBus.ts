import { TCallback, TListeners } from './EventBus.types';
import { EVENTS } from '@/classes/Block/Block.types';

export class EventBus {
  private readonly listeners: TListeners;

  constructor() {
    this.listeners = {};
  }

  on(event: EVENTS, callback: TCallback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: EVENTS, callback: TCallback) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      listener => listener !== callback,
    );
  }

  emit(event: EVENTS, ...args: unknown[]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach(function (listener) {
      listener(...args);
    });
  }
}
