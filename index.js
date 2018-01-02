#!/usr/bin/env node
const path = require("path");
const fs = require("fs-extra");
const pkgDir = require("pkg-dir");
const cac = require("cac");
const cli = cac();
const chalk = require("chalk");

const defaultCommand = cli.command(
    "*",
    "toggle file",
    (input,flags) => {
        const file = input[0].split("/").pop();
        const sourceFile = path.resolve(pkgDir.sync(), input[0]); 
        const toggleFile = path.resolve(pkgDir.sync(), ".tmp/" + file);
        const distBack = path.resolve(pkgDir.sync(), ".tmp/" + file + ".bak");
        fs.copySync(sourceFile,distBack);
        fs.copySync(toggleFile,sourceFile);
        fs.copySync(distBack,toggleFile);
        console.log(chalk.green("Toggle success!"))
    }
)

cli.parse()
