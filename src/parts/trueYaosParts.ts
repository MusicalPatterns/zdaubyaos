// tslint:disable:max-file-line-count align

import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import getYaosNotes from '../notes/getYaosNotes'
import { Part } from '../types'

const trueYaosUmowchuwowiestSpringToSummerPart: Part = sequence([
    repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'spring',
    }), 4),
    repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'spring',
    }), 1),
    repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'spring',
    }), 1),
    repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'spring',
    }), 1),
    repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'spring',
    }), 1),
    repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'twentyfour',
        rendering: 'summer',
    }), 4),
])

const trueYaosUmowchuwowiestSummerToSpringPart: Part = sequence([
    repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'summer',
    }), 4),
    repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'summer',
    }), 1),
    repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'summer',
    }), 1),
    repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'summer',
    }), 1),
    repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'summer',
    }), 1),
    repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'twentyfour',
        rendering: 'spring',
    }), 4),
])

const trueYaosInaidjiyaiouzdSummerToSpringPart: Part = sequence([
    repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'summer',
    }), 4),
    repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'summer',
    }), 1),
    repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'summer',
    }), 1),
    repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'summer',
    }), 1),
    repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'summer',
    }), 1),
    repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'spring',
    }), 4),
])

const trueYaosInaidjiyaiouzdSummerToSpringComplementyPart: Part = sequence([
    repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'springySummer',
    }), 4),
    repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'springySummer',
    }), 1),
    repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'springySummer',
    }), 1),
    repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'springySummer',
    }), 1),
    repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'springySummer',
    }), 1),
    repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'summerySpring',
    }), 4),
])

const trueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart: Part = sequence([
    repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'fifteen',
        rendering: 'fall',
    }), 4),
    repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'fall',
    }), 1),
    repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'fall',
    }), 1),
    repeatCall(() => getYaosNotes({
        blockresolution: 'highregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'fall',
    }), 1),
    repeatCall(() => getYaosNotes({
        blockresolution: 'lowregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'fifteen',
        rendering: 'fall',
    }), 1),
    repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'fall',
    }), 1),
    repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'twentyfour',
        rendering: 'fall',
    }), 1),
    repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'umowchuwowiest',
        duration: 'twentyfour',
        rendering: 'fall',
    }), 1),
    repeatCall(() => getYaosNotes({
        blockresolution: 'midirregular',
        blockstrategy: 'inaidjiyaiouzd',
        duration: 'twentyfour',
        rendering: 'fall',
    }), 1),
])

export {
    trueYaosUmowchuwowiestSpringToSummerPart,
    trueYaosUmowchuwowiestSummerToSpringPart,
    trueYaosInaidjiyaiouzdSummerToSpringPart,
    trueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
    trueYaosInaidjiyaiouzdSummerToSpringComplementyPart,
}
