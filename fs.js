// file inside directory using fs make function
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function createFile(fileName, content, folderPath = __dirname) {

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    const filePath = path.join(folderPath, fileName);
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error('Error creating file:', err);
        } else {
            console.log('File created successfully:', fileName);
            console.log('File location:', filePath);
        }
    });
}

function removeFileOrFolder(pathToRemove) {
    if (fs.existsSync(pathToRemove)) {
        if (fs.lstatSync(pathToRemove).isDirectory()) {
            fs.rmSync(pathToRemove, { recursive: true, force: true });
            console.log('Folder removed successfully:', pathToRemove);
        } else {
            fs.unlinkSync(pathToRemove);
            console.log('File removed successfully:', pathToRemove);
        }
    } else {
        console.log('Path does not exist:', pathToRemove);
    }
}

function removeAllInCurrentDirectory() {
    const currentDir = __dirname;
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
        const itemPath = path.join(currentDir, item);
        if (item !== path.basename(__filename)) { // Skip the current script file
            removeFileOrFolder(itemPath);
        }
    });
    console.log('All files and folders in current directory have been removed');
}

// Main menu function
function showMenu() {
    rl.question('What would you like to do? (1: Create file, 2: Remove file/folder, 3: Remove all in current directory): ', (choice) => {
        if (choice === '1') {
            rl.question('Enter file name: ', (fileName) => {
                rl.question('Enter file content: ', (content) => {
                    rl.question('Enter folder path (press enter for default): ', (folderPath) => {
                        const storePath = folderPath ? path.join(__dirname, folderPath) : __dirname;
                        createFile(fileName, content, storePath);
                        rl.close();
                    });
                });
            });
        } else if (choice === '2') {
            rl.question('Enter path to remove: ', (pathToRemove) => {
                const fullPath = path.join(__dirname, pathToRemove);
                removeFileOrFolder(fullPath);
                rl.close();
            });
        } else if (choice === '3') {
            rl.question('Are you sure you want to remove all files and folders? (yes/no): ', (answer) => {
                if (answer.toLowerCase() === 'yes') {
                    removeAllInCurrentDirectory();
                } else {
                    console.log('Operation cancelled');
                }
                rl.close();
            });
        } else {
            console.log('Invalid choice');
            rl.close();
        }
    });
}

// Start the program by showing menu
showMenu(); 
