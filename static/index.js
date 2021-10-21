function encrypt() {
    let s = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    let str = document.getElementById("form").elements[0].value;
    let keyword = document.getElementById("form").elements[1].value;
    let key = "";
    let string = "";
    let p, k, e, d, t = 0;

    for (let i = 0; i < str.length; i++) {
        key += keyword[t];
        t++;
        if (t == keyword.length) {
            t = 0;
        }
    }
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (str[i] == s[j]) {
                p = j;
                break;
            }
        }
        for (let j = 0; j < s.length; j++) {
            if (key[i] == s[j]) {
                k = j;
                break;
            }
        }
        e = (p + k) % s.length;
        string += s[e];
    }
    document.getElementById("demo").value = string;
}

function decrypt() {
    let s = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    let str = document.getElementById("form").elements[0].value;
    let keyword = document.getElementById("form").elements[1].value;
    let key = "";
    let string = "";
    let p, k, e, d, t = 0;

    for (let i = 0; i < str.length; i++) {
        key += keyword[t];
        t++;
        if (t == keyword.length) {
            t = 0;
        }
    }
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (str[i] == s[j]) {
                p = j;
                break;
            }
        }
        for (let j = 0; j < s.length; j++) {
            if (key[i] == s[j]) {
                k = j;
                break;
            }
        }
        e = (p - k + s.length) % s.length;
        if(e<0){
            string += '�';
        }
        else{
            string += s[e];
        }
    }
    document.getElementById("demo").value = string;
}

function show(){
    if(document.getElementById('encrypt').checked){
        document.getElementById('dbutton').style.display = 'none';
        document.getElementById('ebutton').style.display = 'block';
    }
    else if(document.getElementById('decrypt').checked){
        document.getElementById('ebutton').style.display = 'none';
        document.getElementById('dbutton').style.display = 'block';
    }
}
