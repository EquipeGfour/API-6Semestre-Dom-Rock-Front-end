import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './resultado-processamento.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';




export class DataTableScrollDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customers: [],
            virtualCustomers: [],
            inmemoryData: [],
            lazyTotalRecords: 0,
            loading: false,
            virtualLoading: false
        };

    }

    componentDidMount() {
        this.setState({ loading: true, virtualLoading: true });
    
        // Mock data
        const customers = [
            {
                id: 1255,
                entrada: "test.csv",
                Saida: {
                    name: "html/txt",
                    code: "CEU"
                },
                company: "McAdams Consulting Ltd",
                date: "2014-02-13",
                Etapa: "Raspagem",
                activity: 23,
                Tempo: {
                    name: "2 m/s",
                    image: "ionibowcher.png"
                }
            },
            {
                id: 1255,
                entrada: "test.csv",
                Saida: {
                    name: "html/txt",
                    code: "CEU"
                },
                company: "McAdams Consulting Ltd",
                date: "2014-02-13",
                Etapa: "Raspagem",
                activity: 23,
                Tempo: {
                    name: "2 m/s",
                    image: "ionibowcher.png"
                }
            },
            {
                id: 1255,
                entrada: "test.csv",
                Saida: {
                    name: "html/txt",
                    code: "CEU"
                },
                company: "McAdams Consulting Ltd",
                date: "2014-02-13",
                Etapa: "Raspagem",
                activity: 23,
                Tempo: {
                    name: "2 m/s",
                    image: "ionibowcher.png"
                }
            },
            {
                id: 1255,
                entrada: "test.csv",
                Saida: {
                    name: "html/txt",
                    code: "CEU"
                },
                company: "McAdams Consulting Ltd",
                date: "2014-02-13",
                Etapa: "Raspagem",
                activity: 23,
                Tempo: {
                    name: "2 m/s",
                    image: "ionibowcher.png"
                }
            },
            {
                id: 1255,
                entrada: "test.csv",
                Saida: {
                    name: "html/txt",
                    code: "CEU"
                },
                company: "McAdams Consulting Ltd",
                date: "2014-02-13",
                Etapa: "Raspagem",
                activity: 23,
                Tempo: {
                    name: "2 m/s",
                    image: "ionibowcher.png"
                }
            },
            {
                id: 1255,
                entrada: "test.csv",
                Saida: {
                    name: "html/txt",
                    code: "CEU"
                },
                company: "McAdams Consulting Ltd",
                date: "2014-02-13",
                Etapa: "Raspagem",
                activity: 23,
                Tempo: {
                    name: "2 m/s",
                    image: "ionibowcher.png"
                }
            },
            {
                id: 1255,
                entrada: "test.csv",
                Saida: {
                    name: "html/txt",
                    code: "CEU"
                },
                company: "McAdams Consulting Ltd",
                date: "2014-02-13",
                Etapa: "Raspagem",
                activity: 23,
                Tempo: {
                    name: "2 m/s",
                    image: "ionibowcher.png"
                }
            },
            {
                id: 1255,
                entrada: "test.csv",
                Saida: {
                    name: "html/txt",
                    code: "CEU"
                },
                company: "McAdams Consulting Ltd",
                date: "2014-02-13",
                Etapa: "Raspagem",
                activity: 23,
                Tempo: {
                    name: "2 m/s",
                    image: "ionibowcher.png"
                }
            },
            {
                id: 1255,
                entrada: "test.csv",
                Saida: {
                    name: "html/txt",
                    code: "CEU"
                },
                company: "McAdams Consulting Ltd",
                date: "2014-02-13",
                Etapa: "Raspagem",
                activity: 23,
                Tempo: {
                    name: "2 m/s",
                    image: "ionibowcher.png"
                }
            },
            {
                id: 1255,
                entrada: "test.csv",
                Saida: {
                    name: "html/txt",
                    code: "CEU"
                },
                company: "McAdams Consulting Ltd",
                date: "2014-02-13",
                Etapa: "Raspagem",
                activity: 23,
                Tempo: {
                    name: "2 m/s",
                    image: "ionibowcher.png"
                }
            },
            {
                id: 1255,
                entrada: "test.csv",
                Saida: {
                    name: "html/txt",
                    code: "CEU"
                },
                company: "McAdams Consulting Ltd",
                date: "2014-02-13",
                Etapa: "Raspagem",
                activity: 23,
                Tempo: {
                    name: "2 m/s",
                    image: "ionibowcher.png"
                }
            },{
                id: 1255,
                entrada: "test.csv",
                Saida: {
                    name: "html/txt",
                    code: "CEU"
                },
                company: "McAdams Consulting Ltd",
                date: "2014-02-13",
                Etapa: "Raspagem",
                activity: 23,
                Tempo: {
                    name: "2 m/s",
                    image: "ionibowcher.png"
                }
            },
            {
                id: 5135,
                entrada: "test.csv",
                Saida: {
                    name: "html/txt",
                    code: "fr"
                },
                company: "Bisset Group",
                Etapa: "Raspagem",
                date: "2019-05-05",
                activity: 0,
                Tempo: {
                    name: "2 m/s",
                    image: "amyelsner.png"
                }
            }
            ,
            {
                id: 5135,
                entrada: "test.csv",
                Saida: {
                    name: "html/txt",
                    code: "fr"
                },
                company: "Bisset Group",
                Etapa: "Raspagem",
                date: "2019-05-05",
                activity: 0,
                Tempo: {
                    name: "2 m/s",
                    image: "amyelsner.png"
                }
            },
            {
                id: 5135,
                entrada: "test.csv",
                Saida: {
                    name: "html/txt",
                    code: "fr"
                },
                company: "Bisset Group",
                Etapa: "Raspagem",
                date: "2019-05-05",
                activity: 0,
                Tempo: {
                    name: "2 m/s",
                    image: "amyelsner.png"
                }
            },
            {
                id: 5135,
                entrada: "test.csv",
                Saida: {
                    name: "html/txt",
                    code: "fr"
                },
                company: "Bisset Group",
                Etapa: "Raspagem",
                date: "2019-05-05",
                activity: 0,
                Tempo: {
                    name: "2 m/s",
                    image: "amyelsner.png"
                }
            },
            {
                id: 5135,
                entrada: "test.csv",
                Saida: {
                    name: "html/txt",
                    code: "fr"
                },
                company: "Bisset Group",
                Etapa: "Raspagem",
                date: "2019-05-05",
                activity: 0,
                Tempo: {
                    name: "2 m/s",
                    image: "amyelsner.png"
                }
            },
            {
                id: 5135,
                entrada: "test.csv",
                Saida: {
                    name: "html/txt",
                    code: "fr"
                },
                company: "Bisset Group",
                Etapa: "Raspagem",
                date: "2019-05-05",
                activity: 0,
                Tempo: {
                    name: "2 m/s",
                    image: "amyelsner.png"
                }
            },
            {
                id: 5135,
                entrada: "test.csv",
                Saida: {
                    name: "html/txt",
                    code: "fr"
                },
                company: "Bisset Group",
                Etapa: "Raspagem",
                date: "2019-05-05",
                activity: 0,
                Tempo: {
                    name: "2 m/s",
                    image: "amyelsner.png"
                }
            },
            {
                id: 5135,
                entrada: "test.csv",
                Saida: {
                    name: "html/txt",
                    code: "fr"
                },
                company: "Bisset Group",
                Etapa: "Raspagem",
                date: "2019-05-05",
                activity: 0,
                Tempo: {
                    name: "2 m/s",
                    image: "amyelsner.png"
                }
            },
            {
                id: 5135,
                entrada: "test.csv",
                Saida: {
                    name: "html/txt",
                    code: "fr"
                },
                company: "Bisset Group",
                Etapa: "Raspagem",
                date: "2019-05-05",
                activity: 0,
                Tempo: {
                    name: "2 m/s",
                    image: "amyelsner.png"
                }
            },
            {
                id: 5135,
                entrada: "test.csv",
                Saida: {
                    name: "html/txt",
                    code: "fr"
                },
                company: "Bisset Group",
                Etapa: "Raspagem",
                date: "2019-05-05",
                activity: 0,
                Tempo: {
                    name: "2 m/s",
                    image: "amyelsner.png"
                }
            },
            {
                id: 5135,
                entrada: "test.csv",
                Saida: {
                    name: "html/txt",
                    code: "fr"
                },
                company: "Bisset Group",
                Etapa: "Raspagem",
                date: "2019-05-05",
                activity: 0,
                Tempo: {
                    name: "2 m/s",
                    image: "amyelsner.png"
                }
            },
            {
                id: 5135,
                entrada: "test.csv",
                Saida: {
                    name: "html/txt",
                    code: "fr"
                },
                company: "Bisset Group",
                Etapa: "Raspagem",
                date: "2019-05-05",
                activity: 0,
                Tempo: {
                    name: "2 m/s",
                    image: "amyelsner.png"
                }
            },
            {
                id: 5135,
                entrada: "test.csv",
                Saida: {
                    name: "html/txt",
                    code: "fr"
                },
                company: "Bisset Group",
                Etapa: "Raspagem",
                date: "2019-05-05",
                activity: 0,
                Tempo: {
                    name: "2 m/s",
                    image: "amyelsner.png"
                }
            }
        ];
    
        this.setState({ customers, loading: false });
    }
    


    render() {
        return (
            <div className="datatable-scroll-demo">
                <div className="card-table">
                <div className="title-process-processamento">
                    <span >Progresso do Processamento</span>
                </div>
                    <div className='fora'>
                    <DataTable value={this.state.customers} scrollable scrollHeight="350px" loading={this.state.loading}>
                        <Column field="entrada" header="Entrada"></Column>
                        <Column field="Saida.name" header="Saida"></Column>
                        <Column field="Etapa" header="Etapa"></Column>
                        <Column field="Tempo.name" header="Tempo"></Column>
                    </DataTable>
                    </div>
                </div>
            </div>
        );
    }
}