import { Boleto } from 'src/boleto/entities/boleto.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Comprador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  telefono: string;

  @OneToMany(() => Boleto, boleto => boleto.comprador)
  boletos: Boleto[];

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  creadoEn: Date;

  @ManyToOne(() => Comprador, comprador => comprador.referidos, { nullable: true })
  @JoinColumn({ name: 'referidoId' })
  referido: Comprador;

  @OneToMany(() => Comprador, comprador => comprador.referido)
  referidos: Comprador[];

  @Column({ nullable: true })
  referidoId: number;
}
