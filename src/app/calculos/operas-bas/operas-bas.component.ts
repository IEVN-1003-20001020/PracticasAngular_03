import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {


  num1:string='';
  num2:string='';
  resultado:number=0;
  radio1:string='';

  
  
  calcular(){

    switch (this.radio1) {


      case 'suma':
        this.resultado=parseInt(this.num1) + parseInt(this.num2)
        break;
      case 'resta':
        this.resultado=parseInt(this.num1) - parseInt(this.num2)
        break;
      case 'mult':
        this.resultado=parseInt(this.num1) * parseInt(this.num2)
        break;
      case 'divid':
        this.resultado=parseInt(this.num1) / parseInt(this.num2)
        break;
        
      default:
        console.log('holi crayoli');
        
        break;
    }

    

  }


}


