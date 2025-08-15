const nome = 'Duda Amon';

function geradorDeNickname(nome) {

    let nickname = nome.replace(" ", "");
    nickname = nickname.toLowerCase();

    if (nickname.length > 12) {
        nickname = nickname.slice(0, 12);
    }
    nickname = "@" + nickname;
    return nickname;
}

console.log(geradorDeNickname(nome));