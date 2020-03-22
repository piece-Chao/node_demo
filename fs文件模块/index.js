const fs = require('fs');
// 文件夹操作
// fs.mkdir('demo01', (err) => {  // 异步创建文件夹
//     console.log(err)
// });

// try {
//     fs.mkdirSync('demo02');  // 同步创建文件夹
// }catch (err) {
//     console.log(err);
// }

// fs.rmdir('demo01', (err) => {  // 异步删除文件夹
//     console.log(err)
// })

// try {
//     fs.rmdirSync('demo02')  // 同步删除文件夹
// } catch (err) {
//     console.log(err)
// }

// fs.readdir('demo01', (err, data) => { // 异步读取文件夹里的内容
//     console.log(err)
//     console.log(data)
// });

// try {
//     let data = fs.readdirSync('demo01') // 同步读取文件夹的内容
//     console.log(data)
// } catch (err) {
//     console.log(err)
// }

// fs.rename('demo01', 'demo02', (err) => { // 异步修改文件夹名称
//     console.log(err)
// })

// try {
//     fs.renameSync('demo02', 'demo01')  // 同步修改文件夹名称
// } catch (err) {
//     console.log(err)
// }


// 文件操作

// fs.writeFile('./demo01/file02.txt', '创建的第一个文件1', 'utf8', (err) => { // 异步生成文件（内容覆盖）
//     console.log(err)
// });

// try {
//     fs.writeFileSync('file01.txt', '创建的第一个文件2', 'utf8'); // 同步生成文件（内容覆盖）
// } catch (err) {
//     console.log(err)
// }

// fs.appendFile('file01.txt', '创建的第一个文件3', 'utf8', (err) => { // 异步生成文件（内容追加）
//     console.log(err)
// });

// try {
//     fs.appendFileSync('file01.txt', '创建的第一个文件4', 'utf8'); // 同步生成文件（内容追加） 
// } catch (err) {
//     console.log(err);
// }

// fs.readFile('file01.txt', 'utf8', (err, data) => { // 异步读取文件内容
//     console.log(err)
//     console.log(data)
// })

// try {
//     let data = fs.readFileSync('file01.txt', 'utf8') // 同步读取文件内容
//     console.log(data)
// } catch (err) {
//     console.log(err)
// }


// fs.unlink('file01.txt', (err) => { // 异步删除文件
//     console.log(err)
// });

// try {
//     fs.unlinkSync('file01.txt') // 同步删除文件
// } catch (err) {
//     console.log(err)
// }

// fs.stat('demo01', (err, data) => { // 判断文件类型
//     console.log(err)
//     console.log(data.isDirectory())
//     console.log(data.isFile())
// })

// function readAllDir (path, listFile) {  // 获取所有文件
//     try {
//         return new Promise((resolve) => {
//             let list = fs.readdirSync(path)
//             if (list.length > 0) {
//                 list.forEach((item) => {
//                     let stats = fs.statSync(path + '/' + item)
//                     if (stats.isDirectory()) {
//                         readAllDir(path + '/' + item, listFile)
//                     } else if (stats.isFile()) {
//                         listFile.push(item)
//                     }
//                 })
//                 resolve(listFile)
//             }
//         })
//     } catch (err) {
//         return
//     }
// }

// readAllDir('demo01', []).then((data) => {
//     console.log(data)
// })
