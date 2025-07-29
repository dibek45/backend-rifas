import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: [
       'http://localhost:4200',
      'https://sorteos.sa.dibeksolutions.com',
      'https://sorteos.sa.admin.dibeksolutions.com', // 👈 AGREGA ESTE
    ],
    methods: ['GET', 'POST'],
    credentials: true,
  },
  transports: ['websocket'], // 👈 importante para compatibilidad con frontend
})
export class SorteoGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

 handleConnection(client: Socket) {
  console.log('📡 Cliente conectado:', client.id);

  client.once('disconnect', () => {
    console.log('🔌 Cliente desconectado:', client.id);
  });
}

  @SubscribeMessage('joinSorteo')
  handleJoinSorteo(
    @MessageBody() sorteoId: number,
    @ConnectedSocket() client: Socket,
  ) {
    const room = `sorteo-${sorteoId}`;
    client.join(room);
    console.log(`✅ Cliente ${client.id} se unió a la sala ${room}`);
  }

emitBoletoActualizado(boleto: any) {
  if (!boleto?.sorteoId) {
    console.warn('⚠️ No se puede emitir: boleto sin sorteoId', boleto);
    return;
  }
  const room = `sorteo-${boleto.sorteoId}`;
  console.log(`📣 Emitiendo por socket a ${room}`, boleto); // <- AÑADE ESTO

  this.server.to(room).emit('boletoUpdated', boleto);
  console.log(`📤 Emitido a sala ${room}`);
}

}
