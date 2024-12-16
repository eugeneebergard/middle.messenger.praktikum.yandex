import Handlebars from 'handlebars';
import { nanoid } from 'nanoid';
import { EventBus } from '@/core/EventBus';
import { EVENTS } from './Block.types';

/* eslint-disable @typescript-eslint/no-unused-expressions */
export class Block<P extends Record<string, unknown>> {
  static EVENTS = EVENTS;

  public id: string = nanoid(8);

  protected props: P;

  protected children: Record<string, Block<P> | Block<P>[]> = {};

  private _element: HTMLElement | null = null;

  private eventBus: EventBus;

  constructor(propsAndChildren: P = {} as P) {
    const { props, children } = this._getChildrenAndProps(propsAndChildren);

    this.eventBus = new EventBus();
    this.props = this._makePropsProxy(props);
    this.children = children;

    this._registerEvents();
    this.eventBus.emit(Block.EVENTS.INIT);
  }

  // Запускает процесс инициализации, создавая элемент DOM (по умолчанию это <div>)
  // и инициирует рендеринг через событие FLOW_RENDER.
  public init(): void {
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  // Вызывается после монтирования компонента.
  // В случае наличия дочерних элементов, вызывает метод dispatchComponentDidMount() у них.
  private _componentDidMount(): void {
    this.componentDidMount();

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((entry) => entry.dispatchComponentDidMount());
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  // Пустой метод, который можно переопределить в подклассах
  // для добавления дополнительной логики при монтировании компонента.
  protected componentDidMount(): void {}

  // Вызывается при изменении props.
  // Если метод componentDidUpdate() возвращает true, запускается рендеринг.
  private _componentDidUpdate(oldProps: P, newProps: P): void {
    this.componentDidUpdate(oldProps, newProps) && this._render();
  }

  // Переопределяемый метод, который используется для проверки, нужно ли обновлять компонент.
  // По умолчанию всегда возвращает true, если старые и новые пропсы существуют.
  protected componentDidUpdate(oldProps?: P, newProps?: P): boolean {
    return !!(oldProps && newProps);
  }

  // Очищает текущий контент элемента, генерирует новый через метод render() и добавляет обработчики событий.
  private _render(): void {
    this._removeEvents();
    const renderedElem = this.render().firstElementChild as HTMLElement;

    if (renderedElem && this._element) {
      this._element.replaceWith(renderedElem);
    }

    this._element = renderedElem;
    this._addEvents();
  }

  // Метод для рендеринга, который по умолчанию возвращает пустой DocumentFragment.
  // Этот метод можно переопределить для добавления собственной логики рендеринга.
  protected render(): DocumentFragment {
    return document.createDocumentFragment();
  }

  // Компилирует шаблон с использованием Handlebars,
  // затем заменяет заглушки для дочерних компонентов, добавляя их в скомпилированный HTML.
  protected compile(template: string, props: P): DocumentFragment {
    const contextWithStubs = { ...props, children: this.children };

    const compiledHTML = Handlebars.compile(template)(contextWithStubs);
    const templateElement = document.createElement('template');

    templateElement.innerHTML = compiledHTML;

    Object.entries(this.children).forEach(([childName, childInstance]) => {
      const stub = templateElement.content.querySelector(`[data-id="${childName}"]`);

      if (stub) {
        if (Array.isArray(childInstance)) {
          childInstance.forEach((child) => stub.appendChild(child.getContent()!));
        } else {
          stub.replaceWith(childInstance.getContent()!);
        }
      }
    });

    return templateElement.content;
  }

  // Возвращает текущий элемент компонента.
  public getContent(): HTMLElement | null {
    return this._element;
  }

  // Разделяет переданные данные на props и children, определяя, какие элементы являются дочерними компонентами.
  private _getChildrenAndProps(childrenAndProps: P): { props: P; children: Record<string, Block<P> | Block<P>[]> } {
    const props: Record<string, unknown> = {};
    const children: Record<string, Block<P> | Block<P>[]> = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (value instanceof Block || (Array.isArray(value) && value.every((item) => item instanceof Block))) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { props: props as P, children };
  }

  // Создаёт прокси для props, чтобы отслеживать изменения и вызывать событие обновления компонента через EventBus.
  private _makePropsProxy(props: P): P {
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop as keyof P];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value) {
        const oldProps = { ...target };
        target[prop as keyof P] = value;

        self.eventBus.emit(Block.EVENTS.FLOW_CDU, oldProps, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  // Метод для обновления пропсов компонента.
  public setProps(nextProps: Partial<P>): void {
    nextProps && Object.assign(this.props, nextProps);
  }

  // Регистрирует обработчики событий для различных событий жизненного цикла компонента,
  // таких как INIT, FLOW_CDM, FLOW_CDU, FLOW_RENDER.
  private _registerEvents(): void {
    this.eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    this.eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    this.eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    this.eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  // Добавляет обработчики событий из props на элемент компонента.
  private _addEvents(): void {
    const { events = {} } = this.props as P & { events: Record<string, () => void> };
    Object.entries(events).forEach(([event, listener]) =>
      this._element?.addEventListener(event, listener));
  }

  // Удаляет обработчики событий с элемента компонента.
  private _removeEvents(): void {
    const { events = {} } = this.props as P & { events: Record<string, () => void> };
    Object.entries(events).forEach(([event, listener]) =>
      this._element?.removeEventListener(event, listener));
  }

  // Эмитирует событие FLOW_CDM, сигнализируя, что компонент был смонтирован
  public dispatchComponentDidMount(): void {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  // Устанавливает стиль display: block для элемента, чтобы он был видим
  public show(): void {
    this._element && (this._element.style.display = 'block');
  }

  // Устанавливает стиль display: none для элемента, чтобы скрыть его.
  public hide(): void {
    this._element && (this._element.style.display = 'none');
  }
}
