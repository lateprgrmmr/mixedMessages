function generateRandNum(num) {
    return Math.floor(Math.random() * num);
}

const messageObj = {
    signName: ['Earth', 'Wind', 'Fire', 'Water'],
    fortuneDetail: ['growing your powers', 'weakening thine forces', 'fermenting your entrails', 'boiling mad'],
    advice: ['make a life', 'take a life', 'join a cult', 'burn a village', 'steal someone\'s valuables'],
}

let personalMessage = [];

for (let prop in messageObj) {
    let optionIdx = generateRandNum(messageObj[prop].length);

    switch (prop) {
        case 'signName':
            personalMessage.push(`Today, you\'re sign seems to be ${messageObj[prop][optionIdx]}...`)
            break
        case 'fortuneDetail':
            personalMessage.push(`It appears, based on nothing really, that you are ${messageObj[prop][optionIdx]}... How\'s that make you feel?`)
            break
        case advice:
            personalMessage.push(`So... the best thing you can do at the moment is ${messageObj[prop][optionIdx]}... :-/`)
            break
        default:
            personalMessage.push('Things can only get worse...')
    }
}

function formatMessage(mess) {
    const formattedMess = personalMessage.join('\n')
    console.log(formattedMess)
}

formatMessage(personalMessage);