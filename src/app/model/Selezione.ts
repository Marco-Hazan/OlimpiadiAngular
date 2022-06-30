import { OlimpioniciService } from "./olimpionici.service";
import { Selezionatore } from "./Selezionatore";

export class Selezione{

    public selezionatore: Selezionatore = {
        "nome": "",
        "cognome": "",
        "citta": "",
        "indirizzo": ""
    }
    constructor(private olimpionici: OlimpioniciService){}

    setSelezionatore(selez: Selezionatore){
        this.selezionatore = selez;
    }

}