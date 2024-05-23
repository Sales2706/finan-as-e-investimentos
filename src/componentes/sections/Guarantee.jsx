import styles from './Guarantee.module.css'
import Garantia from '../image/Garantia.svg'

function Guarantee(){
    return(
        <div className={styles.Guarantee}>
            <img src={Garantia} alt="ERROR" />

            <h1>
                Fique Tranquilo!
            </h1>

            <p>
            Serão <b>7 dias para você estudar e colocar em prática,</b> e se você achar que o <br />
            prometido não foi cumprido, você terá o valor integral estornado. <br />
            Ou se, por qualquer outro motivo você não ficar satisfeito, basta entrar em <br />
            contato com a minha equipe de suporte notavelnegocios@gmail.com e <br />
            solicitar o reembolso do valor investido. <br /> <br />

            <b>Você receberá de volta cada centavo que pagou</b>
            </p>
        </div>
    )
}

export default Guarantee