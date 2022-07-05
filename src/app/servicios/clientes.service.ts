import { Injectable } from "@angular/core";
import { AngularFirestoreCollection } from "@angular/fire/compat/firestore";

@Injectable()
export class ClienteServicio{
    clientesColeccion: AngularFirestoreCollection;
}