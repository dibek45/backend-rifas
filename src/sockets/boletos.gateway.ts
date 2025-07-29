import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class SorteoGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log('📡 Cliente conectado:', client.id);
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
    this.server.to(room).emit('boletoUpdated', boleto);
    console.log(`📤 Emitiendo boleto actualizado a ${room}`);
  }
}
