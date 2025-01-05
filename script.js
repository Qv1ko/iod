// Global variables
const TEXT = document.getElementById("text");
const DIRECTIONS = ["izquierda", "derecha"];
const TEXT_LIST = [
    "Gira a la {direction} en la siguiente esquina.",
    "El semáforo está a la {direction}.",
    "Sigue todo recto y luego gira a la {direction}.",
    "La tienda está a tu {direction}.",
    "Al llegar al cruce, ve a la {direction}.",
    "Dobla a la {direction} después del parque.",
    "El baño está a la {direction} del pasillo.",
    "Toma la segunda calle a la {direction}.",
    "A la {direction} encontrarás un café.",
    "La puerta de entrada está a la {direction}.",
    "Estaciona el coche a la {direction}.",
    "El ascensor está a la {direction} de la recepción.",
    "Sigue el camino a la {direction}.",
    "En la bifurcación, toma el camino de la {direction}.",
    "La farmacia está a la {direction} de la iglesia.",
    "El museo se encuentra a tu {direction}.",
    "A la {direction} está el colegio.",
    "Gira a la {direction} después del semáforo.",
    "La entrada principal está a la {direction}.",
    "El banco está a la {direction} de la plaza.",
    "Cruza la calle y luego gira a la {direction}.",
    "La estación de trenes está a la {direction}.",
    "Sigue caminando y gira a la {direction} en la esquina.",
    "El cine está a la {direction} del supermercado.",
    "La sala de espera está a la {direction}.",
    "Sube las escaleras y gira a la {direction}.",
    "A la {direction} verás un parque.",
    "El restaurante está a la {direction} de la calle principal.",
    "Toma la primera calle a la {direction}.",
    "La tienda de ropa está a la {direction} del hotel.",
    "A la {direction} de la puerta principal hay un jardín.",
    "El teatro está a la {direction} de la plaza.",
    "Gira a la {direction} después de pasar el puente.",
    "A la {direction} verás una señal de tráfico.",
    "La biblioteca está a la {direction} de la cafetería.",
    "Sigue todo recto y toma la salida a la {direction}.",
    "El hospital está a la {direction} de la avenida.",
    "Al final de la calle, gira a la {direction}.",
    "La escuela está a la {direction} del parque.",
    "La entrada al estacionamiento está a la {direction}.",
    "A la {direction} verás un edificio rojo.",
    "El museo está a la {direction} del parque central.",
    "La panadería está a la {direction} de la iglesia.",
    "Cruza la calle y gira a la {direction} en el segundo semáforo.",
    "El supermercado está a la {direction} de la gasolinera.",
    "A la {direction} verás un edificio alto.",
    "La playa está a la {direction} del hotel.",
    "El zoológico está a la {direction} del estadio.",
    "Sigue el camino a la {direction} hasta el final.",
    "A la {direction} encontrarás un quiosco.",
    "La farmacia está a la {direction} del supermercado.",
    "Toma la primera salida a la {direction} en la rotonda.",
    "La oficina de correos está a la {direction} del banco.",
    "El edificio de oficinas está a la {direction} del parque.",
    "La biblioteca está a la {direction} del edificio principal.",
    "Gira a la {direction} en el próximo semáforo.",
    "La entrada al cine está a la {direction} de la calle principal.",
    "La tienda de electrónica está a la {direction} de la librería.",
    "La parada de autobús está a la {direction} del cruce.",
    "El edificio azul está a la {direction} de la calle.",
    "La cafetería está a la {direction} de la librería.",
    "Toma la tercera calle a la {direction}.",
    "La salida está a la {direction} del pasillo.",
    "A la {direction} verás una señal de alto.",
    "La gasolinera está a la {direction} de la carretera principal.",
    "El estacionamiento está a la {direction} del centro comercial.",
    "La oficina está a la {direction} de la entrada principal.",
    "Gira a la {direction} en la esquina.",
    "El hotel está a la {direction} del monumento.",
    "La estación de metro está a la {direction} de la plaza.",
    "El parque está a la {direction} de la calle.",
    "La tienda de juguetes está a la {direction} del supermercado.",
    "Toma la segunda salida a la {direction} en la rotonda.",
    "A la {direction} verás un edificio de ladrillo.",
    "La oficina de turismo está a la {direction} del museo.",
    "Sigue el sendero a la {direction}.",
    "El restaurante está a la {direction} de la entrada.",
    "La tienda de deportes está a la {direction} del gimnasio.",
    "La salida de emergencia está a la {direction}.",
    "El banco está a la {direction} del centro comercial.",
    "A la {direction} verás un puente.",
    "La peluquería está a la {direction} de la panadería.",
    "Gira a la {direction} en la segunda intersección.",
    "La escuela está a la {direction} de la biblioteca.",
    "La tienda de comestibles está a la {direction} de la farmacia.",
    "El parque está a la {direction} del lago.",
    "A la {direction} verás una fuente.",
    "La estación de autobuses está a la {direction} de la plaza.",
    "Gira a la {direction} después del semáforo.",
    "El supermercado está a la {direction} del banco.",
    "A la {direction} verás un camino de tierra.",
    "La entrada está a la {direction} del edificio.",
    "A la {direction} verás una tienda de ropa.",
    "El cine está a la {direction} del centro comercial.",
    "La farmacia está a la {direction} de la clínica.",
    "A la {direction} verás una montaña.",
    "La oficina de correos está a la {direction} del ayuntamiento.",
    "La entrada al parque está a la {direction} de la calle.",
    "Gira a la {direction} en el siguiente cruce.",
    "La tienda de muebles está a la {direction} del banco.",
    "El bar está a la {direction} de la discoteca.",
    "A la {direction} verás una señal de dirección.",
    "La salida está a la {direction} de la puerta principal.",
    "La cafetería está a la {direction} del centro de convenciones.",
    "Gira a la {direction} en la siguiente intersección.",
    "A la {direction} verás un faro.",
    "La tienda de vinos está a la {direction} del supermercado.",
    "La entrada al museo está a la {direction} del jardín.",
    "A la {direction} verás un edificio antiguo.",
    "La panadería está a la {direction} de la carnicería.",
    "Gira a la {direction} en la primera oportunidad.",
    "El hotel está a la {direction} de la estación de tren.",
    "La oficina está a la {direction} del pasillo.",
    "La tienda de regalos está a la {direction} de la entrada.",
    "A la {direction} verás una cascada.",
    "La iglesia está a la {direction} del parque.",
    "Gira a la {direction} después del semáforo.",
    "La librería está a la {direction} de la cafetería.",
    "A la {direction} verás una estatua.",
    "El museo está a la {direction} de la plaza principal.",
    "Gira a la {direction} al final de la calle.",
    "La farmacia está a la {direction} de la parada de autobús.",
    "A la {direction} verás un campo de fútbol.",
    "La tienda de ropa está a la {direction} del cruce.",
    "El parque de atracciones está a la {direction}.",
    "La estación de servicio está a la {direction} de la autopista.",
    "A la {direction} verás una torre de reloj.",
    "El centro de salud está a la {direction} del mercado.",
    "La tienda de mascotas está a la {direction} del veterinario.",
    "El centro comunitario está a la {direction} del parque.",
    "A la {direction} verás una parada de tranvía.",
    "El estadio está a la {direction} del centro de la ciudad.",
    "La tienda de bicicletas está a la {direction} del parque.",
    "El centro de convenciones está a la {direction} del hotel.",
    "A la {direction} verás una galería de arte.",
    "La tienda de antigüedades está a la {direction} del museo.",
    "El mercado está a la {direction} de la plaza.",
    "A la {direction} verás una torre de agua.",
    "El centro de reciclaje está a la {direction} del vertedero.",
    "La tienda de electrónica está a la {direction} del centro comercial.",
    "El centro de yoga está a la {direction} del gimnasio.",
    "A la {direction} verás una pista de patinaje.",
    "El centro de jardinería está a la {direction} del vivero.",
    "La tienda de música está a la {direction} del teatro.",
    "El centro de negocios está a la {direction} del distrito financiero.",
    "A la {direction} verás una estación de bomberos.",
    "La tienda de deportes está a la {direction} del estadio.",
    "El centro de bienestar está a la {direction} del spa.",
    "A la {direction} verás una pista de atletismo.",
    "El centro de estudios está a la {direction} de la biblioteca.",
    "La tienda de juguetes está a la {direction} de la guardería.",
    "El centro de conferencias está a la {direction} del hotel.",
    "A la {direction} verás una pista de tenis.",
    "El centro de arte está a la {direction} de la galería.",
    "La tienda de ropa está a la {direction} del centro comercial.",
    "El centro de investigación está a la {direction} de la universidad.",
    "A la {direction} verás una pista de carreras.",
    "El centro de visitantes está a la {direction} del parque nacional.",
    "La tienda de comestibles está a la {direction} del mercado.",
    "El centro de eventos está a la {direction} del estadio.",
    "A la {direction} verás una pista de esquí.",
    "El centro de información está a la {direction} de la estación de tren.",
    "La tienda de licores está a la {direction} del supermercado.",
    "El centro de distribución está a la {direction} del almacén.",
    "A la {direction} verás una pista de baile.",
    "El centro de emergencias está a la {direction} del hospital.",
    "La tienda de cosméticos está a la {direction} de la farmacia.",
    "El centro de adopción está a la {direction} del refugio de animales.",
    "A la {direction} verás una pista de hockey.",
    "El centro de rehabilitación está a la {direction} de la clínica.",
    "La tienda de artículos de oficina está a la {direction} del centro de negocios.",
    "El centro de formación está a la {direction} de la academia.",
    "A la {direction} verás una pista de motocross.",
    "El centro de control está a la {direction} de la torre de control.",
    "La tienda de artículos para el hogar está a la {direction} del centro comercial.",
    "El centro de operaciones está a la {direction} de la base militar.",
    "A la {direction} verás una pista de aterrizaje.",
    "El centro de mando está a la {direction} del cuartel general.",
    "La tienda de artículos deportivos está a la {direction} del estadio.",
    "El centro de convenciones está a la {direction} del hotel.",
    "A la {direction} verás una pista de ciclismo.",
    "El centro de recreación está a la {direction} del parque.",
    "La tienda de artículos de pesca está a la {direction} del lago.",
    "El centro de distribución está a la {direction} del almacén.",
    "A la {direction} verás una pista de karting.",
    "El centro de atención está a la {direction} del hospital.",
    "La tienda de artículos de caza está a la {direction} del bosque.",
    "El centro de operaciones está a la {direction} de la base militar.",
    "A la {direction} verás una pista de esquí.",
    "El centro de mando está a la {direction} del cuartel general.",
    "La tienda de artículos de camping está a la {direction} del parque nacional.",
    "El centro de convenciones está a la {direction} del hotel.",
    "A la {direction} verás una pista de patinaje.",
    "El centro de recreación está a la {direction} del parque.",
    "La tienda de artículos de jardinería está a la {direction} del vivero.",
    "El centro de distribución está a la {direction} del almacén.",
    "A la {direction} verás una pista de atletismo.",
    "El centro de atención está a la {direction} del hospital.",
    "La tienda de artículos de oficina está a la {direction} del centro de negocios.",
    "El centro de operaciones está a la {direction} de la base militar.",
    "A la {direction} verás una pista de carreras.",
    "El centro de mando está a la {direction} del cuartel general.",
    "La tienda de artículos de pesca está a la {direction} del lago.",
    "El centro de convenciones está a la {direction} del hotel.",
    "A la {direction} verás una pista de ciclismo.",
    "El centro de recreación está a la {direction} del parque.",
    "La tienda de artículos de caza está a la {direction} del bosque.",
    "El centro de distribución está a la {direction} del almacén.",
    "A la {direction} verás una pista de karting.",
    "El centro de atención está a la {direction} del hospital.",
    "La tienda de artículos de camping está a la {direction} del parque nacional.",
    "El centro de operaciones está a la {direction} de la base militar.",
    "A la {direction} verás una pista de esquí.",
    "El centro de mando está a la {direction} del cuartel general.",
    "La tienda de artículos de jardinería está a la {direction} del vivero.",
    "El centro de convenciones está a la {direction} del hotel.",
    "A la {direction} verás una pista de patinaje.",
    "El centro de recreación está a la {direction} del parque.",
    "La tienda de artículos de oficina está a la {direction} del centro de negocios.",
    "El centro de distribución está a la {direction} del almacén.",
    "A la {direction} verás una pista de atletismo.",
    "El centro de atención está a la {direction} del hospital.",
    "La tienda de artículos de pesca está a la {direction} del lago.",
    "El centro de operaciones está a la {direction} de la base militar.",
    "A la {direction} verás una pista de carreras.",
    "El centro de mando está a la {direction} del cuartel general.",
    "La tienda de artículos de caza está a la {direction} del bosque.",
    "El centro de convenciones está a la {direction} del hotel.",
    "A la {direction} verás una pista de ciclismo.",
    "El centro de recreación está a la {direction} del parque.",
    "La tienda de artículos de camping está a la {direction} del parque nacional.",
    "El centro de distribución está a la {direction} del almacén.",
    "A la {direction} verás una pista de karting.",
    "El centro de atención está a la {direction} del hospital.",
    "La tienda de artículos de jardinería está a la {direction} del vivero.",
    "La tienda de artículos de cocina está a la {direction} del mercado.",
    "El centro de investigación está a la {direction} de la universidad.",
    "A la {direction} verás una pista de hielo.",
    "El centro de visitantes está a la {direction} del parque nacional.",
    "La tienda de artículos de playa está a la {direction} del hotel.",
    "El centro de eventos está a la {direction} del estadio.",
    "A la {direction} verás una pista de snowboard.",
    "El centro de información está a la {direction} de la estación de tren.",
    "La tienda de artículos de belleza está a la {direction} de la farmacia.",
    "El centro de distribución está a la {direction} del almacén.",
    "A la {direction} verás una pista de baile.",
    "El centro de emergencias está a la {direction} del hospital.",
    "La tienda de artículos de oficina está a la {direction} del centro de negocios.",
    "El centro de adopción está a la {direction} del refugio de animales.",
    "A la {direction} verás una pista de hockey.",
    "El centro de rehabilitación está a la {direction} de la clínica.",
    "La tienda de artículos de oficina está a la {direction} del centro de negocios.",
    "El centro de formación está a la {direction} de la academia.",
    "A la {direction} verás una pista de motocross.",
    "El centro de control está a la {direction} de la torre de control.",
    "La tienda de artículos para el hogar está a la {direction} del centro comercial.",
    "El centro de operaciones está a la {direction} de la base militar.",
    "A la {direction} verás una pista de aterrizaje.",
    "El centro de mando está a la {direction} del cuartel general.",
    "La tienda de artículos deportivos está a la {direction} del estadio.",
    "El centro de convenciones está a la {direction} del hotel.",
    "A la {direction} verás una pista de ciclismo.",
    "El centro de recreación está a la {direction} del parque.",
    "La tienda de artículos de pesca está a la {direction} del lago.",
    "El centro de distribución está a la {direction} del almacén.",
    "A la {direction} verás una pista de karting.",
    "El centro de atención está a la {direction} del hospital.",
    "La tienda de artículos de caza está a la {direction} del bosque.",
    "El centro de operaciones está a la {direction} de la base militar.",
    "A la {direction} verás una pista de esquí.",
    "El centro de mando está a la {direction} del cuartel general.",
    "La tienda de artículos de camping está a la {direction} del parque nacional.",
    "El centro de convenciones está a la {direction} del hotel.",
    "A la {direction} verás una pista de patinaje.",
    "El centro de recreación está a la {direction} del parque.",
    "La tienda de artículos de jardinería está a la {direction} del vivero.",
    "El centro de distribución está a la {direction} del almacén.",
    "A la {direction} verás una pista de atletismo.",
    "El centro de atención está a la {direction} del hospital.",
    "La tienda de artículos de pesca está a la {direction} del lago.",
    "El centro de operaciones está a la {direction} de la base militar.",
    "A la {direction} verás una pista de carreras.",
    "El centro de mando está a la {direction} del cuartel general.",
    "La tienda de artículos de caza está a la {direction} del bosque.",
    "El centro de convenciones está a la {direction} del hotel.",
    "A la {direction} verás una pista de ciclismo.",
    "El centro de recreación está a la {direction} del parque.",
    "La tienda de artículos de camping está a la {direction} del parque nacional.",
    "El centro de distribución está a la {direction} del almacén.",
    "A la {direction} verás una pista de karting.",
    "El centro de atención está a la {direction} del hospital.",
    "La tienda de artículos de jardinería está a la {direction} del vivero.",
    "Gira a la {direction} en la siguiente esquina.",
    "El semáforo está a la {direction}.",
    "Sigue todo recto y luego gira a la {direction}.",
    "La tienda está a tu {direction}.",
    "Al llegar al cruce, ve a la {direction}.",
    "Dobla a la {direction} después del parque.",
    "El baño está a la {direction} del pasillo.",
    "Toma la segunda calle a la {direction}.",
    "A la {direction} encontrarás un café.",
    "La entrada principal está a la {direction}.",
    "Continúa hacia la {direction} después de la rotonda.",
    "El estacionamiento está a la {direction}.",
    "La oficina está a tu {direction}.",
    "Al final del pasillo, gira a la {direction}.",
    "Toma la escalera a la {direction}.",
    "El hospital está a la {direction} del cruce.",
    "Gira a la {direction} después del semáforo.",
    "A la {direction} verás una farmacia.",
    "Sigue hacia la {direction} después del puente.",
    "El ascensor está a tu {direction}.",
    "Dobla a la {direction} al final de la calle.",
    "El museo está a la {direction}.",
    "Toma la salida a la {direction} en la autopista.",
    "El cine queda a la {direction} de aquí.",
    "Camina hacia la {direction} hasta llegar al parque.",
    "El restaurante está a la {direction} de la plaza.",
    "La parada de autobús está a tu {direction}.",
    "Cruza la calle y ve a la {direction}.",
    "Gira a la {direction} cuando llegues a la tienda.",
    "El gimnasio está a la {direction} del edificio.",
    "Toma la calle a la {direction} después del semáforo.",
    "Al final de la avenida, ve a la {direction}.",
    "El hotel está a la {direction}.",
    "La biblioteca queda a tu {direction}.",
    "Dobla a la {direction} frente al banco.",
    "Sigue hacia la {direction} tras pasar la gasolinera.",
    "La estación está a la {direction} del parque.",
    "El mercado está a tu {direction}.",
    "A la {direction} encontrarás una panadería.",
    "El colegio está a la {direction} de la esquina.",
    "Camina hacia la {direction} hasta llegar al puente.",
    "Gira a la {direction} en la glorieta.",
    "Sigue hacia la {direction} por la avenida principal.",
    "El consultorio está a tu {direction}.",
    "La tienda de ropa está a la {direction}.",
    "Dobla a la {direction} después del cine.",
    "El supermercado está a tu {direction}.",
    "La salida está a la {direction}.",
    "El teatro queda a la {direction} de aquí.",
    "El banco está a la {direction} cruzando la calle.",
    "Sube las escaleras y ve a la {direction}.",
    "El zoológico está a la {direction} de la carretera.",
    "Gira a la {direction} después de la iglesia.",
    "El parqueadero está a tu {direction}.",
    "El edificio azul está a la {direction}.",
    "La clínica está a la {direction} del cruce.",
    "El lago está a tu {direction}.",
    "Dobla a la {direction} al pasar el túnel.",
    "El centro comercial queda a la {direction}.",
    "El terminal de buses está a la {direction} de la avenida.",
    "La playa está a tu {direction}.",
    "El restaurante italiano está a la {direction}.",
    "La plaza central está a tu {direction}.",
    "La pista de patinaje queda a la {direction}.",
    "El mercado artesanal está a la {direction} de aquí.",
    "La parada de taxis está a tu {direction}.",
    "Toma el camino a la {direction} tras cruzar el río.",
    "La farmacia queda a la {direction} del hospital.",
    "La iglesia está a la {direction} de la plaza.",
    "El campo deportivo queda a la {direction}.",
    "La oficina de correos está a tu {direction}.",
    "Gira a la {direction} después de la rotonda.",
    "La escuela queda a la {direction} del parque.",
    "El mirador está a la {direction} de la montaña.",
    "El bar está a tu {direction}.",
    "La piscina municipal está a la {direction}.",
    "El refugio está a la {direction} de la carretera.",
    "El spa queda a la {direction} de aquí.",
    "La tienda de souvenirs está a tu {direction}.",
    "La carnicería está a la {direction} de la panadería.",
    "El parque infantil queda a la {direction} del lago.",
    "El estadio está a la {direction}.",
    "La estación de tren está a tu {direction}.",
    "Dobla a la {direction} tras pasar el estacionamiento.",
    "El aeropuerto queda a la {direction}.",
    "El hotel boutique está a la {direction} de la avenida.",
    "Cruza el puente y ve a la {direction}.",
    "La universidad queda a la {direction} del centro.",
    "El acuario está a la {direction}.",
    "El refugio de montaña está a tu {direction}.",
    "La pista de carreras queda a la {direction}.",
    "El monumento está a la {direction} del parque.",
    "La sala de conciertos queda a la {direction}.",
    "El parque temático está a la {direction}.",
    "La entrada sur está a tu {direction}.",
    "El sendero se divide hacia la {direction}.",
    "Cruza el pasillo y gira a la {direction}.",
    "El estacionamiento está a la {direction} de este punto.",
    "Sigue recto y toma el desvío a la {direction}.",
    "El edificio rojo está a tu {direction}.",
    "Toma el ascensor y baja hacia la {direction}.",
    "El parque de diversiones queda a la {direction}.",
    "La cafetería está a la {direction} del lobby.",
    "Camina hacia la {direction} y sube las escaleras.",
    "El laboratorio está a la {direction} del corredor.",
    "El cruce principal está a tu {direction}.",
    "Dobla a la {direction} cuando llegues al semáforo.",
    "El centro comunitario queda a la {direction}.",
    "La heladería está a la {direction} de la esquina.",
    "Toma el camino a la {direction} después del campo.",
    "El supermercado está a tu {direction}.",
    "Sigue hacia la {direction} por el sendero.",
    "La entrada oeste está a la {direction}.",
    "El hostal está a tu {direction} al cruzar la avenida.",
    "A la {direction} verás una estatua famosa.",
    "La terminal de trenes queda a la {direction}.",
    "El puente peatonal está a tu {direction}.",
    "Toma la salida a la {direction} después del túnel.",
    "La biblioteca infantil está a la {direction} del parque.",
    "Dobla a la {direction} en la bifurcación del camino.",
    "El banco queda a la {direction} del semáforo.",
    "El edificio de oficinas está a tu {direction}.",
    "La pizzería queda a la {direction} del cruce.",
    "Sigue recto y dobla a la {direction} al llegar al parque.",
    "La terminal marítima está a la {direction}.",
    "El puente está a tu {direction} tras pasar la curva.",
    "El jardín botánico queda a la {direction} del río.",
    "El café está a la {direction} de la entrada principal.",
    "La estación de servicio está a la {direction} del cruce.",
    "El museo de arte está a la {direction} de la avenida.",
    "La sala de espera está a tu {direction}.",
    "El mercado nocturno queda a la {direction}.",
    "Cruza el parque y ve a la {direction}.",
    "El edificio histórico queda a tu {direction}.",
    "El salón de eventos está a la {direction} del hotel.",
    "La pista de atletismo queda a la {direction} del estadio.",
    "El puerto queda a la {direction} de este punto.",
    "Dobla a la {direction} tras pasar el área de picnic.",
    "El observatorio queda a la {direction} de la montaña.",
    "El camino empedrado está a tu {direction}.",
    "La cascada queda a la {direction} del sendero.",
    "La recepción está a la {direction} de la entrada.",
    "El taller mecánico queda a la {direction} del semáforo.",
    "La panadería artesanal está a tu {direction}.",
    "El cruce ferroviario está a la {direction}.",
    "El cine independiente está a la {direction} del centro.",
    "Toma el desvío a la {direction} después de la curva.",
    "El campo de golf queda a la {direction} del club.",
    "La zona de acampada está a la {direction} del lago.",
    "El refugio natural está a tu {direction}.",
    "La reserva ecológica queda a la {direction}.",
    "El puente colgante está a tu {direction}.",
    "El mirador natural queda a la {direction} de aquí.",
    "El gimnasio comunitario está a la {direction} de la plaza.",
    "La entrada a la cueva queda a la {direction}.",
    "El parque acuático está a tu {direction}.",
    "La plaza comercial está a la {direction} del cruce.",
    "El restaurante vegano queda a la {direction}.",
    "El paso subterráneo está a la {direction}.",
    "La galería de arte está a tu {direction}.",
    "El museo interactivo queda a la {direction}.",
    "El lago artificial está a la {direction} del sendero.",
    "El muelle está a tu {direction}.",
    "El parque arqueológico queda a la {direction} del río.",
    "El refugio para animales está a la {direction}.",
    "El centro cultural está a la {direction} de la plaza.",
    "El paso peatonal queda a la {direction} del puente.",
    "El invernadero está a la {direction} del jardín.",
    "La feria artesanal queda a tu {direction}.",
    "El circuito de bicicletas está a la {direction}.",
    "El mercado de pulgas queda a la {direction}.",
    "La pista de baile está a la {direction} del salón.",
    "El puerto deportivo está a tu {direction}.",
    "El centro de información está a la {direction} de la entrada.",
    "El parque de esculturas queda a la {direction}.",
    "El área de descanso está a tu {direction}.",
    "El cruce elevado está a la {direction}.",
    "El museo de historia queda a la {direction} de la plaza.",
    "La entrada norte está a la {direction}.",
    "El centro de visitantes está a la {direction} del parque.",
    "El paseo marítimo queda a tu {direction}.",
    "El camino de tierra está a la {direction} del bosque.",
    "La zona de picnic está a la {direction}.",
    "El parque nacional queda a tu {direction}.",
    "El área de juegos está a la {direction} del lago.",
    "La cascada principal queda a la {direction}.",
    "El restaurante gourmet está a tu {direction}.",
    "El auditorio está a la {direction} del campus.",
    "El club deportivo queda a la {direction} de la entrada.",
    "El hotel está a la {direction} del cruce principal.",
    "La oficina principal está a tu {direction}.",
    "El camino hacia la playa queda a la {direction}.",
    "El bosque denso está a la {direction} del sendero.",
    "El mercado de frutas queda a tu {direction}.",
    "El estacionamiento de bicicletas está a la {direction}.",
    "La torre del reloj está a tu {direction}.",
    "El cruce de caminos queda a la {direction}.",
    "El sendero de los pájaros está a la {direction} del bosque.",
    "La cascada oculta queda a la {direction}.",
    "El centro de artes está a la {direction} de la plaza.",
    "La zona de juegos infantiles está a tu {direction}.",
    "El centro de reciclaje queda a la {direction} del vecindario.",
    "El puerto comercial está a la {direction}.",
    "El faro histórico queda a tu {direction}.",
    "El santuario de aves está a la {direction} de la reserva.",
    "El cine al aire libre está a la {direction} del parque.",
    "La entrada al túnel está a tu {direction}.",
    "El sendero panorámico queda a la {direction} de la montaña.",
    "El parque infantil está a la {direction} del barrio.",
    "El restaurante tradicional queda a la {direction}.",
    "El mercado de flores está a tu {direction}.",
    "La estación de autobuses queda a la {direction} del cruce.",
    "El paseo verde está a la {direction} del río.",
    "El anfiteatro está a la {direction} del parque central.",
    "El muelle de pesca está a tu {direction}.",
    "El café vintage queda a la {direction}.",
    "La feria de libros está a la {direction} del centro comunitario.",
    "El camino hacia el acantilado está a la {direction}.",
    "El jardín de esculturas queda a tu {direction}.",
    "La pista de patinaje está a la {direction} de la plaza.",
];
const STREAK = document.getElementById("streak");
const COUNTER = document.getElementById("hits");

let streak = parseInt(localStorage.getItem("streak")) || 0;
let counter = 0;

// Events
window.addEventListener("resize", handleResize);
document.addEventListener("DOMContentLoaded", () => {
    handleResize();
    shuffleText();
    updateStreakText();
});
document.addEventListener("click", clickEvent);

// Primary functions
function handleResize() {
    const IS_SMALL_SCREEN =
        window.innerWidth < 400 || window.innerWidth < window.innerHeight;
    document.querySelectorAll(".default_icon").forEach((icon) => {
        const PARENT_ID = icon.parentElement.id;

        if (IS_SMALL_SCREEN) {
            icon.innerHTML =
                PARENT_ID === "left"
                    ? '<path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9c4.2 4.5 10.1 7.1 16.3 7.1c12.3 0 22.3-10 22.3-22.3l0-57.7 96 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-96 0 0-57.7c0-12.3-10-22.3-22.3-22.3c-6.2 0-12.1 2.6-16.3 7.1L117.5 242.2c-3.5 3.8-5.5 8.7-5.5 13.8s2 10.1 5.5 13.8l99.9 107.1z"/>'
                    : PARENT_ID === "right"
                    ? '<path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 151.2c-4.2-4.6-10.1-7.2-16.4-7.2C266 144 256 154 256 166.3l0 41.7-96 0c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l96 0 0 41.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.4-7.2l84-91c3.5-3.8 5.4-8.7 5.4-13.9s-1.9-10.1-5.4-13.9l-84-91z"/>'
                    : "";
        } else {
            icon.innerHTML = "";
        }

        icon.setAttribute("fill", IS_SMALL_SCREEN ? "#e974ae" : "");
    });
}

function shuffleText() {
    TEXT.innerHTML = getRandElement(TEXT_LIST).replace(
        /{direction}/g,
        `<b id="direction">${getRandElement(DIRECTIONS)}</b>`
    );
}

function updateStreakText() {
    STREAK.textContent = `${streak}🔥`;
}

function clickEvent(e) {
    const BTN = e.target.closest("button");
    const DIRECTION = e.target.closest("b");

    if (BTN?.id) {
        checkAnswer(BTN);
    } else if (DIRECTION?.id === "direction") {
        hint(DIRECTION);
    }
}

// Secondary functions
function checkAnswer(button) {
    const CONTENT = TEXT.textContent.toLowerCase();
    const ICONS = getIcons(button.id);

    document.removeEventListener("click", clickEvent);

    if (isCorrectAnswer(button.id, CONTENT)) {
        updateCounter(++counter);
        showIcon(ICONS.correct, ICONS.default);
    } else {
        resetCounter();
        showIcon(ICONS.wrong, ICONS.default);
    }

    if (counter > streak) {
        streak = counter;
        localStorage.setItem("streak", streak.toString());
    }

    setTimeout(() => {
        resetIcons(ICONS);
        shuffleText();
        document.addEventListener("click", clickEvent);
    }, 800);
}

function hint(direction) {
    direction.textContent = direction.textContent === "izquierda" ? "👈" : "👉";
    direction.style.fontSize = "1.1rem";
    direction.style.cursor = "default";
}

// Other functions
function getRandElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getIcons(btnId) {
    return {
        default: document.querySelector(`#${btnId} .default_icon`),
        correct: document.querySelector(`#${btnId} .correct_icon`),
        wrong: document.querySelector(`#${btnId} .wrong_icon`),
    };
}

function isCorrectAnswer(btnId, CONTENT) {
    const IS_LEFT = CONTENT.includes("izquierda") || CONTENT.includes("👈");
    const IS_RIGHT = CONTENT.includes("derecha") || CONTENT.includes("👉");

    return (
        (IS_LEFT && btnId.includes("left")) ||
        (IS_RIGHT && btnId.includes("right"))
    );
}

function updateCounter(value) {
    COUNTER.textContent = intToRoman(value);
}

function resetCounter() {
    counter = 0;
    updateCounter(counter);
    updateStreakText();
}

function showIcon(iconToShow, iconToHide) {
    iconToShow.style.display = "block";
    iconToHide.style.display = "none";
}

function resetIcons(icons) {
    icons.default.style.display = "block";
    icons.correct.style.display = "none";
    icons.wrong.style.display = "none";
}

function intToRoman(number) {
    if (number < 1) {
        return "-";
    }

    const VALUES = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const SYMBOLS = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
    ];

    return VALUES.reduce((roman, value, i) => {
        while (number >= value) {
            roman += SYMBOLS[i];
            number -= value;
        }
        return roman;
    }, "");
}
