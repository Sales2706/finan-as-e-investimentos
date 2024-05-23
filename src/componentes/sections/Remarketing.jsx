import styles from './Remarketing.module.css'
import Button from '../elements/Button'

function Remarketing(){
    return(
        <div className={styles.Remarketing}>
            <p>
           <h2>Aproveite Agora: Desconto Imperdível de R$197 por Apenas R$27! 🎉</h2>
            <br />

            <b>⏳ Tempo Limitado:</b> Esta é sua chance de obter acesso ao nosso curso completo de finanças e investimentos por um preço incrível! <br />
            Por tempo limitado, estamos oferecendo um desconto exclusivo de R$197, reduzindo o preço para apenas R$27!
            <br /> <br />

            🚀 Por que perder a oportunidade de aprender estratégias comprovadas para impulsionar sua saúde financeira? <br />
            Não espere mais, este é o momento perfeito para investir em si mesmo e no seu futuro.
            <br /> <br />

            <b>💡 Mas atenção:</b> este desconto especial está disponível por tempo limitado. Em breve, o preço voltará ao seu valor original. <br />
            Não deixe passar essa chance única de transformar suas finanças por um custo tão acessível.
            <br /> <br />

            🔒 Garanta seu acesso agora mesmo antes que seja tarde demais! Clique no botão abaixo para aproveitar esta oferta exclusiva antes que ela desapareça.
            <br /> <br />

            <Button link='https://pay.kirvano.com/1868872c-c9e8-4fc7-8d94-0daefa1f732a' text='Garanta Seu Acesso por Apenas R$27,00 '/>
            <br />
            
            <b>Não deixe o preço voltar ao normal! Invista em seu futuro hoje mesmo!</b>
            </p>


        </div>
    )
}

export default Remarketing