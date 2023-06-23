import { Component } from '@angular/core';
import { Commande } from 'src/app/controler/model/commande.model';
import { CommandeService } from 'src/app/controler/service/CommandeService';

@Component({
  selector: 'app-commande-create',
  templateUrl: './commande-create.component.html',
  styleUrls: ['./commande-create.component.css']
})
export class CommandeCreateComponent {

constructor(private commadeService:CommandeService){}
ngOnInit():void{}

public save(): void{
  this.commadeService.save().subscribe(data => {
    if (data != null) {
      alert('SAVE SUCCESS');
    } else {
      alert('SAVE :::::ERROR');
    }
  });

}

public get commande(): Commande {
  
  return this.commadeService.commande;
}

public set commande(value: Commande) {
  this.commadeService.commande = value;
}

public get commandes(): Array<Commande> {
  
  return this.commadeService.commandes;
}

public set commandes(value: Array<Commande>) {
  this.commadeService.commandes = value;
}

}
