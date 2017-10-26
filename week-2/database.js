const fs = require('fs');

exports.save = (people) => {
    fs.writeFileSync('./data.json', JSON.stringify(people));
}

exports.load = () => {
    return JSON.parse(fs.readFileSync('./data.json', 'utf8'));
}
