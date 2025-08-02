import { Boleto } from 'src/boleto/entities/boleto.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Vendedor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: 'vendedor' })
  rol: string;

  @OneToMany(() => Boleto, boleto => boleto.vendedor)
  boletos: Boleto[];

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
