
var fs = require('fs');
var request = require('request');

function downloadFile(file_url, targetPath, cb) {
    var received_bytes = 0;
    var total_bytes = 0;
    var  beginData  =  new  Date(). getTime()

    var req = request({
        method: 'GET',
        uri:file_url
    });

    var  out  =  fs. createWriteStream(`./music/${targetPath. replace(new  RegExp(  '/'  ,  "g"  ),'')}.mp3`);
    req. pipe(out);

    req. on('response',  data => {
        total_bytes  =  parseInt(data. headers['content-length']);
    });

    req. on('data',  chunk => {
        received_bytes  +=  chunk. length;
    });

    req. on('end', _ => {
        var  endData  =  new  Date(). getTime()
        var elaTime = (endData - beginData) / 1000
        console. log("\n\n下载成功 | 耗时: "  +  elaTime  +  "s",  (total_bytes  /  1000000). toFixed(1)  +  'm |' ,  targetPath  +  '.mp3');
        cb()
    });
}



var i = 0;

function recursion() {
    var  name  =  data[i]. ar[0]. name
    if  (data[i]. ar. length  >  1)
        data[i]. ar. forEach((item,  index) => {
            if (index != 0)
                name  =  name  +  ','  +  item. name
        });
    name  =  name  +  ' - '  +  data[i]. name

    downloadFile("https://music.163.com/song/media/outer/url?id="  +  data[i]. id  +  '.mp3',  name, () => {
        i++
        if  (i  <=  data. length)
            recursion()
    })
}
recursion()
downloadFile("https://music.163.com/song/media/outer/url?id=386538.mp3", 'test', _ => {}) //test