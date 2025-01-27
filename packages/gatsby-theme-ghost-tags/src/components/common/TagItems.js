import React from 'react'
import PropTypes from 'prop-types'

import TagCard from './TagCard'

const TagItems = ({ tags, isHome }) => (
    tags.map(({ node }, i) => (
        <TagCard key={node.id} tag={node} num={i} isHome={isHome} />
    ))
)

TagItems.propTypes = {
    tags: PropTypes.array.isRequired,
    isHome: PropTypes.bool,
    children: PropTypes.object,
}

export default TagItems