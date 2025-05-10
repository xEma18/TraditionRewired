import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  currentWoodSlide: WritableSignal<number> = signal(0);
  maxWoodSlide = computed(() => {
    return this.woodWorkerSlides().at(-1)?.index || 10;
  });

  currentBrickSlide: WritableSignal<number> = signal(0);
  maxBrickSlide = computed(() => {
    return this.brickLayerSlides().at(-1)?.index || 10;
  });

  woodWorkerSlides = signal([
    {
      index: 0,
      title: "Trasformazione digitale",
      text: "Giuseppe potrebbe adottare un sistema di gestione ordini online e un configuratore 3D per mobili su misura, trasformando l’interazione cliente-artigiano in un’esperienza digitale personalizzata.",
      icon: "fa-solid fa-diagram-project"
    },
    {
      index: 1,
      title: "Industria e automazione avanzata",
      text: "Potrebbe integrare intelligenza artificiale per ottimizzare i disegni CAD e sensori IoT per monitorare l’efficienza delle macchine CNC e prevenire guasti.",
      icon: "fa-solid fa-robot"
    },
    {
      index: 2,
      title: "Cloud e analisi dati",
      text: "Archiviare progetti in cloud gli permetterebbe di collaborare facilmente con i clienti e analizzare i dati sugli ordini per prevedere trend e gestire meglio il magazzino.",
      icon: "fa-solid fa-cloud"
    },
    {
      index: 3,
      title: "Lavoro flessibile e remoto",
      text: "Potrebbe offrire consulenze video da remoto per progettazioni su misura e creare un sistema digitale di progettazione collaborativa con il cliente, riducendo incontri fisici.",
      icon: "fa-solid fa-house-laptop"
    },
    {
      index: 4,
      title: "Tradizione e innovazione locale",
      text: "Potrebbe raccontare digitalmente le tecniche tradizionali di lavorazione del legno attraverso video o social, unendo identità artigiana e visibilità tecnologica.",
      icon: "fa-solid fa-tree"
    },
    {
      index: 5,
      title: "Competenze e formazione digitale",
      text: "Giuseppe potrebbe proporre corsi online su falegnameria moderna o aggiornarsi tramite moduli di formazione su nuove tecnologie produttive e design generativo.",
      icon: "fa-solid fa-graduation-cap"
    }
  ]);


  brickLayerSlides = signal([
    {
      index: 0,
      title: "Competenze e formazione digitale",
      text: "Potrebbe seguire o offrire micro-corsi su nuove tecnologie edilizie, sicurezza digitale e normative, promuovendo una cultura di aggiornamento continuo tra i suoi collaboratori.",
      icon: "fa-solid fa-chalkboard-teacher"
    },
    {
      index: 1,
      title: "Tradizione e innovazione locale",
      text: "Potrebbe valorizzare tecniche costruttive tradizionali attraverso progetti di restauro digitale, unendo esperienza edilizia locale e strumenti di realtà aumentata.",
      icon: "fa-solid fa-monument"
    },
    {
      index: 2,
      title: "Lavoro flessibile e remoto",
      text: "Nonostante la fisicità del lavoro, potrebbe remotizzare la comunicazione con clienti e fornitori, gestendo preventivi, aggiornamenti e sopralluoghi iniziali in modo digitale.",
      icon: "fa-solid fa-laptop-house"
    },
    {
      index: 3,
      title: "Cloud e analisi dati",
      text: "Utilizzando una piattaforma cloud, Roberto potrebbe archiviare la documentazione dei cantieri, condividere report con clienti e monitorare tempi e costi tramite analytics.",
      icon: "fa-solid fa-database"
    },
    {
      index: 4,
      title: "Industria e automazione avanzata",
      text: "L’utilizzo di droni per rilievi, robot per sollevamento materiali e sensori per la sicurezza strutturale migliorerebbe l’efficienza e la sicurezza del cantiere.",
      icon: "fa-solid fa-cogs"
    },
    {
      index: 5,
      title: "Trasformazione digitale",
      text: "Roberto potrebbe adottare software di gestione cantieri e pianificazione lavori, digitalizzando il coordinamento delle squadre e dei materiali in tempo reale.",
      icon: "fa-solid fa-helmet-safety"
    }
  ]);


  // Logic
  handleArrowClick(direction: 'left' | 'right', type: 'wood' | 'brick') {
    const signal = type === 'wood' ? this.currentWoodSlide : this.currentBrickSlide;
    const maxSlide = type === 'wood' ? this.maxWoodSlide() : this.maxBrickSlide();

    if (signal() === 0 && direction === 'left') return signal.set(maxSlide);

    if (signal() === maxSlide && direction === 'right') return signal.set(0);

    signal.update(value => {
      return direction === 'left' ? value - 1 : value + 1;
    })
  }

  // Utility
  getStyle(index: number, type: string) {
    const value = type === 'wood' ? this.currentWoodSlide() : this.currentBrickSlide();
    const percentage = (index - value) * 100;

    return {
      transform: 'translateX(' + percentage + '%)'
    }
  }
}
