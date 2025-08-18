import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Admin } from 'src/agenda/admin-agenda/entities/admin.entity';
import { Cita } from 'src/agenda/cita/cita.entity';

@Entity()
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
  admin: Admin;

  
}
