export interface StoredValue<TValue> {
    serverState: string;
    value: TValue;
}

export abstract class AbstractPersistedService<TValue> extends EventTarget {
    private loadedValue!: StoredValue<TValue>;

    private readonly initialValue: TValue;

    protected constructor(initialValue: TValue) {
        super();

        this.initialValue = initialValue;
        this.init();
    }

    private init() {
        this.loadedValue =
            JSON.parse(localStorage.getItem(this.storageKey) || 'null') ?? null;

        if (this.loadedValue) {
            if (
                window.serverState &&
                window.serverState !== this.loadedValue.serverState
            ) {
                this.clear();
            }
        } else {
            this.loadedValue = {
                serverState: window.serverState ?? 'UNKNOWN',
                value: structuredClone(this.initialValue),
            };
        }
    }

    protected get value(): TValue {
        return this.loadedValue.value;
    }

    protected set value(newValue: TValue) {
        this.loadedValue.value = newValue;

        localStorage.setItem(this.storageKey, JSON.stringify(this.loadedValue));

        this.dispatchUpdate();
    }

    public clear() {
        localStorage.removeItem(this.storageKey);

        this.loadedValue.value = structuredClone(this.initialValue);

        this.dispatchUpdate();
    }

    private dispatchUpdate() {
        this.dispatchEvent(new CustomEvent(this.updateEventType));
    }

    protected abstract get storageKey(): string;

    protected abstract get updateEventType(): string;
}
