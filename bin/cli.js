#!/usr/bin/env node

import { roll } from "../lib/roll.js"
import minimist from "minimist"

const args = minimist(process.argv.slice(2));

let sides = args.sides;
let dice = args.dice;
let rolls = args.rolls;

var results = roll(sides, dice, rolls);

console.log(JSON.stringify(results))  