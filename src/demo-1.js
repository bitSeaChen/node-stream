const fs = require("fs");
const stream = fs.createWriteStream("./big_file.txt");


for (let i = 0; i < 10000; i++) {
	stream.write(`这是第${i}行内容，还有很多内容\n`);
}

stream.end();
