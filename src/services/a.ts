export class ServiceA {
    static readonly symbol = Symbol('ServiceA')

    constructor() {}

    log() {
        console.log('calling ServiceA log')
    }
}
