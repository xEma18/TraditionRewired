import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  infos = [
    {
      title: "Lavoro e trasformazione digitale",
      subtitle: "Negli ultimi anni, la digitalizzazione e l'informatica hanno trasformato radicalmente il modo di lavorare. L'intero sistema produttivo si è evoluto, modificando ruoli, strumenti e competenze. Questo progetto esplora come le tecnologie digitali abbiano ridefinito professioni tradizionali, creando nuove opportunità ma anche criticità, soprattutto per chi fatica ad adattarsi.",
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlnaXRhbHxlbnwwfDB8MHx8fDI%3D'
    },
    {
      title: "Industria e automazione avanzata",
      subtitle: "L'Industria 4.0 ha introdotto tecnologie come intelligenza artificiale, IoT e machine learning nei processi produttivi. Questi strumenti permettono l’automazione di molte attività, riducendo errori e tempi morti. I sistemi cyber-fisici permettono un controllo continuo sulla produzione, garantendo efficienza, manutenzione predittiva e ottimizzazione delle risorse.",
      img: 'https://images.unsplash.com/photo-1717386255767-52643970d483?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kdXN0cnklMjA0LjB8ZW58MHwwfDB8fHwy'
    },
    {
      title: "Cloud e analisi dati",
      subtitle: "Il cloud computing consente alle aziende di accedere a risorse informatiche flessibili senza investimenti hardware ingenti. Allo stesso tempo, l'analisi dei big data offre informazioni dettagliate su clienti e mercati. Questi strumenti aiutano le imprese a prendere decisioni rapide, data-driven, e a migliorare la competitività in un contesto sempre più dinamico.",
      img: 'https://images.unsplash.com/photo-1667372283536-a832e74401c2?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: "Lavoro flessibile e remoto",
      subtitle: "Grazie alla tecnologia, il lavoro da remoto è diventato una pratica diffusa. Strumenti di videoconferenza e collaborazione online hanno reso possibile una comunicazione efficace anche a distanza. Questo cambiamento ha favorito la flessibilità, ma ha anche introdotto nuove sfide, come la gestione del tempo, lo stress digitale e l'equilibrio vita-lavoro.",
      img: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVtb3RlJTIwd29ya3xlbnwwfDB8MHx8fDI%3D'
    },
    {
      title: "Tradizione e innovazione locale",
      subtitle: "Anche settori come agricoltura e artigianato stanno vivendo un cambiamento. I droni e i sensori aiutano a migliorare la resa agricola, mentre la stampa 3D rivoluziona le pratiche artigiane. Tuttavia, queste innovazioni richiedono nuove competenze, e non tutti riescono a restare al passo con la tecnologia, creando un divario crescente nel mondo del lavoro.",
      img: 'https://images.unsplash.com/photo-1655048411636-22d9057f94ad?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMGFncmljb2x0dXJlfGVufDB8MHwwfHx8Mg%3D%3D'
    },
    {
      title: "Competenze e formazione digitale",
      subtitle: "Il rapido sviluppo tecnologico richiede un aggiornamento costante delle competenze. La formazione continua diventa cruciale per restare competitivi nel mercato del lavoro. Scuole e aziende devono collaborare per offrire programmi educativi aggiornati. Solo investendo in educazione digitale sarà possibile garantire un’occupazione qualificata e duratura nel tempo.",
      img: 'https://images.unsplash.com/photo-1673515335586-f9f662c01482?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlnaXRhbCUyMGtub3dsZWRnZXxlbnwwfDB8MHx8fDI%3D'
    }
  ];

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

  // Utility functions
  isScrolled = signal(false);

  scrollToStudy() {
    const studySection = document.querySelector('.question-section');

    if (studySection) {
      studySection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToTop() {
    document.body.scrollIntoView({ behavior: 'smooth' })
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 40);
  }
}
