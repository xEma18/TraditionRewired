import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
  conversationsData = [
    {
      title: 'Giuseppe - Falegname',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_FIF3UbsFjOrSB8qXbNIB69E8w9D0NWIFw&s',
      messages: [
        {
          question: "Può raccontarmi in cosa consiste il suo lavoro e come ha iniziato questo percorso?",
          answer: "Mi chiamo Giuseppe e provengo da una famiglia di artigiani del legno. Fin da bambino ho vissuto a stretto contatto con questo mestiere, poiché il laboratorio era sotto casa. Crescere circondato da segatura e utensili mi ha fatto sviluppare un profondo amore per il legno, un materiale che oggi considero insostituibile."
        },
        {
          question: "Ha adottato strumenti digitali per far crescere la sua attività? In che modo?",
          answer: "Sì, abbiamo abbracciato la tecnologia per modernizzare diversi aspetti del nostro lavoro. L’arrivo del web ci ha dato l’opportunità di ampliare la clientela, raggiungendo persone anche molto lontane. La presenza online è diventata un canale fondamentale per comunicare ciò che facciamo."
        },
        {
          question: "In che modo il suo lavoro si è adattato all’avvento del digitale?",
          answer: "Uno dei cambiamenti più significativi è stato l’introduzione delle macchine a controllo numerico, che ci permettono di lavorare in modo più preciso e veloce. Questo ha rivoluzionato la nostra produttività."
        },
        {
          question: "Ha introdotto tecnologie recenti nel suo processo produttivo? Può fare un esempio?",
          answer: "Certamente. Il taglio dei pannelli, che un tempo richiedeva esperienza e manualità, oggi avviene tramite macchine CNC guidate da software CAD/CAM. Questo ha automatizzato una fase importante, garantendo precisione e risparmio di tempo."
        },
        {
          question: "Quali sfide intravede per il suo mestiere nei prossimi anni in relazione al mondo digitale?",
          answer: "La vera sfida sarà sfruttare appieno le potenzialità del digitale. Ci permette di ottimizzare tempi, ridurre i costi e migliorare la sicurezza nei processi produttivi. Credo che non si possa tornare indietro: la tecnologia sarà sempre più parte integrante del nostro lavoro artigianale."
        }
      ]
    },
    {
      title: 'Roberto - Muratore',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUmACs4zZgcu5BWPzPk73MGKXj-joA19yhdQ&s',
      messages: [
        {
          question: "Potrebbe descrivere in breve la natura del suo mestiere e come è entrato in questo campo di lavoro?",
          answer: "Mi chiamo Roberto e gestisco una ditta edile focalizzata su ristrutturazioni e interventi esterni. Ho iniziato da giovane, seguendo le orme di mio padre che faceva lo stesso mestiere. Con il tempo, ho deciso di mettermi in proprio, fondando la mia impresa circa 25 anni fa, poco dopo essermi sposato."
        },
        {
          question: "Ha integrato strumenti digitali (come siti web, social media, o app) nella sua attività? Se sì, come?",
          answer: "Negli anni ho iniziato a utilizzare strumenti digitali, soprattutto per adempiere agli obblighi fiscali come la fatturazione elettronica e la posta certificata. Uso anche qualche software per la visualizzazione dei progetti, utile per dare un'idea al cliente del risultato finale prima di iniziare i lavori."
        },
        {
          question: "Quali cambiamenti ha dovuto apportare al suo mestiere o alla sua attività per adeguarsi all'era digitale?",
          answer: "Sul piano pratico, non molto è cambiato: il lavoro manuale resta centrale. Tuttavia, ho aggiornato alcune attrezzature, come le impalcature, integrando sistemi di sollevamento più sicuri e moderni. Inoltre, ho digitalizzato alcune comunicazioni con i clienti per rendere tutto più veloce ed efficiente."
        },
        {
          question: "Come si immagina il futuro del suo mestiere? Vede un'ulteriore evoluzione o integrazione con il digitale?",
          answer: "Penso che il settore edilizio continuerà a evolversi, incorporando sempre più strumenti digitali, soprattutto nella fase di progettazione e organizzazione. Nonostante la manualità resterà fondamentale, il digitale potrà migliorare la precisione e l’efficienza di molti processi."
        },
        {
          question: "Quali consigli darebbe a qualcuno che vuole entrare nel suo campo di lavoro oggi?",
          answer: "Chi vuole intraprendere questo mestiere dovrebbe partire dall’esperienza sul campo, poi cercare una specializzazione per emergere. È importante anche costruirsi una rete di contatti e restare aggiornati su normative e nuove tecnologie: sono aspetti decisivi per rimanere competitivi."
        }
      ]
    }
  ]
}
