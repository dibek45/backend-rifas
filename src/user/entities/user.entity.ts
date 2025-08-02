import { Sorteo } from 'src/sorteo/entities/sorteo.entity';
import { CuentaBancaria } from 'src/vendedor/entities/cuenta-bancaria.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'admin' })
  rol: string;


  @OneToMany(() => Sorteo, sorteo => sorteo.admin)
  sorteos: Sorteo[];

  
  // Relación uno a muchos (un sorteo puede tener muchas cuentas bancarias)
  @OneToMany(() => CuentaBancaria, cuentaBancaria => cuentaBancaria.sorteo)
  cuentasBancarias: CuentaBancaria[];
}
