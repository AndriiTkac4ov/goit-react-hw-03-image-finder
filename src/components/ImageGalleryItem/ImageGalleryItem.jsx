import PropTypes from 'prop-types';
import { GalleryItem, GalleryItem_image } from "./ImageGalleryItem.styled";

export function ImageGalleryItem({ image: { webformatURL, largeImageURL, tags } }) {
    return (
        <GalleryItem>
            <GalleryItem_image src={webformatURL} alt={tags} />
        </GalleryItem>
    )
}

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }).isRequired
}