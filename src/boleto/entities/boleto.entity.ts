import { Comprador } from 'src/comprador/entities/comprador.entity';
import { Sorteo } from 'src/sorteo/entities/sorteo.entity';
import { Vendedor } from 'src/vendedor/entities/vendedor.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';


@Entity()
export class Boleto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numero: number;

  @Column()
  precio: number;

  @Column({ default: 'disponible' })
  estado: string;

  @Column({ nullable: true })
  metodoPago: string;

  @Column({ nullable: true })
  fechaCompra: Date;

  @ManyToOne(() => Comprador, comprador => comprador.boletos, { nullable: true })
  @JoinColumn({ name: 'compradorId' })
  comprador: Comprador;

  @Column({ nullable: true })
  compradorId: number;

  @ManyToOne(() => Vendedor, vendedor => vendedor.boletos, { nullable: true })
  @JoinColumn({ name: 'vendedorId' })
  vendedor: Vendedor;

  @Column({ nullable: true })
  vendedorId: number;

  @ManyToOne(() => Sorteo, sorteo => sorteo.boletos)
  @JoinColumn({ name: 'sorteoId' })
  sorteo: Sorteo;

  @Column()
  sorteoId: number;
}
