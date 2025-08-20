import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Admin } from '../admin-agenda/entities/admin.entity';
import { Evento } from '../evento/entities/evento.entity';

@Entity('servicios')
export class Servicio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'admin_id' })
  adminId: number;



  @Column()
  nombre: string;

  @Column({ name: 'duracion_min', type: 'int' })
  duracionMin: number;

  @Column({ name: 'precio_cents', type: 'int', default: 0 })
  precioCents: number;

  @Column({ nullable: true })
  color?: string;

  @Column({ default: true })
  activo: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;


 @ManyToOne(() => Evento, evento => evento.servicios, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'evento_id' })
  evento: Evento;

  // servicio pertenece a un admin
  @ManyToOne(() => Admin, admin => admin.servicios, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'admin_id' })
  admin: Admin;
}
