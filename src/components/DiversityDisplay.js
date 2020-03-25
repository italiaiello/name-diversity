import React from 'react';

const DiversityDisplay = props => {

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
            <p>{`Fullname: ${capFirstLetterOfEachWord(props.nameResult.fullname)}`}</p>
            <p>{`Gender: ${capFirstLetterOfEachWord(props.nameResult.gender)}`}</p>
            <p>{`Gender Probability: ${configPercentage(props.nameResult['gender probability'])}`}</p>
            <p>{`Ethinicity: ${capFirstLetterOfEachWord(props.nameResult.ethnicity)}`}</p>
            <p>{`Ethinicity Probability: ${configPercentage(props.nameResult['ethnicity probability'])}`}</p>
        </article>
    )
}

export default DiversityDisplay;