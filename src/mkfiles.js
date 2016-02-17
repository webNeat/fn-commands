import program from 'commander';
import fs from 'fs';

let filesMaker = {
	fromFile: function(filename) {
		console.log('Reading "' + filename + '" ...');
		fs.readFile(filename, 'utf8', function(err, content) {
			if (err) throw err;
			
			content.split("\n")
				.map(function(line){
					let level = 0,
						type = 'file';
					
					while(line.charAt(level) === "\t")
						level ++;
					line = line.trim();
					if(line.endsWith("/")) {
						type = 'dir';
						line = line.substring(0, line.length - 1);
					}

					return {
						type: type,
						level: level,
						name: line
					};
				})
				.map(function(item, index, list) {
					if (item.level > 0) {
						let i = index;
						while (list[i].level >= item.level) 
							i --;
						list[index].name = list[i].name + '/' + list[index].name;
					}
					
					return {
						type: item.type,
						path: list[index].name
					};
				})
				.map(function(file) {
					switch(file.type) {
						case 'file':
							if (!fs.existsSync(file.path)){
								fs.closeSync(fs.openSync(file.path, 'w'));
							}
						break;
						case 'dir':
							if (!fs.existsSync(file.path)){
							    fs.mkdirSync(file.path);
							}
						break;
						default:
							console.error('Unknown file type "' + file.type + '"');
					}
				});	
		});
	}
};

let main = () => {
	program
		.version('0.0.1')
		.arguments('<filename>')
		.action(filesMaker.fromFile);
	program.parse(process.argv);
}

module.exports = main;