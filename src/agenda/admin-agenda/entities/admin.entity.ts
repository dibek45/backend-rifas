import { Evento } from 'src/agenda/evento/entities/evento.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('admin') // 👈 opcional, pero recomendado para nombrar la tabla
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  email: string;

  @OneToMany(() => Evento, (evento) => evento.admin)
  eventos: Evento[];
}
