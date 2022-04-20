
// the game
class Start {
    constructor() {
        this.playerName = 'Player'
        this.botName = 'COM'
        this.playerOption;
        this.winner = ''
    }

    get getBotOption() {
        return this.botOption
    }

    set setBotOption(optionbot) {
        this.botOption = optionbot
    }

    get getPlayerOption() {
        return this.playerOption
    }

    set setPlayerOption(option) {
        this.playerOption = option
    }

    botChoose() {
        const optionBot = ['batu', 'kertas', 'gunting'];
        const bot = optionBot[Math.floor(Math.random() * optionBot.length)];
        return bot;
    }

    winCalculation() {
        if (this.playerOption == 'batu' && this.botOption == 'kertas') {
            return this.winner = this.botName
        } else if (this.playerOption == 'batu' && this.botOption == 'gunting') {
            return this.winner = this.playerName
        } else if (this.playerOption == 'kertas' && this.botOption == 'batu') {
            return this.winner = this.playerName
        } else if (this.playerOption == 'kertas' && this.botOption == 'gunting') {
            return this.winner = this.botName
        } else if (this.playerOption == 'gunting' && this.botOption == 'batu') {
            return this.winner = this.botName
        } else if (this.playerOption == 'gunting' && this.botOption == 'kertas') {
            return this.winner = this.playerName
        } else {
            // let draw = 'Seri'
            return this.winner = 'seri'
        }
    }

    matchResult() {
        if (this.winner != 'seri') {
            return `${this.winner} WIN`
        } else {
            return 'DRAW'
        }
    }
}

function chooseOption(parameter) {
    const player = new Start();
    player.setPlayerOption = parameter;
    player.setBotOption = player.botChoose();
    player.winCalculation();
    // console.log('Anda Memilih', player.getPlayerOption);
    // console.log('Bot Memilih', player.getBotOption);
    // console.log('Hasil', player.winner);
    console.log('Hasil', player.matchResult());

    const inGame = document.getElementById('botSelect');
    inGame.textContent = `Computer Memilih : ${player.getBotOption}`;

    const resultMatch = document.getElementById('result');
    resultMatch.textContent = player.matchResult();

    


}

//reload halaman
const reload = document.getElementById('reload');
reload.location.reload();
