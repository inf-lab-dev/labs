import { ReactiveControllerHost, ReactiveController } from 'lit';

export type ControllerFactory<
    TService extends EventTarget,
    TController extends AbstractController<TService>
> = (host: ReactiveControllerHost) => TController;

export interface AbstractControllerClass<
    TService extends EventTarget,
    TController extends AbstractController<TService>
> {
    new (host: ReactiveControllerHost, service: TService): TController;
}

export abstract class AbstractController<TService extends EventTarget>
    implements ReactiveController
{
    private readonly host: ReactiveControllerHost;
    public readonly service: TService;

    private readonly onUpdated = () => {
        this.host.requestUpdate();
    };

    public constructor(host: ReactiveControllerHost, service: TService) {
        this.service = service;
        this.host = host;

        host.addController(this);
    }

    public hostConnected() {
        this.service.addEventListener(this.updateEventType, this.onUpdated);
    }

    public hostDisconnected() {
        this.service.removeEventListener(this.updateEventType, this.onUpdated);
    }

    protected abstract get updateEventType(): string;
}

export function createControllerFactory<
    TService extends EventTarget,
    TController extends AbstractController<TService>
>(
    service: TService,
    controllerType: AbstractControllerClass<TService, TController>
): ControllerFactory<TService, TController> {
    return host => new controllerType(host, service);
}
