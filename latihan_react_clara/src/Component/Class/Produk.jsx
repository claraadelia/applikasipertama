import React, {Component} from 'react';

import './CSS/Produk.css';

class Produk extends Component{
    constructor(props) {
        super(props)

        this.state ={
            stock: this.props.stock,
            sub:"Beli",
            Status:"Tersedia",
            disabled : false
        }
    }

    ButtonBeli = () => {
        this.setState ({
        stock: this.state.stock -1
        })
        if(this.state.stock ==1){
            this.setState({
                Status : "Habis",
                disabled : true
            })
        }
    }

        render(){
            return(

                <div className="box-stock">
                    <h2>{this.props.nama}</h2>
                    <img src="https://tse4.mm.bing.net/th?id=OIP.rf428CRhPdRFDWUeLIaHMgHaEo&pid=Api&P=0&w=259&h=163" alt=""/>
            <p><b> Rp. {this.props.harga}</b></p>
                    <p>{this.state.stock}</p>
                    <button className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</button>
                    <p>{this.state.Status}</p>


                </div>
            )
                
        }
    }

    export default Produk;