import { Injectable } from "@angular/core"; 
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService {

    public zapatillas: Array<Zapatilla>;
    constructor() { 
        this.zapatillas = [
            new Zapatilla('Botas', 'Nike', 'Amarrillas', 40, true),
            new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80, true),
            new Zapatilla('Reebook Spartan', 'Reebook', 'Negra', 180, true),
            new Zapatilla('Nike Runner MD', 'Nike', 'Negras', 60, true),
            new Zapatilla('Addidas Yezy', 'Adidas', 'gris', 180, false)
        ];
    }

    getTexto(){
        return "Hola mundo desde un servicio de Angular";
    }
    //Método para devolver el array de zapatillas
    getZapatillas(): Array<Zapatilla> {
        return this.zapatillas;
    }    
}