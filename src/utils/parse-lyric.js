// 用正则表达式对时间进行匹配，正则表达式javascript知识
// 正则表达式 = /规则/;
// []需要用转义字符，即需写成\[\],符号点.同理
// 正则表达式返回的结果是一个数组
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;


// replace也是js基础，替换字符串
export function parseLyric(lyric) {
    const lyricLines = lyric.split("\n");

    const lyrics = [];
    for (let line of lyricLines) {
        if (line) {
            const result = parseExp.exec(line);
            if (!result) continue;

            const time1 = result[1] * 60 * 1000;//分钟转化为毫秒
            const time2 = result[2] * 1000;//秒钟转化为毫秒
            const time3 = result[3].length === 3 ? result[3] * 1 : result[3] * 10;
            const time = time1 + time2 + time3;
            // console.log("time", time);

            const content = line.replace(parseExp, "").trim();//trim()可以去除字符串左右两边的空格

            const lineObj = { time, content };
            // console.log("时间和内容", lineObj);

            lyrics.push(lineObj);
            // console.log("lyrics", lyrics);
        }
    }
    return lyrics;
}