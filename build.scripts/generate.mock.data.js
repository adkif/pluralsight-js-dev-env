/* This script generates mock data for local development.
 */

/* eslint-disable no-console */
import jsf from 'json-schema-faker';
import { schema } from './mock.data.schema';
import fs from 'fs';
import chalk from 'chalk';
import faker from "faker"

jsf.extend("faker", () => {
    return faker
});

const outputFile = './src/api/db.json';
jsf.resolve(schema).then(result => {
    fs.writeFile(outputFile, JSON.stringify(result, null, 2), err => {
        if (err) {
            return (console.log(chalk.red(err)));
        } else {
            console.log(chalk.green(`Mock Data Generated Here: ${ outputFile }`));
        }
    });
});