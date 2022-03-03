$(()=>{
    
    $('#btnStart').on("click",function(){
    const mieImg = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock", "arrabbiato", "bello",
        "piangere", "ridere", "amare", "amare1", "spavento", "shock"];
        
    
        //genera ciclicamente 16 div contenenti le immagini pescate randomicamente
        //crea un ciclo che si fermi alla sedicesima iterazione
            

        for(let i =0;i<16;i++){
            let random = Math.floor(Math.random() * mieImg.length);
            let immagineRandom = mieImg.splice(random, 1)

          $('<div class="images" id ="emoji' +i+'"><img id="'+i+'" src="img/'+immagineRandom+'.png" width="130" height="130"></div>' ).appendTo('#memory');
        }
            //genera un numero randomico che va da zero l numero si elementi presenti nell'array mieImg
            //usa come un indice il numero appena generato, ed usalo per pescare randomicamente un'immagine
            //rimuovi l'immagine dall'array
    
            //usa jquery per creare un div come questo:
            //<div class="images" id="emoji'+i+'" ></div>
            //contenente un tag img come questo: 
            //<img id="'+i+'" src="img/'+immagineRandom+'.png"  width="130" height="130">
            //dove i è un indice che si incrementa e immagineRandom è l'immagine pescata randomicamente
    
            //ricordati di mostrare gli elementi di html appena creati
        
            let   immaginiCliccate = []


        //gestione evento click

        $(".images").not(".trovato").on("click", function(){
            let nFlips = $(".numclicks span").text()
            nFlips++
            $(".numclicks span").text(nFlips)



         
           /* $(this).children().show()
            immaginiCliccate.push({
                id : $(this).children().attr('id'),
                src : $(this).children().attr('src')
            })
            //preparo un gestore per l'evento click sugli elementi cliccati(quelli con la classe .images)
    
            $(this).children().show()*/

if(immaginiCliccate.length !=2){
    let imgId = $(this).children().attr('id')
    let imgSrc = $(this).children().attr('src')
    let oggettoImage = {
        id : imgId,
        src : imgSrc
    }



    $('#'+imgId).show();

    immaginiCliccate.push(oggettoImage)
}
            
           if(immaginiCliccate.length == 2){
                   if(immaginiCliccate[0].src == immaginiCliccate[1].src){
                       immaginiCliccate = []
                       $('#'+immaginiCliccate[0].id).addClass('trovato')
                           $('#'+immaginiCliccate[1].id).addClass('trovato')
                   } else {
                       setTimeout(function(){
                        $('#'+immaginiCliccate[0].id).hide()
                        $('#'+immaginiCliccate[1].id).hide()
                        immaginiCliccate = []
                           
                       },300);
                   };
           }

        })

        $('#Restart').on("click",function(){
            window.location.reload();
        })

    })



    })
        //creo un array in cui salverò le informazioni sugli elementi cliccati


    
            //Crea un contatore di click
            //inizia creando una variabile che legga il testo contenuto nel tag html che mostra il numero di click(span dentro a .numclicks)
            //incrementa di 1 il valore ottenuto
            //riscrivi il numero nell'html, sostituendolo con quello pre esistente
    
            //crea un controllo che indichi se l'array immaginiCliccate contiene o meno i due elementi da controllare
            //se nell'array ci sono meno di 2 elementi permetterai di aggiungerne altri
    
                
                //crea una variabile contenente l'id dell'immagine cliccata
                //crea una variabile contenente l'attributo src dell'immagine cliccata
    
                //rendi visibile l'immagine presente nell'elemento cliccato
                
                //crea un oggetto contenente le proprietà id ed src salvate nelle 2 variabili appena create
               
                
                //aggiungi l'oggetto appena creato all'array immaginiCliccate
    
                //controlla quante immagini sono state cliccate(con un if), se sono 2 devi verificare se sono identiche o meno 
    
                    //crea un nuovo if per verificare se le immagini selezionate sono identiche o meno
                    //confronta gli elementi cliccati, se le proprietà src sono identiche svuota l'array immaginiCliccate
                    //se le proprietà src sono diverse svuota l'array immaginiCliccate e nascondi entrambe le immagini
                    
                    //usa setTimeout() per far sparire le immagini dopo un certo lasso di tempo, per far si che l'utente possa osservare 
                    //le carte che ha scoperto prima che queste scompaiano
