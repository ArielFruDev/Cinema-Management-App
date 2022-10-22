const jFile = require('jsonfile')

const getData = () => {
    return new Promise((resolve, reject)=>{
        jFile.readFile('./Files/permissions.json', (err, data)=>{
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })  
}

const changeData = (newData) => {
    return new Promise((resolve, reject)=>{
        jFile.writeFile('./Files/permissions.json', newData, (err)=>{
            if(err) {
                reject(err);
            } else {
                const resp = jFile.readFile('./Files/permissions.json')
                resolve(resp)
            }
        })
    })
}


module.exports = {getData, changeData}