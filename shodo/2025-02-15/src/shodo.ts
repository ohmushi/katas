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
        while(s.length > 0) {
            for(let syllabe in syllabe_to_kana) {      
                if(s.startsWith(syllabe)) return syllabe;
            }
            s = s.substring(1);
        }
        return null;
    }

    let translated = '';
    x = x.toLowerCase();
    let syllabe = '';
    while(syllabe = find_next_syllable(x)) {
        translated += syllabe_to_kana[syllabe];
        x = x.substring(syllabe.length);
    }
    return translated;
}


console.log('Konnichiwa :', translate('konnichiwa'));
