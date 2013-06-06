/// <reference path="../../Scripts/typings/toastr/toastr.d.ts" />
/// <reference path="../../Scripts/typings/knockout/knockout.d.ts" />
import logger = module("../services/logger");

export class ViewModelBase {
    title = ko.observable();

    constructor() {
        for (var methodName in this) {
            var fn = this[methodName];
            if (typeof fn === "function") {
                this[methodName] = this[methodName].bind(this);
            }
        }
    }

    activate(activationData) {
        logger.info(this.title() + " Activated");
        return true;
    }
}