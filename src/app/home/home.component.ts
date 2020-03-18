import { Component, OnInit } from '@angular/core';
import { userInfo } from 'os';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  welcome : string;
  games: { game: string; platform: string; release: string; }[];
 

  constructor() {
    this.welcome = "Welcome Gamers"

    this.games = [{
        game : "Deus Ex: Mankind Divided",
        platform: "	Xbox One, PS4, PC",
        release : "August 23"
    },
    {
        game : "Hue",
        platform: "	Xbox One, PS4, Vita, PC",
        release : "August 23"
    },
    {
        game : "The Huntsman: Winter's Curse",
        platform: "PS4",
        release : "August 23"
    },
    {
        game : "The Huntsman: Winter's Curse",
        platform: "PS4",
        release : "August 23"
    },
{
        game : "Deus Ex: Mankind Divided",
        platform: "	Xbox One, PS4, PC",
        release : "August 23"
    },
    {
        game : "Hue",
        platform: "	Xbox One, PS4, Vita, PC",
        release : "August 23"
    },
    {
        game : "The Huntsman: Winter's Curse",
        platform: "PS4",
        release : "August 23"
    },
    {
        game : "The Huntsman: Winter's Curse",
        platform: "PS4",
        release : "August 23"
    },
{
        game : "Deus Ex: Mankind Divided",
        platform: "	Xbox One, PS4, PC",
        release : "August 23"
    },
    {
        game : "Hue",
        platform: "	Xbox One, PS4, Vita, PC",
        release : "August 23"
    },
    {
        game : "The Huntsman: Winter's Curse",
        platform: "PS4",
        release : "August 23"
    },
    {
        game : "The Huntsman: Winter's Curse",
        platform: "PS4",
        release : "August 23"
    },
{
        game : "Deus Ex: Mankind Divided",
        platform: "	Xbox One, PS4, PC",
        release : "August 23"
    },
    {
        game : "Hue",
        platform: "	Xbox One, PS4, Vita, PC",
        release : "August 23"
    },
    {
        game : "The Huntsman: Winter's Curse",
        platform: "PS4",
        release : "August 23"
    },
    {
        game : "The Huntsman: Winter's Curse",
        platform: "PS4",
        release : "August 23"
    },
{
        game : "Deus Ex: Mankind Divided",
        platform: "	Xbox One, PS4, PC",
        release : "August 23"
    },
    {
        game : "Hue",
        platform: "	Xbox One, PS4, Vita, PC",
        release : "August 23"
    },
    {
        game : "The Huntsman: Winter's Curse",
        platform: "PS4",
        release : "August 23"
    },
    {
        game : "The Huntsman: Winter's Curse",
        platform: "PS4",
        release : "August 23"
    }]

   }
 


  ngOnInit() {
  }

    }


// input : india
// output : iinda

// input : fourhouses
// output : ssoouurhef

// input : tree
// output : eert



