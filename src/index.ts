import { asClass, createContainer, InjectionMode } from "awilix";
import { ServiceA } from "./services/a";
import { ServiceB } from "./services/b";

export interface Cradle {
  [ServiceA.symbol]: ServiceA;
  [ServiceB.symbol]: ServiceB;
}

export const configureContainer = () => {
  const container = createContainer<Cradle>({
    injectionMode: InjectionMode.PROXY,
  });

  container.register({
    [ServiceB.symbol]: asClass(ServiceB).singleton(),
    [ServiceA.symbol]: asClass(ServiceA).singleton(),
  });

  return container;
};

const container = configureContainer();

container.resolve(ServiceA.symbol).log();
container.resolve(ServiceB.symbol).log();
container.resolve(ServiceB.symbol).logFromServiceA();
