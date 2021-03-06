import { Scale, Segment } from '@musical-patterns/material'
import { as, Intensity, negative, Pitch, Scalar, Thunk } from '@musical-patterns/utilities'
import { computeSegment } from '../../segment'
import { BreatherContourWholes, BreatherSegments } from './types'
import { thunkBreatherContourWholes } from './wholes'

const thunkBreatherSegments: Thunk<BreatherSegments> =
    (): BreatherSegments => {
        const breatherContourWholes: BreatherContourWholes = thunkBreatherContourWholes()

        const spring: Segment = computeSegment(
            [
                breatherContourWholes.spring,
                breatherContourWholes.rest,
                breatherContourWholes.rest,
            ],
            [
                { intensityScalar: as.NormalScalar<Intensity>(0.5) },
                {},
                {},
            ],
        )

        const summer: Segment = computeSegment(
            [
                breatherContourWholes.rest,
                breatherContourWholes.summer,
                breatherContourWholes.rest,
            ],
            [
                {},
                { intensityScalar: as.NormalScalar<Intensity>(0.5), scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(4) },
                {},
            ],
        )

        const doubleFallWhichIsGoodIntroForJig: Segment = computeSegment(
            [
                breatherContourWholes.doubleRest,
                breatherContourWholes.doubleRest,
                breatherContourWholes.doubleFall,
            ],
            [
                {},
                {},
                {
                    intensityScalar: as.NormalScalar<Intensity>(0.5),
                    pitchIndexShift: as.Transition<Array<Scalar<Pitch>>>(negative(1)),
                    scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(2),
                },
            ],
        )

        const springAltNiceAsABreatherToABreather: Segment = computeSegment(
            [
                breatherContourWholes.rest,
                breatherContourWholes.springAlt,
                breatherContourWholes.rest,
            ],
            [
                {},
                { intensityScalar: as.NormalScalar<Intensity>(0.5), scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(1) },
                {},
            ],
        )

        const varietyQuiteTheReveille: Segment = computeSegment(
            [
                breatherContourWholes.variety,
                breatherContourWholes.variety,
                breatherContourWholes.variety,
            ],
            [
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(3) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(4) },
                { scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(5) },
            ],
        )

        return {
            doubleFallWhichIsGoodIntroForJig,
            spring,
            springAltNiceAsABreatherToABreather,
            summer,
            varietyQuiteTheReveille,
        }
    }

export {
    thunkBreatherSegments,
}
