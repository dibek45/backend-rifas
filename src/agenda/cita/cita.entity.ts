// src/agenda/cita/entities/cita.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Evento } from '../evento/entities/evento.entity';

@Entity('citas') // 👈 nombre de la tabla en plural
export class Cita {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'nombre_cliente', type: 'varchar', length: 150 })
  nombreCliente: string;

  @Column({ name: 'telefono_cliente', type: 'varchar', length: 20 })
  telefonoCliente: string;

  @Column({ name: 'fecha', type: 'date' })
  fecha: Date;

  @Column({ name: 'hora', type: 'time' })
  hora: string;

  @Column({ name: 'estado', type: 'varchar', length: 50, default: 'pendiente' })
  estado: string;

  @Column({ name: 'evento_id' })
  eventoId: number;

  @ManyToOne(() => Evento, (evento) => evento.citas, { eager: true })
  @JoinColumn({ name: 'evento_id' })
  evento: Evento;
}
