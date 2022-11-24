import React from "react"

export class Content extends React.Component{
    constructor(props){
        super(props);
        this.change_color = this.change_color.bind(this);
    }

    r() {
        return Math.floor(Math.random() * 255)
    }

    change_color(event) {
        event.target.style.color = 'rgb(' + this.r() + "," + this.r() + "," + this.r() + ')';
        event.target.style.background = 'rgb(' + this.r() + "," + this.r() + "," + this.r() + ')';
    }

    render() {
        return <>
            <div>
                <p onClick={this.change_color}>Університет: НТУУ КПІ ім. Ігоря Сікорського</p>
            </div>
            <div>
                <h4 onClick={this.change_color}>Хобі:</h4>
                <ul>
                    <li>Читання книжок та коміксів</li>
                    <li>Кулінарія</li>
                    <li>Вивчення англійської</li>
                    <li>Перегляд фільмів та серіалів</li>
                </ul>
            </div>
            <div>
                <h4>Улюблені книжки:</h4>
                <ol>
                    <li>В. Шваб трилогія "Темний відтінок магії"</li>
                    <li>Б. Сандерсон трилогія "Народжений туманом"</li>
                    <li>Н. Ґейман, Т. Пратчетт "Добрі передвісники"</li>
                </ol>
            </div>
            <div>
                <p>
                    <b>Мукачево</b> - це одне з наймальовничіших міст України, яке славиться своєю унікальною історією.
                    На своїй, здавалося б, невеликій території, Мукачево зібрало вражаючий ряд унікальних пам’ятників епохи ренесансу, готики і бароко.
                    Це місто еклектики стилів, купажів ароматних вин в затишних вуличок, надзвичайної аури і потужної енергетики.
                    Атмосфера і історія міста залучає і захоплює навіть бувалих мандрівників.
                </p>
                <a href="https://www.mukachevo.net/" target="_blank"><img src="https://blog.pokupon.ua/wp-content/uploads/2021/08/mukachevo.jpg"
                                                                          width="600px"
                                                                          height="370px"
                                                                          alt="picture of Mukachevo"/></a>
            </div>
        </>
    }
}

