#!/usr/bin/env node

import { roll } from "../lib/roll.js"
import minimist from "minimist"

const args = minimist(process.argv.slice(2));

var results = roll(args.sides, args.dice, args.rolls);
let text = results.toString();

console.log("results: " + "[" + text + "]");