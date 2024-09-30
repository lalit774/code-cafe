import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import { itemImages } from '../items'
import Thumbnail from './Thumbnail'
import ItemType from '../types/item'
import './Details.css'

function Details({ items }) {
  return (
    <div className="details-components">
      <Outlet />
      <div className="details-component-sidebar">
        {items.map((item) => (
          <Thumbnail
            key={item.itemId}
            image={itemImages[item.imageId]}
            title={item.title}
            itemId={item.itemId}
          />
        ))}
      </div>
    </div>
  )
}
Details.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
}

export default Details
