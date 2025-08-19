import { Admin } from 'src/agenda/admin-agenda/entities/admin.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

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
}
