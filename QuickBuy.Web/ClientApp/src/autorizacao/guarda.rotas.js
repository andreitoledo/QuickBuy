"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardaRotas = void 0;
var core_1 = require("@angular/core");
(0, core_1.Injectable)({
    providedIn: 'root'
});
var GuardaRotas = /** @class */ (function () {
    function GuardaRotas(router) {
        this.router = router;
    }
    GuardaRotas.prototype.canActivate = function (route, state) {
        var autenticado = sessionStorage.getItem("usuario-autenticado");
        if (autenticado == "1") {
            return true;
        }
        this.router.navigate(['/entrar'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return GuardaRotas;
}());
exports.GuardaRotas = GuardaRotas;
//# sourceMappingURL=guarda.rotas.js.map