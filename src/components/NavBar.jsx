import ButtonComponent from './ButtonComponent.jsx';
import CartWidget from './CartWitdget.jsx';

export default function NavBar() {

    const caracteristicas = [
        {
            texto:'contacto',
    },
    {
        texto:'productos', 
    },
    {
            texto:'nosotros',
    }
    ];

    const dispararConsola = () => {
        console.log("hola chicos");
    };
    
    return (
        <>
        <ButtonComponent
        texto={caracteristicas(0).texto}
        reaccionarAClick={dispararConsola}
        />
          <ButtonComponent
        texto={caracteristicas(1).texto}
        reaccionarAClick={dispararConsola}
        />
          <ButtonComponent
        texto={caracteristicas(2).texto}
        reaccionarAClick={dispararConsola}
        />
        <CartWidget />
        </>
    )
}