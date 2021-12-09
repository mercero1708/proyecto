import React, { Component } from "react";
import UploadService from "../service/UploadFilesService ";

export default class listaFile extends Component {
  constructor(props) {
    super(props); 

    this.state = {  
    
          fileInfos: [],
    };
  }

  componentDidMount() {
    UploadService.getFiles().then((response) => {
      this.setState({
        fileInfos: response.data,
      });
    });
  }
  render() {
    const {fileInfos } = this.state;

    return (
      <div>      

        <div className="">
          <div className="card-header">List of Files</div>
          <ul className="list-group list-group-flush">
            {fileInfos &&
              fileInfos.map((file, index) => (
                <li className="list-group-item" key={index}>
                  <a href={file.url}>{file.name}</a>
                </li>
              ))}
          </ul>
              </div>
      </div>
    );
  }
}