import { Admin } from 'src/agenda/admin-agenda/entities/admin.entity';
import { Servicio } from 'src/agenda/servicio/servicio.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity('disponibilidades')   // nombre de la tabla en la BD
export class Disponibilidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dia_semana: string;  // lunes, martes, ...

  @Column({ type: 'time' })
  hora_inicio: string;

  @Column({ type: 'time' })
  hora_fin: string;

@ManyToOne(() => Admin, (admin) => admin.disponibilidades, { onDelete: 'CASCADE' })
@JoinColumn({ name: 'admin_id' })   // 👈 aquí obligamos a usar admin_id
admin: Admin;


  // 👇 Relación con servicios
  @OneToMany(() => Servicio, (servicio) => servicio.admin)
  servicios: Servicio[];
}
