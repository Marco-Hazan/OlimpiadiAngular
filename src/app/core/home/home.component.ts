import { Component, OnInit } from '@angular/core';
import { Atleta } from 'src/app/model/Atleta';
import { AtletaRepositoryService } from 'src/app/model/atleta-repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private atletaService: AtletaRepositoryService) { }

  nazioneSelezionata:string = "";

  getAtleti(): Atleta[]{
    return this.atletaService.getAllAtleti(this.nazioneSelezionata);
  }

  getCategorie(): string[]{
    return this.atletaService.getCategorie();
  }

  getNazioni(): string[]{
    return this.atletaService.getNazioni();
  }





  getFoto(nome:string):string{
    switch(nome){
      case "Federica Pellegrini":
        return "Pellegrini.png";
      case "Usain Bolt":
        return "Bolt.jpg";
      case "Iuri Chechi":
        return "Chechi.webp";
      case "Carl Lewis":
        return "Lewis.jpg";
      default:
        return "";
    }
  }

  ngOnInit(): void {
  }

}
