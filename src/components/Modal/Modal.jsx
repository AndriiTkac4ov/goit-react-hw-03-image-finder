// import { Component } from "react";
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from "./Modal.styled";

export const Modal = ({ largeImageURL, tags }) => {
    return (
        <Overlay>
            <ModalWindow>
                <img src={largeImageURL} alt={tags} />
            </ModalWindow>
        </Overlay>
    )
}

Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
}

// export class Modal extends Component {
//     render() {
//         return (
//             <Overlay>
//                 <ModalWindow>
//                     {this.props.children}
//                     {/* <img src="" alt="" /> */}
//                 </ModalWindow>
//             </Overlay>
//         );
//     }
// }