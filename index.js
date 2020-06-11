var fs = require("fs");
var inquirer = require("inquirer");
var axios = require("axios");

inquirer.prompt([
    {
        type: "input",
        message: "Enter Github username",
        name: "username",
    },

]).then(function ({ username }) {
    const url = `https://api.github.com/users/${username}`;
    axios.get(url).then((res) => {
        console.log(res.data);
        const profile = res.data.avatar_url;
        const email = res.data.email;
        // const repoNames = res.data.map((repo) => repo.name);
        // const repoNamesStr = repoNames.join("\n");
        // console.log(repoNames);
        // fs.writeFile("repos.txt", repoNamesStr, (err) => {
        //     if (err) throw err;
        //     console.log(`Saved ${repoNames.length} repos`);
        inquirer.prompt([
            {
                type: "input",
                message: "What is the name of your Project",
                name: "Title",
            },
            {
                type: "input",
                message: "Please write a short description of your project",
                name: "Description",
            },

            {
                type: "list",
                message: "What kind of license should your project have?",
                name: "License",
                choices: ["MIT", "Apache", "Freeware", "GNU General Public"],
            },
            {
                type: "input",
                message: "What command should be run to install dependencies",
                name: "Installation",
            },
        ]).then(function (response) {
            console.log(response);
            const title = response.Title;
            const description = response.Description;
            const license = response.License;
            const installation = response.Installation;
            const body = [description, license, installation];
            fs.writeFile("README.md", "# " + title + "\n\n", (err) => {
                if (err) throw err;
                console.log("README file created");
            });
            fs.appendFile("README.md", "## Badges" + "\n\n", (err) => {
                if (err) throw err;
                console.log("Added body to README");
            });
            fs.appendFile("README.md", "## Description" + "\n" + description + "\n\n", (err) => {
                if (err) throw err;
                console.log("Added body to README");
            });
            fs.appendFile("README.md", "## Table of Contents " + "\n\n", (err) => {
                if (err) throw err;
                console.log("Added body to README");
            });
            fs.appendFile("README.md", `[Questions](##Questions)` + "\n\n", (err) => {
                if (err) throw err;
                console.log("Added body to README");
            });
            fs.appendFile("README.md", `[Installation](##Installation)` + "\n\n", (err) => {
                if (err) throw err;
                console.log("Added body to README");
            });
            fs.appendFile("README.md", `[Usage](##Usage)` + "\n\n", (err) => {
                if (err) throw err;
                console.log("Added body to README");
            });
            fs.appendFile("README.md", `[License](##License)` + "\n\n", (err) => {
                if (err) throw err;
                console.log("Added body to README");
            });
            fs.appendFile("README.md", `[Contributing](##Contributing)` + "\n\n", (err) => {
                if (err) throw err;
                console.log("Added body to README");
            });
            fs.appendFile("README.md", `[Tests](##Tests)` + "\n\n", (err) => {
                if (err) throw err;
                console.log("Added body to README");
            });
            fs.appendFile("README.md", "## Installation" + "\n" + installation + "\n\n", (err) => {
                if (err) throw err;
                console.log("Added body to README");
            });
            fs.appendFile("README.md", "## Usage" + "\n\n", (err) => {
                if (err) throw err;
                console.log("Added body to README");
            });
            fs.appendFile("README.md", "## License" + "\n" + license + "\n\n", (err) => {
                if (err) throw err;
                console.log("Added body to README");
            });
            fs.appendFile("README.md", "## Contributing" + "\n\n", (err) => {
                if (err) throw err;
                console.log("Added body to README");
            });
            fs.appendFile("README.md", "## Tests" + "\n\n", (err) => {
                if (err) throw err;
                console.log("Added body to README");
            });
            fs.appendFile("README.md", "## Questions" + "\n\n", (err) => {
                if (err) throw err;
                console.log("Added body to README");
            });

            // <a name="Tests"></a>
            // fs.appendFile("README.md", "* " + array.forEach(element => {
            //     return element;
            //     console.log(element);
            // }), (err) => {
            //     if (err) throw err;
            //     console.log("Added body to README");
            // });
        });

    });
});
