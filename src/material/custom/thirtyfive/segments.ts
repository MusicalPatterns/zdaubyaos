import { Scale, Segment } from '@musical-patterns/material'
import { as, Intensity, Pitch, Thunk } from '@musical-patterns/utilities'
import { computeSegment } from '../../segment'
import { ThirtyfiveContourWholes, ThirtyfiveSegments } from './types'
import { thunkThirtyfiveContourWholes } from './wholes'

const thunkThirtyfiveSegments: Thunk<ThirtyfiveSegments> =
    (): ThirtyfiveSegments => {
        const contourWholes: ThirtyfiveContourWholes = thunkThirtyfiveContourWholes()

        const thirtyfiveSegment: Segment = computeSegment(
            [
                contourWholes.thirtyfiveZdaub,
                contourWholes.thirtyfiveYaosAccidentInspired,
                contourWholes.thirtyfiveYaosBass,
            ],
            [
                { intensityScalar: as.NormalScalar<Intensity>(0.66) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(1) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(5), intensityScalar: as.NormalScalar<Intensity>(1) },
            ],
        )

        return {
            thirtyfiveSegment,
        }
    }

export {
    thunkThirtyfiveSegments,
}
