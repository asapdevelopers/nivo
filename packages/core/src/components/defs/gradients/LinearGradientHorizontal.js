/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React from 'react'
import PropTypes from 'prop-types'

export const LinearGradientHorizontal = ({ id, colors }) => (
    <linearGradient id={id} x1={0} x2={1} y1={0} y2={0}>
        {colors.map(({ offset, color, opacity }) => (
            <stop
                key={offset}
                offset={`${offset}%`}
                stopColor={color}
                stopOpacity={opacity !== undefined ? opacity : 1}
            />
        ))}
    </linearGradient>
)

LinearGradientHorizontal.propTypes = {
    id: PropTypes.string.isRequired,
    colors: PropTypes.arrayOf(
        PropTypes.shape({
            offset: PropTypes.number.isRequired,
            color: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export const linearGradientDef = (id, colors, options = {}) => ({
    id,
    type: 'linearGradientHorizontal',
    colors,
    ...options,
})
