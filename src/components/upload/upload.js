import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './upload.css'
import ReactDOM from 'react-dom';

import React, { Component } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

export class FileUploadDemo extends Component {

    constructor(props) {
        super(props);

        this.onUpload = this.onUpload.bind(this);
    }

    onUpload() {
        this.toast.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }
    
    
    render() {
        return (
            <div className='header'>
                <Toast ref={(el) => { this.toast = el; }}></Toast>

                <div className="card">
                    <h3>Upload de Arquivos</h3>
                    <div className='bordas'>
                        <FileUpload name="demo[]" url="./upload.php" onUpload={this.onUpload} chooseLabel='Selecione' auto className="hide-cancel" multiple accept="image/*" maxFileSize={1000000}
                            emptyTemplate={<p className="p-m-0">Arraste e solte os arquivos aqui para fazer upload</p>} />
                    </div>
                </div>

            </div>
        )
    }
}
                
const rootElement = document.getElementById("root");
ReactDOM.render(<FileUploadDemo />, rootElement);