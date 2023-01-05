import { Component } from "react";
import { Overlay, ModalWindow } from "./Modal.styled";

// export const Modal = () => (
//     <Overlay>
//         <ModalWindow>
//             <img src="" alt="" />
//         </ModalWindow>
//     </Overlay>
// )

export class Modal extends Component {
    render() {
        return (
            <Overlay>
                <ModalWindow>
                    {this.props.children}
                    {/* <img src="" alt="" /> */}
                </ModalWindow>
            </Overlay>
        );
    }
}