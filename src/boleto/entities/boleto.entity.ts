import { Comprador } from 'src/comprador/entities/comprador.entity';
import { Sorteo } from 'src/sorteo/entities/sorteo.entity';
import { Vendedor } from 'src/vendedor/entities/vendedor.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('boleto')  // 👈 tabla en minúsculas
export class Boleto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numero: number;

  @Column('float')
  precio: number;

  @Column({ default: 'disponible' })
  estado: string;

  @Column({ nullable: true })
  metodoPago?: string;

  @Column({ nullable: true, type: 'timestamp' })
  fechaCompra?: Date;

  @ManyToOne(() => Sorteo, sorteo => sorteo.boletos)
  @JoinColumn({ name: 'sorteoId' }) // 👈 CLAVE
  sorteo: Sorteo;

  @ManyToOne(() => Comprador, comprador => comprador.boletos, { nullable: true })
  @JoinColumn({ name: 'compradorId' }) // 👈 CLAVE
  comprador?: Comprador;

  @ManyToOne(() => Vendedor, vendedor => vendedor.boletos, { nullable: true })
  @JoinColumn({ name: 'vendedorId' }) // 👈 CLAVE
  vendedor?: Vendedor;
}
