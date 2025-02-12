const syllabe_to_kana: {[syllabe:string]: string} = {
    "a": "あ",
    "i": "い",
    "u": "う",
    "e": "え",
    "o": "お",
    "ka": "か",
    "ki": "き",
    "ku": "く",
    "ke": "け",
    "ko": "こ",
    "sa" : "さ",
    // ...
    "ni" : "に",
    // ...
    "chi" : "ち",
    // ...
    "wa" : "わ",
    // ...
    "n" : "ん",
}

export function translate(x: string): string {
    function find_next_syllable(s: string): string | null {
        for(let syllabe in syllabe_to_kana) {      
            if(s.startsWith(syllabe)) return syllabe;
        }
        return null;
    }

    let translated = '';
    x = x.toLowerCase();
    while(x.length > 0) {
        const syllabe = find_next_syllable(x);
        if(!syllabe) {
            x = x.substring(1);
            continue;
        }
        const kana = syllabe_to_kana[syllabe];
        translated += kana;
        x = x.substring(syllabe.length);
    }
    
    return translated;
}


console.log('Konnichiwa :', translate('konnichiwa'));
