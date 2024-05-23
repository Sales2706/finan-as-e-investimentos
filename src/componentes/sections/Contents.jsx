import styles from './Contents.module.css'

function Contents(){
    return(
        <div className={styles.Contents}>
            <h1>
            💡Dentro deste eBook, você vai aprender:
            </h1>

            <ul>
                <li>
                    Como criar um plano financeiro sólido que funcione para você.
                </li>
                   
                <li>
                    Estratégias inteligentes para economizar dinheiro e evitar armadilhas financeiras.
                </li>

                <li>
                    Como planejar sua aposentadoria e viver confortavelmente.   
                </li>
            </ul>

            <p>
            Este eBook não é apenas teoria, mas um guia prático repleto de exemplos do <br /> 
            mundo real e dicas acionáveis que você pode começar a aplicar hoje mesmo.
            </p>
        </div>
    )
}

export default Contents