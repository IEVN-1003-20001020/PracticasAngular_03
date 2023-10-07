import { Component } from '@angular/core';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {

  numBol: number = 0;
  cantComp: number = 0;
  descAdi: number = 0;
  totalFinal: number = 0;
  tarjetas: string = '';
  descTarj: number = 0;
  nombre: string = '';
  total1: number = 0;
  precioBol: number = 12;
  descuentoIni: number = 0;
  descuentotarjeta: number = 0;
  descuentoTotal: number = 0;
  Nfolio:number=0;



  MaxBol(): void {

    const maxBol = this.cantComp * 7;

    if (this.numBol >maxBol){
      alert('El máximo de compra de boletos por persona es de: ' + maxBol);
      this.numBol=1;
    }
  }

  folio(){
    this.Nfolio = Math.floor(Math.random() * (10000000));
      console.log(this.Nfolio);

  }




  opera(): number {
    this.total1 = this.numBol * this.precioBol;
    if (this.numBol >= 5) {
      this.descAdi = 15;
      this.descuentoIni = this.total1 * (this.descAdi / 100);
      this.descuentoTotal = this.total1 - this.descuentoIni;
      if (this.tarjetas == '1') {
        this.descTarj = 10;
        this.descuentotarjeta = this.descuentoTotal * (this.descTarj / 100);
        this.totalFinal = this.descuentoTotal - this.descuentotarjeta;
      }
      else
        this.totalFinal = this.descuentoTotal;
      return this.totalFinal;
    } else if (this.numBol >= 3) {
      this.descAdi = 10;
      this.descuentoIni = this.total1 * (this.descAdi / 100);
      this.descuentoTotal = this.total1 - this.descuentoIni;
      if (this.tarjetas == '1') {
        this.descTarj = 10;
        this.descuentotarjeta = this.descuentoTotal * (this.descTarj / 100);
        this.totalFinal = this.descuentoTotal - this.descuentotarjeta;
      }
      else
        this.totalFinal = this.descuentoTotal;
      return this.totalFinal;
    } else if (this.numBol <= 2) {
      if (this.tarjetas == '1') {
        this.descTarj = 10;
        this.descuentotarjeta = this.total1 * (this.descTarj / 100);
        this.totalFinal = this.total1 - this.descuentotarjeta;
      }
      else
        this.totalFinal = this.total1;
      return this.totalFinal;
    }
    const neto = this.totalFinal;
    return neto;

  }
  recargar() {
    window.location.reload();
  }
}








// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-cinepolis',
//   templateUrl: './cinepolis.component.html',
//   styleUrls: ['./cinepolis.component.css']
// })
// export class CinepolisComponent {


//   nombre: string = '';
//   Total: number = 1;
//   compradores:number = 0;
//   mensaje:string='';
//   Tarjeta: string = 'no';
//   descuento: number = 0;
//   descuentoTarjeta: number = 0;
//   descuentoTotal: boolean = false;
//   Error: boolean = false;
//   Nfolio:number=0;

//   calcular(){
//     if(this.compradores <= this.Total * 7){
//       this.Opera();
//     }
//     else if(this.compradores > this.Total * 7){
//  this.mensaje = "Hay más boletos";
//  this.Error = true;
//  this.descuentoTotal = false;
//     }
//   }

//   Opera() {
//     if (this.Total >= 5) {
//       this.descuento = 15;
//     } else if (this.Total >= 3) {
//       this.descuento = 10;
//     } else {
//       this.descuento = 0;
//     }

//     if (this.Tarjeta === 'si') {
//       this.descuentoTarjeta = 10;
//     } else {
//       this.descuentoTarjeta = 0;
//     }

//     this.descuentoTotal = true;
//     this.Error = false;
//   }

//   Precio(): number {
//     const precioBoleto = 12;
//     const precioTotal = this.Total * precioBoleto;
//     const descuentoTotal = precioTotal * (this.descuento / 100 + this.descuentoTarjeta  / 100);
//     return precioTotal - descuentoTotal;
// }



// Reiniciar() {
//   window.location.reload();
// }

// folio(){
//   this.Nfolio = Math.floor(Math.random() * 1000000);
//     console.log(this.Nfolio);
// }


// }