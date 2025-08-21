import { Disponibilidad } from 'src/agenda/evento/entities/disponibilidad.entity';
import { Evento } from 'src/agenda/evento/entities/evento.entity';
import { Servicio } from 'src/agenda/servicio/servicio.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('admins') // 👈 opcional, pero recomendado para nombrar la tabla
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  email: string;
  
  @Column({ nullable: true }) // 👈 lo hacemos opcional por si no todos los admins tienen teléfono al inicio
  telefono?: string;

  @OneToMany(() => Evento, (evento) => evento.admin)
  eventos: Evento[];


    // 👇 relación inversa
  @OneToMany(() => Disponibilidad, (disp) => disp.admin)
  disponibilidades: Disponibilidad[];


  @OneToMany(() => Servicio, servicio => servicio.admin)
  servicios: Servicio[];
}
