import styles from './Bonus.module.css'
import Button from '../elements/Button'

function Bonus(){
    return(
        <div className={styles.Bonus}>
            <h1>
            🎁 Bônus Exclusivos Incluídos:
            </h1>

            <ul>
                <li>
                    Planilha de Orçamento Financeiro para controlar suas despesas e receitas.
                </li>

                <li>
                    Guia passo a passo para criar um plano de aposentadoria sólido.
                </li>
            </ul>

            <p>
            <b>Transforme sua vida financeira agora mesmo!</b> Não perca mais tempo se preocupando com <br />
            dinheiro. Adquira seu eBook hoje e comece sua jornada em direção à liberdade financeira! 
            </p>

            <Button link='https://pay.kirvano.com/1868872c-c9e8-4fc7-8d94-0daefa1f732a' text='Adquira Agora por R$27,00 '/>
        </div>
    )
}

export default Bonus