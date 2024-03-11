import { action, makeObservable, observable} from 'mobx';

class TicketStore {
    ticketState = {
        entradas: [],
        isLoading: false,
        //other state attributes...
    }

    constructor() {
        makeObservable(this, {
            ticketState: observable,
            setEntrada: action,
            unsetEntrada: action
        });
        //autorun(this.filmsState);  // WILL RUN AFTER EVERY ACTION INVOKE
        this.prefetchData();
    }

    setEntrada= (film) => {
      this.ticketState.favorites.push(film);
      //comprobar si sobreescribe o si lo hace bien
      localStorage.setItem('entradas', JSON.stringify(film));
  }

    unsetEntrada= (film) => {
    let id = film.id;
    this.ticketState.favorites = this.ticketState.favorites.filter(film => film.id !== id);
  }

    prefetchData = async () => {
            try {
                const entrads = JSON.parse(localStorage.getItem('entradas'));
                this.ticketState.entradas = entrads;
            } catch (error) {
            }
    
        }
}

const ticketStore = new TicketStore()
export default ticketStore;