import { Component } from '@angular/core';

@Component({
  selector: 'app-potencias',
  templateUrl: './potencias.component.html',
  styleUrls: ['./potencias.component.css']
})


export class PotenciasComponent {
  num1: string = '';
  num2: string = '';
  resultado: number = 0;
  resultadoMsg: string = '';

  calcular(): void {
    const num1Numero = parseInt(this.num1);
    const num2Numero = parseInt(this.num2);

    if (!isNaN(num1Numero) && !isNaN(num2Numero)) {
      this.resultado = num1Numero * num2Numero;
      const proceso = this.opera(num1Numero, num2Numero);
      this.resultadoMsg = `${proceso.join(' + ')} =  ${this.resultado}`;
    } else {
      console.log('Los numeros no son validos');
      this.resultadoMsg = '';
    }
  }

  opera(num1: number, num2: number): number[] {
    const proceso: number[] = [];

    for (let i = 1; i <= num2; i++) {
      proceso.push(num1);
    }

    return proceso;
  }
}