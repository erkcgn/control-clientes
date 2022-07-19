import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Configuracion } from "../modelo/configuracion.model";

export class ConfiguracionServicio{
    configuracionDoc!: AngularFirestoreDocument<Configuracion>;
    configuracion!: Observable<Configuracion>;

    //id unico de la coleccion de configuracion
    id = '1';

    constructor(private db: AngularFirestore){}

    getConfiguracion(): Observable<Configuracion>{
        this.configuracionDoc = this.db.doc<Configuracion>(`configuracion/${this.id}`);
        this.configuracion = this.configuracionDoc.valueChanges() as any;
        return this.configuracion; //del objeto que es un observable
    }

    modificarConfiguracion(configuracion: Configuracion){
        this.configuracionDoc = this.db.doc<Configuracion>(`configuracion/${this.id}`);
        this.configuracionDoc.update(configuracion);
    }
}