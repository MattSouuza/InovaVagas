import React, { useState } from 'react';
import imgUSenaiInova from '../../assets/images/senaiInova.png';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import CardButton from '../../components/cardButton/index';
import ButtonFull from '../../components/button/index';
import imgUserRed from '../../assets/images/user_Vermelho.png';
import imgPredioRed from '../../assets/images/predio_Vermelho.png';
import '../../assets/styles/global.css';

function SelecaoCadastro() {
    return (
        <div className='selecaoCadastro'>
            <div className="content">

                <div className='title'>
                    <h1>Quem é você?</h1>
                </div>

                <div className="cards">
                    <Link to='/aCadastro'><CardButton title='Aluno' img={imgUserRed} /></Link>
                    <Link to='/eCadastro'><CardButton title='Empresa' img={imgPredioRed} /></Link>
                </div>

                <Link to='/' className='link'><ButtonFull name='Voltar'/></Link>
            </div>

            <div className="logos">
                <img src={imgUSenaiInova} />
            </div>
        </div>
    );
}

export default SelecaoCadastro;