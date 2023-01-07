import { Component } from "react";
import { Application } from "./App.styled";
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
// import { Modal } from "./Modal/Modal";

export class App extends Component {
  state = {}

  render() {
    return (
      <Application>
        <Searchbar />
        <ImageGallery />
        {/* <Modal /> */}
      </Application>
    );
  }
};
