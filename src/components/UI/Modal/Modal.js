import React, {Component} from 'react';
import classes from './Modal.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

//modal je summary nase narudzbine
//bio je funcional component tj const, ali zbog dole navedene funkcije smo ga promenili na class
class Modal extends Component {

    //funkcija koja sluzi da se ne bi renderovao racun prilikom svakog dodavanja necega u burger, za skolske projekte moze i bez toga
    //poboljsava performanse valjda, ali ako bismo koristili Modal vise puta u aplikaciji verovatno bi morali konfigurisati funkciju
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('[Modal] componentWillUpdate');
    }

    render() {
        return (
            <Auxiliary>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Auxiliary>
        );
    }
};

export default Modal;