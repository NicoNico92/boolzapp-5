$(document).ready(function() {
    //invio del messaggio
    //intercetto il click


    // $('.right-footer-icon.f-right').click(function() {
    //     // recupero il contenuto delL'input del messaggio
    //     invio_messaggio()
    //     // var testo_messaggio = $('.new-message-inputs').val();
    //     // if (testo_messaggio.length != 0) {
    //     //     // clono il template del messaggio
    //     //     var nuovo_messaggio = $('.template .message').clone();
    //     //
    //     //     //inserisco nel giusto span il teto del messaggio
    //     //     nuovo_messaggio.children('.message-text').text(testo_messaggio);
    //     //
    //     //     // aggiungo al div .message la classe sent
    //     //
    //     //     nuovo_messaggio.addClass('sent');
    //     //     //inserisco il messaggio all'interno del container
    //     //
    //     //     $('.right-messages.active').append(nuovo_messaggio);
    //     //
    //     //     //resetto l'input con una stringa vuota
    //     //
    //     //     $('.new-message-inputs').val('');
    //     //
    //     // }
    // });

var wtf = ('b' + 'a' + + 'a' + 'a').toLowerCase()
console.log(wtf)

//b e a sono semplicemente stringhe
//il secondo + è operatore unario che trasforma la stringa in un numero se non lo è già
//Siccome la a non può essere convertita in numero viene visualizzato NaN e viene concatenato a 'ba'
//output = banana



    //intercetto il tasto INVIO
    $('.new-message-inputs').keypress(function(event) {
        console.log(event);
        //controllo se il tasto digitato corrisponde al tasto invio
        if (event.which == 13) {
            invio_messaggio()
            // //recupero il contenuto dell'input del nuovo_messaggio
            // var testo_messaggio = $('.new-message-inputs').val();
            // if(testo_messaggio.length != 0) {
            // // clono il template del messaggio
            // var nuovo_messaggio = $('.template .message').clone();
            //
            // //inserisco nel giusto span il teto del messaggio
            // nuovo_messaggio.children('.message-text').text(testo_messaggio);
            //
            // // aggiungo al div .message la classe sent
            //
            // nuovo_messaggio.addClass('sent');
            // //inserisco il messaggio all'interno del container
            //
            // $('.right-messages.active').append(nuovo_messaggio) ;
            //
            // //resetto l'input con una stringa vuota
            //
            // $('.new-message-inputs').val('');
        }
    })

    //SNELLISCO INSERENDO UNA FUNZIONE

// intercetto il focus nell'area di testo del messaggio
$('.new-message-inputs').focus(function() {
    // <i class = 'fas fa-paper-plane'></i>
    $('.right-footer-icon.f-right i').toggleClass('fa fa-microphone fas fa-paper-plane');
    });
    //POTREI CONCATENARE (NB TOGLI PUNTO E VIRGOLA DA FUNZIONE PRECEDENTE)
    // .blur(function() {
    //     // <i class = 'fas fa-paper-plane'></i>
    //     $('.right-footer-icon.f-right i').toggleClass('fa fa-microphone fas fa-paper-plane');

// intercetto l'uscita del focus dall'area di testo del messaggio
$('.new-message-inputs').blur(function() {
    // <i class = 'fas fa-paper-plane'></i>
    $('.right-footer-icon.f-right i').toggleClass('fa fa-microphone fas fa-paper-plane');
});

//quando digita qualcosa
//Keyup avviene quando è stato digitato il testo (quando utente rilascia il tasto), keydown e keypress non sono quindi idonei
// NB NON IDONEO $('#contacts-filter').keypress(function(){
//posso scrivere input davanti a #contacts-filter
$('input#contacts-filter').keyup(cerca_contatti);

 //intercetto il click sul pulsante di ricerca cerca_contatti
$('.search-label').click(cerca_contatti);

function invio_messaggio() {
    var testo_messaggio = $('.new-message-inputs').val();
    if (testo_messaggio.length != 0) {
        // clono il template del messaggio
        var nuovo_messaggio = $('.template .message').clone();

        //inserisco nel giusto span il teto del messaggio
        nuovo_messaggio.children('.message-text').text(testo_messaggio);

        // aggiungo al div .message la classe sent

        nuovo_messaggio.addClass('sent');
        //inserisco il messaggio all'interno del container

        $('.right-messages.active').append(nuovo_messaggio);

        //resetto l'input con una stringa vuota

        $('.new-message-inputs').val('');


        //risposta del pc con scritto 'ok'
        setTimeout(risposta_computer,1000);

        //sposto il blocchetto contatto in cima alla lista all'invio del messaggio
        //var conversazione_corrente = $('.right-messages.active').attr('data-conversazione');
        //setTimeout(function() {
            //sposto il contatto in cima alla lista
            //$('.contact[data-conversazione="' + conversazione_corrente +'"]').prependTo('.contacts'); || $('.contact.active').prependTo('.contacts');
    //}, 500);
    }
};

//SOLUZIONE A CON data (SOLUZIONE PIU' COMODA SE SPOSTO I PANNELLI - MI BASO SUL CODICE E NON SULLA POSIZIONE, index/eq E' PIU' RIGIDO)
//recupero il data-codice del contatto su cui ho CLICCATO
//recupero il pannello con il data-conversazione corrispondente a quello su cui ho cliccato
// intercetto il click su un contatto
 $('.contact').click(function() {
     //manipolo il DOM con jquery per fare in modo che il contatto con la conversazione attiva si sposti in cima alla lista
     $(this).prependTo('.contacts'); //o ('.contact').parent;
     //attraverso l'attributo data seleziono il pannello di mio interesse
     //CON RITARDO il this non funziona dentro la funzione anonima e creo una VARIABILE
     //var contatto_cliccato= $(this);
     //setTimeout(function() {
        //contatto_cliccato.prependTo('.contacts');
 //},500}
     var questa_conversazione = $(this).attr('data-codice');
     //rimuovo lo stato attivo alla schermata chat che non mi interessa più (RIMUOVI PANNELLO CHAT ATTUALE)
     $('.right-messages').removeClass('active');
     //aggiungo lo stato attivo alla schermata char che mi interessa ora (ATTIVA PANNELLO CHAT DI INTERESSE)
     //recupero  il pannello con il data-codice corrispondente a quello del contatto su cui ho cliccato e lo visualizzo
     $('.right-messages[data-codice="' + questa_conversazione + '"]').addClass('active');
// })

//SOLUZIONE B CON index E eq
//ATTENZIONE: in alternativa ad add/removeClass POTEVO FARE Show/Hide con :visible e .append
//ATTENZIONE: con data si recuperano le conversazioni corrette anche se si invertono gli ordini delle cose
// intercetto il click su un contatto
//$('.contact').click(function() {
    //tolgo la classe active al contatto attivo = NASCONDO IL BACKGROUND GRIGIO
    // = removeClass EQUIVALE A Hide PERCHè LA CLASSE .active GLI DA DISPLAY: BLOCK (QUINDI SE TOLTA GLI DO DISPLAY: NONE)
    $('.contact').removeClass('active');
    //aggiungo la classe active al contatto su cui ho cliccato (AGGIUNGO IL BACKGROUND GRIGIO)
    $(this).addClass('active');
    // recupero l'indice del contatto cliccato (cioè la sua posizione all'interno del suo contenitore padre) = RECUPERO L'INDICE
    // var indice_contatto = $(this).index();
    //VERIFICO SE EFFETTIVAMENTE STO PRENDENDO L'INDICE
    // console.log(indice_contatto);
    //nascondo il pannello attivo al momento
    //$('.right-messages.active').removeClass('active');
    // recupero il pannello dei messaggi con indice uguale a quello del contatto e lo visualizzo
    // = SELEZIONA TUTTI I RIGHT MESSAGES E VERIFICA QUALE HA INDICE UGUALE AL MIO INDEX
    //$('.right-messages').eq(indice_contatto).addClass('active');
    // recupero il nome del contatto su cui ho cliccato
    // DI QUELLO SU CUI HO CLICCATO CERCA (AL SUO INTERNO) IL FIGLIO/NIPOTE CHE ABBIA LA CLASSE .contact-name, E DI LUI TI PRENDI IL TESTO
    var nome_contatto = $(this).find('.contact-name').text();
    // cambio il nome del contatto della conversazione corrente in alto
    $('#header-right-contact-name').text(nome_contatto);
    //recupero l'immagine del contatto su cui ho cliccato
    //SELECZIONO IL CONTACT E DI QUESTO PRENDI IL FIGLIO .contact-logo CHE A SUA VOLTA HA UN FIGLIO img. PRENDI IL CONTENUTO CON L'ATTRIBUTO src.
    var immagine_contatto = $(this).children('.contact-logo').children('img').attr('src');
    //cambio l'immagine del contatto della conversazione corrente in alto
    //NON MI INTERESSA PIU' IL TESTO MA SOSTITUISCO L'ATTRIBUTO src CON QUELLO DELL'IMMAGINE CHE MI INTERESSA
    $('.header-right-logo img').attr('src', immagine_contatto);
});

//BONUS: AGGUNGERE I MESSAGGI ALL'html CON js
//VERSIONE BASE poco PRATICA
//CREO UNA VARIABILE PER OGNI CONVERSAZIONE
// var conversazione_c1 = [
//     //APRO UN ARRAY
//         //PRIMO MESSAGGIO CONVERSAZIONE
//         {
//             'testo': 'Ciao Michele',
//             'direzione': 'sent'
//         },
//         //SECONDO MESSAGGIO CONVERSAZIONE
//         {
//             'testo': 'Ciao anche a te',
//             'direzione': 'received'
//         }
//     ];
//
// var conversazione_c2 = [
//         {
//             'testo': 'Ciao Fabio',
//             'direzione' : 'sent'
//         },
//         {
//             'testo':'Come state?',
//             'direzione': 'received'
//         },
//         {
//             'testo': 'Ciao anche a voi',
//             'direzione': 'sent'
//         }
//     ];
//
//
// //VERSIONE 2 UN POCHINO PIU' AVANZATA
// var conversazioni = [
//     {
//          'messaggi': [
//             {
//                 'testo': 'Ciao Michele',
//                 'direzione': 'sent'
//             },
//             {
//                 'testo': 'Ciao anche a te',
//                 'direzione': 'received'
//             }
//         ],
//         'conversazione': 'c1' //chiave per accedere alla conversazione
//     }
// ]
    // contenitore di tutte le conversazioni (MEGA OGGETTO GIGANTE COSì POSSO DARE UN NOME AGLI Array. ALTRIMENTI NON AVREBBERO UN NOME)
    // contiene un oggetto per ogni conversazione, in cui la chiave è il data- (id?) della conversazione e il valore è un array di oggetti messaggio
    //NOTA: UN CICLO SCORRE UN ARRAY O UN OGGETTO
    //
//POSSO FARE UN MEGA array CON DENTRO TUTTO QUANTO 'Michele' E 'Fabio' CHE CONTIENE TUTTE LE CONVERSAZIONI
//CREO UN ARRAY DI ARRAY DI OGGETTI
//L'ARRAY HA UN INDICE NUMERICO, SE TU USI UN OGGETTO TI PERMETTE DI ANDARE A DEFINIRE UNA CHIAVE CHE VUOI TU ('Michele'. 'Fabio')
// LA CONVERSAZIONE CON CHIAVE 'c1' CONTIENE Un array di MESSAGGI
// HO UNA CHIAVE PER OGNI CONVERSAZIONE E GONI CHIAVE CONTIENE L'INSIEME DI TUTTI I MESSAGGI DELLA CONVERSAZIONE
//do un nome agli array in modo da capire il mio array a quale conversazione si riferisce


//STAMPIAMO QUESTI ELEMENTI
// POPOLO I CONTENITORI DEI MESSAGGI
// var conversazioni è una variabile globale
var conversazioni = {
    'michele': [
        {
            'testo': 'Ciao Michele',
            'direzione': 'sent'
        },
        {
            'testo' : 'Ciao a tutti',
            'direzione': 'received'
        }
    ],
    'fabio': [
        {
            'testo' : 'Ciao Fabio',
            'direzione' : 'sent'
        },
        {
            'testo' : 'Ciao a tutti',
            'direzione' : 'received'
        },
        {
            'testo' : 'Ciao a tutti',
            'direzione' : 'received'
        },
    ],
    'samuele': [
        {
            'testo' : 'Ciao Samuele',
            'direzione' : 'sent'
        },
        {
            'testo' : 'Ciao a tutti',
            'direzione' : 'received'
        },
        {
            'testo' : 'Ciao a tutti',
            'direzione' : 'received'
        },
    ],
    'alessandro-b': [
        {
            'testo' : 'Ciao Ale-B',
            'direzione' : 'sent'
        },
        {
            'testo' : 'Ciao a tutti',
            'direzione' : 'received'
        },
        {
            'testo' : 'Ciao a tutti',
            'direzione' : 'received'
        },
    ],
    'alessandro-l': [
        {
            'testo' : 'Ciao Ale-L',
            'direzione' : 'sent'
        },
        {
            'testo' : 'Ciao a tutti',
            'direzione' : 'received'
        },
        {
            'testo' : 'Ciao a tutti',
            'direzione' : 'received'
        },
    ],
    'claudia': [
        {
            'testo' : 'Ciao Claudia',
            'direzione' : 'sent'
        },
        {
            'testo' : 'Ciao a tutti',
            'direzione' : 'received'
        },
        {
            'testo' : 'Ciao a tutti',
            'direzione' : 'received'
        },
    ],
    'davide': [
        {
            'testo' : 'Ciao Davide',
            'direzione' : 'sent'
        },
        {
            'testo' : 'Ciao a tutti',
            'direzione' : 'received'
        },
        {
            'testo' : 'Ciao a tutti',
            'direzione' : 'received'
        },
    ],
    'federico': [
        {
            'testo' : 'Ciao Federico',
            'direzione' : 'sent'
        },
        {
            'testo' : 'Ciao a tutti',
            'direzione' : 'received'
        },
        {
            'testo' : 'Ciao a tutti',
            'direzione' : 'received'
        },
    ],
};
//VERIFICO COSA STAMPA A CONSOLE
//LA VEDO PERCHè E' UNA VARIABILE GLOBALE
console.log(conversazioni);
//POPOLO I CONTENITORI DEI MESSAGGI
//CICLO for - in : CICLO PER OGGETTI
// for CONVERSAZIONE in CONVERSAZIONI: prendo una singola conversazione dentro a tutte le conversazioni
// var conversazione è la chiave
for (var conversazione in conversazioni) {
    //appendo le singole conversazioni al contenitore
    var contenitore_messaggi = '<div data-codice ="' + conversazione + '" class="right-messages"></div>';
    $('.right-messages-container').append(contenitore_messaggi);
    //STAMPO LE CHIAVI - PRIMO GRADO DI CICLO
    console.log(conversazione);
    //DI UN OGGETTO VATTI A VEDERE QUELLO CHE TROVI IN UNA DETERMINATA posizione - SECONDO GRADO DI CICLO
    var messaggi = conversazioni[conversazione];
    console.log(messaggi);
    //VISUALIZZO IL SINGOLO MESSAGGIO (prendo i messaggi uno alla volta)- TERZO GRADO DI CICLO
    //ENTRO NELL'Array E VEDO IL SINGOLO MESSAGGIO, PER CICLARE UN Array USO CICLO for STANDARD
    //ciclo tutti i messaggi di questa conversazione
    for (var i = 0; i < messaggi.length; i++) {


        // recupero un messaggio alla volta di questa conversazione
        var singolo_messaggio = messaggi[i];
        console.log(singolo_messaggio);
        // qual è il testo del messaggio? Lo prendo in questo modo:
        var testo_messaggio = singolo_messaggio.testo;
        // poi non metto sent o received a priori (recupero la direzione del messaggio)
        var direzione_messaggio = singolo_messaggio.direzione;
        console.log(testo_messaggio);
        console.log(direzione_messaggio);
    //ORA DEVO CLONARE IL MESSAGGIO, DOVRO' ANDARE A COSTRUIRLO COME FACEVO QUANDO FACEVO send (funzione invio messaggio) (VERSIONI CON MESSAGGI PRECOSTRUITI IN html), QUELLO CHE FACEVO DENTRO INVIA MESSAGGIO LO FACCIO QUI, STANDO ATTENTO A DOVE FARE append
    //clono il template del messaggio
    var nuovo_messaggio = $('.template .message').clone();
    // inserisco nel giusto span il testo del messaggio
    nuovo_messaggio.children('.message-text').text(testo_messaggio);
    // mi dice lui cosa c'è dentro, NON MI FISSO su sent o received
    nuovo_messaggio.addClass(direzione_messaggio);
    // inserisco il messaggio all'interno del container
    // costruisco un oggetto contenitore perchè è su di lui che devo fare append (VEDI SOPRA var contenitore_messaggi)
    //$('.right-messages.active').append(nuovo_messaggio);
    // NON FACCIO append SU QUELLO active MA SU CONVERSAZIONE CORRENTE (QUELLA SU CUI STO CICLANDO)
    //Conversazione vale perchè è la chiave del ciclo più esterno, quindi funziona anche in quello più interno
    $('.right-messages[data-codice="' + conversazione + '"]').append(nuovo_messaggio);
    }
    //IN SINTESI
    //ciclo tutta la coversazione GIGANTE
    //la scompongo in CONVERSAZIONI
    //in ogni conversazione aggiungo i singoli messsaggi

}

//SIMULO IL click SUL CONTATTO CHE HA LA CLASSE active (così già di partenza avrò la conversazione con la classe active visibile)
// = FAI FINTA CHE L'UTENTE ABBIA CLICCATO Lì
//faccio così perchè avevo fatto la funziona anonima se no potevo chiamare la funzione e non usare il click
$('.contact.active').trigger('click');


//CHIUSURA DEL MESSAGGIO
// PER CHIUSURA DEL MESSAGGIO POTREMMO INTENDERE DI ELIMINARE IL MESSAGGIO COMPLETAMENTE DAL DOM OPPURE NASCONDERLO
//UTILIZZIAMO I TEMPLATE DA CLONARE COL JS (DALL'HTML)(VEDI NOTA SU HTML)
// intercetto il click sull'iconcina a freccia del messaggio
//SE VOLESSI PRENDERE SOLO ELEMENTI NON AGGIUNTI DINAMICAMENTE
// $('.message-options').click(function(){
//per elementi aggiunti dinamicamente posso usare DOCUMENT oppure un div CONTENITORE
//quindi document on click(1'parametro), poi selettore (2' parametro), poi la funzione (3' parametro)
$(document).on('click', '.message-options', function() {
    //ALTERNATIVA VALIDA (con il padre anchè tutto il documento - area circoscritta in cui si trovano i miei messaggi)
// $('.right-messages-container').on('click', '.message-options', function() {
//Ok, hai cliccato sul documento, ma nello spicifico hai cliccato su un elemento che corrisponde a una selezione, se si --> esegui questa FUNZIONE
//aggiungo la classe active al pannello con le opzioni del messaggio
//dai la classe active a mio fratello (siblings)
//posso usare toggleClass al posto di add/removeClass
    $(this).siblings('.message-options-panel').toggleClass('active')
});

//intercetto il click sulla voce 'message-destroy'
//VERSIONE PER MESSAGGI STATICI
// $('.message-destroy').click(function() {
//PER MESSAGGI INSERITI DINAMICAMENTE IN SEGUITO:
$(document).on('click', '.message-destroy', function() {
    //ALTERNATIVA VALIDA (con il padre anzichè tutto il documento)
// $('.right-messages-container').on('click', '.message-destroy', function() {

    //recupero il suo div contenitore del messaggio e lo nascondo/elimino
    $(this).closest('.message').hide();
});

function risposta_computer() {
    //clono il template del invio_messaggio
    var messaggio_risposta  = $('.template .message').clone();
    //inserisco nel giusto span il testo del messaggio
    messaggio_risposta.children('.message-text').text('ok');
    //aggiungo al div .message la classe received
    messaggio_risposta.addClass('received');
    // inserisco il messaggio all'interno del container
    $('.right-messages.active').append(messaggio_risposta);
}

function cerca_contatti() {
    //vado a vedere cos'hai scritto (recupero il testo digitato nella ricerca)
    //IL this AL POSTO DI input#contacts-filter CHE POTEVO USARE SU FUNZIONE ANONIMA COSI' NON FUNZIONA PIU' (DEVO INTERCETTARE L'input)
    var testo_ricerca = $('input#contacts-filter').val();
    if(testo_ricerca.length != 0) {
    //vado a vedere per ognuno di essi se corrisponde a un elemento della mia lista (funzione.each mi aiuta)
    //quelli che non corrispondono li devo nascondere
     $('div.contact').each(function(){
         //find mi permette di cercare un elemento figlio a qualsiasi livello
         //val si usa sull'input, text mi prende il contenuto testuale
         var nome_contatto = $(this).find('.contact-name').text();
         //trasformo in minuscolo entrambe le stringhe
         testo_ricerca = testo_ricerca.toLowerCase();
         nome_contatto = nome_contatto.toLowerCase();
         // if (testo_ricerca == nome_contatto) { VECCHIA VERSIONE (CON .includes PIU' FINE)
         // ALTRA VERSIONE: if(nome_contatto.indexOf(testo_ricerca >-1 (OPPURE != -1)))
         //CON indexOf VERIFICA L'INDICE DELLE MIE LETTERE, CHE DEVE PARTIRE DA ZERO
         if (nome_contatto.includes(testo_ricerca)) {
         //il nome corrisponde al testo ricercato? Se si visulizzo il contatto corrispondente
         $(this).show();
     } else {
         //il nome viene nascosto
         $(this).hide();
     }
    });
    } else {
        // se l'utente non ha digitato nulla nella ricerca => visualizza tutti i contatti
        $('div.contact').show();
    }
}
//il form deve inviare un invio_messaggio
//compare un messaggio a schermo
//compare dall'altra parte un messaggio di risposta
// = uso un template (creo una scatola vuota all'interno dell'HTML)

//gestisco il click tramite ;
//il click per me è una struttura che farà partire delle funzioni (es invia messaggio) e dentro ci metterò il clone che stavo dicendo prima (prima lo clono poi se faccio console log del clone ci rendiamo conto di cosa si parla quando ci ha detto il DOM (trasposizione in oggetto del vostro html) chiamo con inner.html a quel DOM)

//lista contatti la posso creare su un array con i nomi. Ci mettimao i dati dentro al template. Chiamo il template che ho creato col clone, acchiappo il div e ci metto il testo dentro. .padre.children.figlio, quindi ci append il codice che avevo generato

//funzione da zero per ricezione e l'hanno messo all'interno di setInterval ma non va bene...


});
