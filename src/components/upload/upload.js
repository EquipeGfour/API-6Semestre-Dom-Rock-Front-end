import axios from 'axios';
import React, { Component } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';
import { Badge } from 'primereact/badge';
import "react-pro-sidebar/dist/css/styles.css";
import "./upload.css"

export class FileUploadDemo extends Component {
    onUpload = (event) => {
        console.log('veio aqui????');
        const file = event.files[0]; 

        const formData = new FormData();
        formData.append('file', file);
        
            axios.post('http://localhost:8000/document/inserir', formData)
            .then(response=> {
                console.log(response.data);
                this.fileUploadRef.current.clear();
                this.fileUploadRef.current.setUploadedFiles([file]);
            }).catch(error=> {
                console.log(error);
            })            
        }
        constructor(props) {
            super(props);
            this.fileUploadRef = React.createRef();
        }



    render() {
        
        
        const chooseOptions = {icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined'};
        const uploadOptions = {icon: 'pi pi-fw pi-cloud-upload', iconOnly: true, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined'};
        const cancelOptions = {icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined'};

        return (
            <div>
                <Toast ref={(el) => { this.toast = el; }}></Toast>

                <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
                <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
                <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

                <div className="card-uploads">
                <div className="title-process-upload">
                    <span >Upload da Base de Dados</span>
                </div>
                    <FileUpload ref={this.fileUploadRef} name="demo[]"  chooseLabel='Selecione' customUpload uploadHandler={this.onUpload}  multiple accept="image/*"  maxFileSize={1000000}
                        emptyTemplate={<p className="m-0">Arraste ou selecione o arquivo</p>} />
                </div>
            </div>
        )
    }
}

