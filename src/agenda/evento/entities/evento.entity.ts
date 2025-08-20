import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Admin } from 'src/agenda/admin-agenda/entities/admin.entity';
import { Cita } from 'src/agenda/cita/cita.entity';
import { Servicio } from 'src/agenda/servicio/servicio.entity';

@Entity('eventos')
export class Evento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column({ nullable: true })
  descripcion?: string;

  @Column()
  fecha: Date;

  @Column()
  duracion: number; // en minutos

  @OneToMany(() => Cita, (cita) => cita.evento, { cascade: true })
  citas: Cita[];

  @ManyToOne(() => Admin, (admin) => admin.eventos, { eager: true })
  @JoinColumn({ name: 'admin_id' }) // 👈 solo esto crea la FK
  admin: Admin;

  @OneToMany(() => Servicio, (servicio) => servicio.evento)
servicios: Servicio[];
}
