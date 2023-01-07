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
    id: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
}