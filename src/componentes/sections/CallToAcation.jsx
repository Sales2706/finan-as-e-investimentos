import style from './CallToAction.module.css'
import Button from '../elements/Button'

function CallToAction(){
    return(
        <div className={style.CallToAction}>
            <h1>
            O Ebook de finanças é investimentos + 2 Bônus pelo <br /> 
            VALOR ESPECIAL DE LANÇAMENTO
            </h1>

            <p>
            O Ebook de Finanças é investimentos será vendido <br />
            por R$197,00 dentro de alguns dias. Mas como meu desejo é <br /> 
            premiar aqueles que chegaram a esse Ebook primeiro, <br />
            começarei com um valor muito menor que R$197,00.
            </p>

            <h2>
                O EBOOK DE FINANÇAS É INVESTIMENTOS  está <br />
                disponível hoje por R$27,00.
            </h2>

            <p>
                Portanto garanta agora a seu Ebookk!
            </p>

            <Button link='https://pay.kirvano.com/1868872c-c9e8-4fc7-8d94-0daefa1f732a' text='Garanta Seu Acesso por Apenas R$27,00 '/>
            
        </div>
    )
}

export default CallToAction