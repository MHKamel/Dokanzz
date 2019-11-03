import { MarketService } from './market.service';

export class product{
    id:number;
    code:string;
    name:string;
    price:number;
    Categoryid:number

    constructor(id:number,code:string,name:string,price:number,Categoryid:number){
this.code=code;
this.name=name;
this.price=price
this.id=id;
this.Categoryid=Categoryid;

    }
}