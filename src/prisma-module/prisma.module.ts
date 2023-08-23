import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma-service/prisma.service';

@Global() /** Tornar um módulo global permite que você o chame em qualquer submódulo */
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
