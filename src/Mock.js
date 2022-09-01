const excursions = [
    {
    id: 1,
    places: 'Volcan Lanin',
    img: 'http://www.sanmartindelosandes.gov.ar/img/foto/lanin_wl.jpg',
    detail: 'La ascensión al Lanin es una de las ascensiones más magnificas de toda la Patagonia Norte, su cumbre se destaca entre todas las montañas de su alrededor brindándonos una vista y una sensación de altura majestuosa y particular. Es un ascenso duro, exigente físicamente y con condimentos técnicos que resultan de que se trate de una ascensión de alta montaña.',
    price: 96500
    },

    {
    id: 2,
    places: 'Cerro Tres Picos',
    img: 'http://www.aventuraazul.com.ar/wp-content/uploads/2017/04/IMG_3693.jpg',
    detail: 'Esta es una salida de fin de semana. Salimos desde Azul el sábado por la mañana temprano con destino a la Estancia Funke. Una vez registrados, comenzaremos el Trekking. Caminaremos entre 4 y 5 hs con mochilas al hombro cargadas con ropa y equipo hasta llegar a la Cueva de los Guanacos donde armaremos nuestro campamento.',
    price: 8900
    },

    {
    id: 3,
    places: 'Volcán Domuyo',
    img: 'http://www.aventuraazul.com.ar/wp-content/uploads/2017/05/VOLCAN-DOMUYO-15-FEB-2009-105.jpg',
    detail: 'El Volcán Domuyo es la montaña más alta de la Patagonia y la montaña ideal si uno se quiere iniciar en las expediciones de altura. Con sus 4709 msnm, domina el norte de la provincia de Neuquén, sobre la cordillera del viento a la cual han sabido ponerle el nombre ya que es uno de los lugares más ventosos del país. ',
    price: 80000
    },
    
    {
    id: 4,
    places: 'Escalada en Tandil',
    img: 'http://www.eldiariodeturismo.com.ar/wp-content/uploads/2022/02/TANDIL-escalada-CICARE.jpg',
    detail: 'Es una salida de día entero. Salimos desde Azul aprox a las 09:00 hs y regresamos a la tardecita. Se darán los conocimientos básicos para poder realizar la práctica de Rapel y Escalada de forma segura (escalada en TOP ROPE, tipos de escalada, arneses, cadena de seguridad, equipo técnico, nudos principales, etc).',
    price: 3000
    },
    
]

export const getFetch = new Promise((respuesta, rejected) => {

    let url = 'www.aventuraazul.com.ar'

    if (url === 'www.aventuraazul.com.ar') {
        setTimeout(() => {
            respuesta(excursions);
            }, 2000);

        } else {
            rejected('400 not found')
        }
    })