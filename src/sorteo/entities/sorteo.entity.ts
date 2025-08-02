import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from 'src/user/entities/user.entity';  // Relación con Usuario
import { CuentaBancaria } from 'src/vendedor/entities/cuenta-bancaria.entity';  // Relación con CuentaBancaria
import { Boleto } from 'src/boleto/entities/boleto.entity';

@Entity()
export class Sorteo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column()
  fecha: Date;

  // Relación muchos a uno con Usuario (un sorteo tiene un admin)
  @ManyToOne(() => Usuario, usuario => usuario.sorteos)
  @JoinColumn({ name: 'adminId' })
  admin: Usuario;

  @Column()
  adminId: number;

  // Relación uno a muchos (un sorteo puede tener muchas cuentas bancarias)
  @OneToMany(() => CuentaBancaria, cuentaBancaria => cuentaBancaria.sorteo)
  cuentasBancarias: CuentaBancaria[];

    // Define the OneToMany relation with Boleto
  @OneToMany(() => Boleto, (boleto) => boleto.sorteo)
  boletos: Boleto[];  // This defines the 'boletos' property
}
