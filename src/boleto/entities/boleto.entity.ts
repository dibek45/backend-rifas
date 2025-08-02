import { Comprador } from 'src/comprador/entities/comprador.entity';
import { Sorteo } from 'src/sorteo/entities/sorteo.entity';
import { Vendedor } from 'src/vendedor/entities/vendedor.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';


@Entity()
export class Boleto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numero: number;   // Must be "numero", not "number" or anything else

  @Column('float')
  precio: number;

  @Column({ default: 'disponible' })
  estado: string;

  @Column({ nullable: true })
  metodoPago?: string;

  @Column({ nullable: true, type: 'timestamp' })
  fechaCompra?: Date;

  @ManyToOne(() => Sorteo, sorteo => sorteo.boletos)
  sorteo: Sorteo;

  @ManyToOne(() => Comprador, comprador => comprador.boletos, { nullable: true })
  comprador?: Comprador;

  @ManyToOne(() => Vendedor, vendedor => vendedor.boletos, { nullable: true })
  vendedor?: Vendedor;
}
