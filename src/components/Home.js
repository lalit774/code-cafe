import PropTypes from 'prop-types'
import { itemImages } from '../items'
import Thumbnail from './Thumbnail'
import ItemType from '../types/item'
import './Home.css'

function Home({ items }) {
  return (
    <div className="home-component">
      {items.map((item) => (
        <Thumbnail
          key={item.imageId}
          itemId={item.itemId}
          image={itemImages[item.imageId]}
          title={item.title}
        />
      ))}
    </div>
  )
}
Home.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
}
export default Home
