// src/agenda/cita/entities/cita.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Evento } from '../evento/entities/evento.entity';

@Entity('citas')
export class Cita {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'nombre_cliente' })
  nombreCliente: string;

  @Column({ name: 'telefono_cliente' })
  telefonoCliente: string;

  @Column({ name: 'fecha', type: 'date' })
  fecha: Date;

  @Column({ name: 'hora', type: 'time' })
  hora: string;

  @Column({ name: 'estado', default: 'pendiente' })
  estado: string;

  @Column({ name: 'evento_id' })
  eventoId: number;

  @ManyToOne(() => Evento, (evento) => evento.citas, { eager: true })
  @JoinColumn({ name: 'evento_id' })
  evento: Evento;
}
