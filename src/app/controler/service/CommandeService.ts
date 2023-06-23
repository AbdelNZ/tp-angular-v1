import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande } from '../model/commande.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private _commande!: Commande;
  private _commandes!: Array<Commande>;
  private _url = environment.apiUrl + 'commande';

  constructor(private http: HttpClient) {}

  public save(): Observable<Commande> {
    return this.http.post<Commande>(this._url, this.commande);
  }

  public get commande(): Commande {
    if (this._commande == null) {
      this._commande = new Commande();
    }
    return this._commande;
  }

  public set commande(value: Commande) {
    this._commande = value;
  }

  public get commandes(): Array<Commande> {
    if (this._commandes == null) {
      this._commandes = new Array<Commande>();
    }
    return this._commandes;
  }

  public set commandes(value: Array<Commande>) {
    this._commandes = value;
  }
}
