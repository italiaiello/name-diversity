import React from 'react';

const DiversityDisplay = ({ nameResult }) => {

    const capFirstLetterOfEachWord = (words) => {
        const wordsToCapitalise = words.split(' ')
                                        .map(word => `${word.charAt(0).toUpperCase()}${word.substring(1)}`)
                                        .join(' ')
        return wordsToCapitalise
    }

    const configPercentage = (probability) => {
        const probabilityToConfig = probability.toString().split('.')
        if (probabilityToConfig[1].length === 1) {
            return `${probabilityToConfig[1]}0%`
        }

        return `${probabilityToConfig[1]}%`
    }

    return (
        <article className="diversityInfo">
            <p>{`Fullname: ${capFirstLetterOfEachWord(nameResult.fullname)}`}</p>
            <p>{`Gender: ${capFirstLetterOfEachWord(nameResult.gender)}`}</p>
            <p>{`Gender Probability: ${configPercentage(nameResult['gender probability'])}`}</p>
            <p>{`Ethinicity: ${capFirstLetterOfEachWord(nameResult.ethnicity)}`}</p>
            <p>{`Ethinicity Probability: ${configPercentage(nameResult['ethnicity probability'])}`}</p>
        </article>
    )
}

export default DiversityDisplay;