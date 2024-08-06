import { ServiceA } from "./a";
import type { Cradle } from "..";

export class ServiceB {
  static readonly symbol = Symbol("ServiceB");

  private serviceA: ServiceA;

  constructor(deps: Cradle) {
    this.serviceA = deps[ServiceA.symbol];
  }

  log() {
    console.log("calling ServiceB log");
  }

  logFromServiceA() {
    this.serviceA.log();
  }
}
