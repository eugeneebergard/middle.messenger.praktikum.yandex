import { EventBus } from '@/classes/EventBus';
import { EVENTS } from './Block.types';
export class Block<P extends Record<string, unknown>> {
  static EVENTS = EVENTS;

  private _element: HTMLElement | null = null;

  private readonly _meta: { tagName: string; props: P } | null = null;

  private eventBus: () => EventBus;

  public props: P;

  constructor(tagName: string = 'div', props: P = {} as P) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  // Жизненный цикл компонента
  init(): void {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount(): void {
    this.componentDidMount();
  }

  componentDidMount(oldProps?: P): void {
    this.setProps(oldProps as P);
  }

  dispatchComponentDidMount(): void {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: P, newProps: P): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(oldProps?: P, newProps?: P): boolean {
    return !!(oldProps && newProps);
  }

  // Обработчики событий
  private _registerEvents(eventBus: EventBus): void {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  // Методы для работы с пропсами
  setProps(nextProps: Partial<P>): void {
    if (!nextProps) return;
    Object.assign(this.props, nextProps);
  }

  private _makePropsProxy(props: P): P {
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop as keyof P];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value) {
        target[prop as keyof P] = value;

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  // Рендеринг и обновление DOM
  private _createResources(): void {
    const { tagName } = this._meta!;
    this._element = this._createDocumentElement(tagName);
  }

  private _render(): void {
    const block = this.render();
    this._element && (this._element.innerHTML = block);
  }

  render(): string {
    return '';
  }

  private _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  // Вспомогательные методы
  get element(): HTMLElement | null {
    return this._element;
  }

  show(): void {
    this.element && (this.element.style.display = 'block');
  }

  hide(): void {
    this.element && (this.element!.style.display = 'none');
  }
}

