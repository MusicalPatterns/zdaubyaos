import { calculateTotalPitchDurationContourDuration, PitchDuration, pitchDurationRest } from '@musical-patterns/pattern'
import { ContourWhole, repeat, sequence, to } from '@musical-patterns/utilities'
import { buildThirtyfiveContourPieces } from './pieces'
import { ThirtyfiveContourPieces, ThirtyfiveContourWholes } from './types'

const buildThirtyfiveContourWholes: () => ThirtyfiveContourWholes =
    (): ThirtyfiveContourWholes => {
        const thirtyfiveContourPieces: ThirtyfiveContourPieces = buildThirtyfiveContourPieces()

        const thirtyfiveYaosBass: ContourWhole<PitchDuration> = to.ContourWhole(sequence([
            repeat(thirtyfiveContourPieces.yaosBass, to.Cardinal(30)),
        ]))

        const thirtyfiveYaosAccidentInspired: ContourWhole<PitchDuration> = to.ContourWhole(sequence([
            repeat(thirtyfiveContourPieces.yaosAccidentInspired, to.Cardinal(30)),
        ]))

        const thirtyfiveZdaub: ContourWhole<PitchDuration> = to.ContourWhole(sequence([
            pitchDurationRest(calculateTotalPitchDurationContourDuration(thirtyfiveContourPieces.zdaub)),
            repeat(thirtyfiveContourPieces.zdaub, to.Cardinal(2)),
            repeat(thirtyfiveContourPieces.zdaubOnlyWiggle, to.Cardinal(12)),
        ]))

        return {
            thirtyfiveYaosAccidentInspired,
            thirtyfiveYaosBass,
            thirtyfiveZdaub,
        }
    }

export {
    buildThirtyfiveContourWholes,
}