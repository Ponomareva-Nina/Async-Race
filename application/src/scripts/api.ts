import { BaseComponent, baseUrl } from "./base_components";
import { CarContainer } from "./car";
import { carImage } from "./carImage";
import { WinnersPage, WinnerRow } from "./winners";

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
    id: number;
    wins: number;
    time: number;
  };

 export async function getCars(root: HTMLElement) {
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

  export async function getWinners(root: HTMLElement) {
    fetch(`${baseUrl}/winners`)
    .then(response => response.json())
    .then (data => {
      if(data) {
       data.forEach(async (item: winner, index: number) => {
        let number = index + 1;
        let id = item.id;
        let color = await getCarById(id).then(car => {return car.color});
        let image = carImage(color);
        let car = await getCarById(id).then(car => {return car.name});  //ф-ция для поиска модели машины по id
        let wins = item.wins;
        let time = item.time; 
        new WinnerRow(root, number, image, car, wins, time);
       })
      }
    });
  }

export async function getCarById(id: number) {
  let response = await fetch(`${baseUrl}/garage/${id}`);
  let car = await response.json();

  return car;
}