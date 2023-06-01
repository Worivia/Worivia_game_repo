class Character {

    #hp;
    #nev;
    #sebzes;

    constructor(hp, nev, sebzes) {
        this.#hp = hp;
        this.#nev = nev
        this.#sebzes = sebzes;
    }

    getHp(){
        return this.#hp;
    }

    getNev(){
        return this.#nev;
    }
    
    getSebzes(){
        return this.#sebzes;
    }




}

export default Character;