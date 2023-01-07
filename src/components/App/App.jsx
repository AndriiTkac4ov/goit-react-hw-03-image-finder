import { Component } from "react";
import { Application } from "./App.styled";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
// import { Modal } from "./Modal/Modal";

export class App extends Component {
  state = {
    queryImagesFromSubmit: '',
  }

  handleFormSubmit = queryImages => {
    this.setState({ queryImagesFromSubmit: queryImages });
  }

  render() {
    return (
      <Application>
        <Searchbar onSubmitForApp={this.handleFormSubmit}/>
        <ImageGallery />
        <ToastContainer />
        {/* <Modal /> */}
      </Application>
    );
  }
};
