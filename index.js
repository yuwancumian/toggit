#!/usr/bin/env node
const path = require("path");
const fs = require("fs-extra");

const cac = require("cac");
const cli = cac();

const chalk = require("chalk");

const defaultCommand = cli.command(
    "*",
    "toggle file",
    (input,flags) => {
        const file = input[0];
        const sourceFile = path.resolve(__dirname, file) 
        const toggleFile = path.resolve(__dirname, ".tmp/" + file)
        const distBack = path.resolve(__dirname, ".tmp/" + file + ".bak")
        fs.copySync(sourceFile,distBack)
        fs.copySync(toggleFile,sourceFile)
        fs.copySync(distBack,toggleFile)
        console.log(chalk.green("Toggle success!"))
    }
)

cli.parse()
