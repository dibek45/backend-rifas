// src/agenda/cita/entities/cita.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Evento } from '../evento/entities/evento.entity';

@Entity('citas')
export class Cita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreCliente: string;

  @Column()
  telefonoCliente: string;

  @Column()
  fecha: Date;

  @Column()
  hora: string;

  @Column({ default: 'pendiente' })
  estado: string;


    @ManyToOne(() => Evento, (evento) => evento.citas, { eager: true })
  @JoinColumn({ name: 'eventoId' })
  evento: Evento;
}
