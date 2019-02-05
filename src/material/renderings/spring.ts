import { RenderingByBlockElement, StandardContour } from '@musical-patterns/pattern'
import { apply, ContourElement, ContourPiece, from, INITIAL, positiveIntegers, to } from '@musical-patterns/utilities'
import { INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT } from '../../constants'
import { SINGLE_DURATION } from './constants'

const springRendering: RenderingByBlockElement<StandardContour> =
    (blockElement: number): ContourPiece<StandardContour> => {
        const integers: number[] = positiveIntegers.slice(from.Index(INITIAL), blockElement)
        const contour: ContourPiece<StandardContour> = to.ContourPiece(
            integers.map((integer: number): ContourElement<StandardContour> => [ integer, SINGLE_DURATION ]),
        )
        const contourElement: ContourElement<StandardContour> = apply.Index(contour, INITIAL)
        contourElement[ from.Index(INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT) ] = 0

        return contour
    }

export {
    springRendering,
}
