import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {
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
}
