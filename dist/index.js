#!/usr/bin/env node
import * as fs from 'fs';
import * as path from 'path';
import inquirer from 'inquirer';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const currentDirectory = process.cwd();

const QUESTIONS = [{
    name: 'name',
    type: 'input',
    message: 'Project name:'
}];

inquirer.prompt(QUESTIONS)
.then(answers => {
    const projectName = answers['name'];
    const templatePath = path.join(__dirname, 'template');
    const tartgetPath = path.join(currentDirectory, projectName);

    if (!createProject(tartgetPath)) {
        return;
    }

    createDirectoryContents(templatePath, projectName);

    console.log(chalk.green(`Project created succesfully!`));
    console.log('');
    console.log(chalk.blueBright(`Next steps: `));
    console.log('');
    console.log(`cd ${projectName}`);
    console.log('npm install');
    console.log('npm run dev');
    console.log('');
    console.log(chalk.magenta('Happy coding!'));
});

function createProject(projectPath) {
    if (fs.existsSync(projectPath)) {
        console.log(chalk.red(`Folder ${projectPath} exists. Delete or use another name.`));
        return false;
    }    fs.mkdirSync(projectPath);
    
    return true;
}

const SKIP_FILES = ['node_modules'];

function createDirectoryContents(templatePath, projectName) {
    const filesToCreate = fs.readdirSync(templatePath);
    filesToCreate.forEach(file => {
        const origFilePath = path.join(templatePath, file);
        
        const stats = fs.statSync(origFilePath);
    
        if (SKIP_FILES.indexOf(file) > -1) return;
        
        if (stats.isFile()) {
            let contents = fs.readFileSync(origFilePath, 'utf8');
            const writePath = path.join(currentDirectory, projectName, file);
            fs.writeFileSync(writePath, contents, 'utf8');
        } else if (stats.isDirectory()) {
            fs.mkdirSync(path.join(currentDirectory, projectName, file));
            createDirectoryContents(path.join(templatePath, file), path.join(projectName, file));
        }
    });
}