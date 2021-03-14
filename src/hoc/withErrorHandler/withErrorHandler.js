import React, {Component} from "react";

import Modal from "../../components/UI/Modal/Modal";
import Auxiliary from "../Auxiliary/Auxiliary";

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        }

        //koristi se willMount umesto componentDidMount zbog errora, ali kasnije ce se izbaciti ta funkcija pa bi najbolje bilo odraditi to u constructoru
        componentWillMount() {
            //this.reqInterceptor je na brzinu napravljen posto moramo da cuvamo stanje negde da bismo da Unmount kasnije
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        //ovo mora zbog toga sto bi se withError pozivao svaki put kada upakujemo neku komponenti sa njim, a mozda se ne koristi vise
        componentWillUnmount() {
            console.log('Will Unmount ', this.reqInterceptor, this.resInterceptor)
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }

        render() {
           return(
               <Auxiliary>
                   <Modal
                       show={this.state.error}
                       modalClosed={this.errorConfirmedHandler}>
                       {this.state.error ? this.state.error.message : null}
                   </Modal>
                   <WrappedComponent {...this.props} />
               </Auxiliary>
           );
       }
    }
}

export default withErrorHandler;