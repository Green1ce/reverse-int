module.exports = function reverse (n) {
    if (n < 0) n *= -1;
    let str = n.toString();
    let answer = [];
    for (let i = 0; i < str.length; i++) {
        answer.unshift(str[i]);
    }
    answer = answer.join('');
    return answer;
}
