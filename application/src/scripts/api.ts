import { BaseComponent, baseUrl } from "./base_components";
import { CarContainer } from "./car";
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
       data.forEach((item: winner, index: number) => {
        let number = index;
        let car = 'carModel';  //ф-ция для поиска модели машины по id
        let wins = item.wins;
        let time = item.time; 
        new WinnerRow(root, number, car, wins, time);
       })
      }
    });
  }
