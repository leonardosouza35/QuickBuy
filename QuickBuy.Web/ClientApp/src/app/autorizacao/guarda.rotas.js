"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GuardaRotas = /** @class */ (function () {
    function GuardaRotas() {
    }
    GuardaRotas.prototype.canActivate = function (route, state) {
        // se usuario autenticado
        return true;
    };
    return GuardaRotas;
}());
exports.GuardaRotas = GuardaRotas;
//# sourceMappingURL=guarda.rotas.js.map