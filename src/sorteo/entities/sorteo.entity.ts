import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Boleto } from 'src/boleto/entities/boleto.entity';
import { CuentaBancaria } from 'src/vendedor/entities/cuenta-bancaria.entity';
import { Usuario } from 'src/user/entities/user.entity';

@Entity('"sorteo"') // 👈 ¡ojo, con mayúscula!
export class Sorteo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion?: string;

  @Column({ nullable: true })
  imagen?: string;

  @Column({ type: 'timestamp' })
  fecha: Date;

@Column({ type: 'timestamp', nullable: true })
cierreVentas: Date | null;


  @Column('float', { nullable: true })
  costoBoleto?: number;

  @Column({ nullable: true })
  totalBoletos?: number;

  @Column({ nullable: true })
  boletosVendidos?: number;

  @Column({ nullable: true })
  estado?: string;

  @Column({ nullable: true })
  numeroWhatsApp?: string;

  @Column({ nullable: true })
  nombreEmpresa?: string;

  @Column({ nullable: true })
  linkfacebook?: string;

  @Column({ nullable: true })
  numeroCuenta?: string;

  @Column({ nullable: true })
  tipoBanco?: string;

  @Column({ nullable: true })
  numeroDeSorteo?: string;

  @Column({ nullable: true })
  mensajeWhatsappInfo?: string;

  @Column({ nullable: true })
  mensajeWhatsappApartado?: string;

  @Column({ nullable: true })
  mensajeWhatsappConfirmado?: string;

  @Column({ nullable: true })
  mensajeWhatsappAnuncio?: string;

  // Relaciones

  @OneToMany(() => Boleto, boleto => boleto.sorteo)
  boletos: Boleto[];

 @ManyToOne(() => CuentaBancaria, cuenta => cuenta.sorteos, { nullable: true })
@JoinColumn({ name: 'cuentaBancariaId' }) // este asocia la FK manual
cuentaBancaria?: CuentaBancaria | null;

@Column({ nullable: true })
cuentaBancariaId?: number;



  @ManyToOne(() => Usuario, usuario => usuario.sorteosAdmin)
  @JoinColumn({ name: 'adminId' })
  admin: Usuario;

  @Column()
  adminId: number;
}
