import PropTypes from 'prop-types';
import { GalleryItem, GalleryItem_image } from "./ImageGalleryItem.styled";

export function ImageGalleryItem({ id, webformatURL, largeImageURL }) {
    return (
        <GalleryItem>
            <GalleryItem_image src={webformatURL} alt="" />
        </GalleryItem>
    )
}

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
}