let url = 'https://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
let request = require('request');
let iconv = require('iconv-lite');
let cheerio = require('cheerio');
//告诉request我不需要你帮我把响应体的buffer二进制转成字符串
request({url,encoding:null}, (err, response, body) => {
    //把一个GBK的buffer转成一个utf8字符串
    iconv.decode(body, 'gbk') //解码
    let $ = cheerio.load(body)//root
    let movies = [];
    $('div.c-single-text-ellipsis').each(function (index, item) {
        //$(this)转成jquery对象
        movies.push({ title: $(this).text() }) 
    })
    console.log(movies)
})//前后端分离，服务端渲染，ssr渲染，拿到html内容，提取内容

{/* <a data-v-78403b6b="" href="/post/7099702781094674468" target="_blank" rel="" title="持续创作，加速成长，6月更文活动来啦！｜ 掘金·日新计划" class="title">持续创作，加速成长，6月更文活动来啦！｜ 掘金·日新计划</a> */}