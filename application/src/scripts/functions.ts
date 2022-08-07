import { BaseComponent, baseUrl } from "./base_components";
import { CarContainer } from "./car";

  export type car = {
    id?: number;
    name: string;
    color: string;
  };
  
  export type carStatus = {
    velocity: number;
    distance: number;
  };
  
  export type winner = {
    id?: number;
    wins: number;
    time: number;
  };

 export function getCars(root: HTMLElement) {
    fetch(`${baseUrl}/garage`)
      .then(response => response.json())
      .then(data => {
        if(data) {
         data.forEach((item: car) => {
          let name: string = item.name;
          let color: string = item.color;
          new CarContainer(root, name, color);
         })
        }
      })
    }
 
